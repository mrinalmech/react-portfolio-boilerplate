import React from 'react';
import jQuery from 'jquery';

import Work from '../components/work'
import Footer from '../components/footer';

export default class WorksPage extends React.Component {

    constructor() {

        super();

        this.state = {
            works: [],
            completeWorks: [],
            size: 4
        };

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);

    }

    componentWillMount() {
        this._fetchWorks();
    }

    render() {
        const works = this._getWorks();
        return (
            <div className="route-slider">

                <section id="works" className="">
                    <div className="container">
                        {works}
                        <div className="desktop-12 columns">

                            <div className="nav-pages">
                                <a title="Previous" className="link-prev" onClick={this.prev}>
                                    <div>
                                        <span className={this.props.worksPageNo === 1 && 'inactive'}>Previous</span>
                                    </div>
                                </a>

                                <a title="Next" className="link-next" onClick={this.next}>
                                    <div>
                                        <span className={this.props.worksPageNo * this.state.size >= this.state.completeWorks.length && 'inactive'}>Next</span>
                                    </div>
                                </a>

                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>

                </section>

                <Footer/>
            </div>
        )
    }

    prev() {
        this.setState({
            works: this.state.completeWorks.slice((this.props.worksPageNo - 2) * this.state.size, (this.props.worksPageNo - 1) * this.state.size)
        });
        window.scrollTo(0, 0);
        this.props.decrementWorksPage();
    }

    next() {
        this.setState({
            works: this.state.completeWorks.slice(this.props.worksPageNo * this.state.size, (this.props.worksPageNo + 1) * this.state.size)
        });
        window.scrollTo(0, 0);
        this.props.incrementWorksPage();
    }

    _getWorks() {
        return this.state.works.map((work) => {
            return <Work {...work} key={work.id}/>
        });
    }

    _fetchWorks() {
        jQuery.ajax({
            method: 'GET',
            dataType: "json",
            url: 'api/works.json',
            success: (works) => {
                this.setState({
                    completeWorks: works,
                    works: works.slice((this.props.worksPageNo - 1) * this.state.size, (this.props.worksPageNo) * this.state.size)
                })
            }
        });
    }
}

WorksPage.propTypes = {
    worksPageNo: React.PropTypes.number.isRequired,
    incrementWorksPage: React.PropTypes.func.isRequired,
    decrementWorksPage: React.PropTypes.func.isRequired
};
