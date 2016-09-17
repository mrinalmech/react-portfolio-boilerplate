import React from 'react';
import jQuery from 'jquery';

import Work from '../components/work'
import Footer from '../components/footer';

function imagesLoaded(parentNode) {
    const imgElements = parentNode.querySelectorAll('img');
    for (const img of imgElements) {
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

export default class WorksPage extends React.Component {

    constructor() {

        super();

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);

    }

    componentWillMount() {
        this._fetchWorks();
    }

    handleImageChange() {
        const galleryElement = document.getElementById('vorks');
        if (imagesLoaded(galleryElement)) {
            const element = document.getElementById('works-loader');

            element.style.opacity = "0";
            element.style.filter = 'alpha(opacity=0)';

            setTimeout(function() {
                element.parentNode.removeChild(element);
            }, 350);
        }

    }

    renderImage(imageUrl) {
        return (<img onLoad={this.handleImageChange.bind(this)} alt="" src={imageUrl} onError={this.handleImageChange.bind(this)}/>);
    }

    renderImageWithKey(imageUrl, title, i) {
        return (<img src={imageUrl} title={title} alt="" key={i} onLoad={this.handleImageChange.bind(this)} onError={this.handleImageChange.bind(this)}/>);
    }

    render() {
        const works = this._getWorks();
        return (
            <div id="vorks" className="route-slider">
                <div id="works-loader" className="secondary-loader">
                    <img className="secondary-loading-img" src="assets/images/loading.svg" alt="LOADING"/>
                </div>
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
                                        <span className={this.props.worksPageNo * this.props.worksSize >= this.props.completeWorks.length && 'inactive'}>Next</span>
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
        this.props.setWorks(this.props.completeWorks.slice((this.props.worksPageNo - 2) * this.props.worksSize, (this.props.worksPageNo - 1) * this.props.worksSize))
        window.scrollTo(0, 0);
        this.props.decrementWorksPage();
    }

    next() {

        this.props.setWorks(this.props.completeWorks.slice(this.props.worksPageNo * this.props.worksSize, (this.props.worksPageNo + 1) * this.props.worksSize))

        window.scrollTo(0, 0);
        this.props.incrementWorksPage();
    }

    _getWorks() {
        return this.props.works.map((work) => {
            return <Work {...work} key={work.id} renderImage={this.renderImage} renderImageWithKey={this.renderImageWithKey} handleImageChange={this.handleImageChange}/>
        });
    }

    _fetchWorks() {
        jQuery.ajax({
            method: 'GET',
            dataType: "json",
            url: 'api/works.json',
            success: (works) => {
                this.props.setCompleteWorks(works);
                this.props.setWorks(works.slice((this.props.worksPageNo - 1) * this.props.worksSize, (this.props.worksPageNo) * this.props.worksSize));
            }
        });
    }
}

WorksPage.propTypes = {
    worksPageNo: React.PropTypes.number.isRequired,
    works: React.PropTypes.array.isRequired,
    completeWorks: React.PropTypes.array.isRequired,
    worksSize: React.PropTypes.number.isRequired,
    incrementWorksPage: React.PropTypes.func.isRequired,
    decrementWorksPage: React.PropTypes.func.isRequired,
    setWorks: React.PropTypes.func.isRequired,
    setCompleteWorks: React.PropTypes.func.isRequired
};
