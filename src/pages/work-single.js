import React from 'react';
import jQuery from 'jquery';

import Footer from '../components/footer';

export default class WorkSingle extends React.Component {
    constructor() {
        super();

        this.state = {
            work: {}
        };
    }

    componentWillMount() {
        this._fetchWork();
    }

    componentWillReceiveProps(newProps) {
        this._fetchWork();
    }

    render() {
        const stack = this._getStack();
        const gallery = this._getGallery();

        return (
            <div className="route-slider">
                <section id="works" className="page single">
                    <div className="container">

                        <div className="desktop-3 tablet-12 nested columns">

                            <div className="sidebar sticky">
                                <div className="desktop-3 tablet-12 columns">
                                    <div className="box-info">
                                        <h3 className="border-top">{this.state.work.name}</h3>
                                        <p className="project-desc">2013</p>
                                        <p>The various forms of elements from different places expose the essence or identity of a subject through eliminating all non-essential forms, features, or concepts.
                                        </p>
                                    </div>
                                </div>

                                <div className="desktop-3 tablet-6 mobile-half columns">
                                    <div className="box-info">
                                        <h4 className="border-top">Category</h4>
                                        <p>
                                            Photography<br/>
                                            Art Direction
                                        </p>
                                    </div>
                                </div>

                                <div className="desktop-3 tablet-6 mobile-half columns">
                                    <div className="box-info">
                                        <h4 className="border-top">Client</h4>
                                        <a href={this.state.work.clientUrl} target={this.state.work.clientUrl}><img src={this.state.work.clientLogo} alt=""/></a>

                                        <p>{this.state.work.clientDesc}</p>
                                    </div>
                                </div>

                                <div className="desktop-3 tablet-12 columns">
                                    <div className="box-info">
                                        <h4 className="border-top">Technology Stack</h4>
                                        <div className="icon-holder">
                                            {stack}
                                        </div>
                                    </div>
                                </div>

                                <div className="clear"></div>
                            </div>
                        </div>

                        <div className="desktop-9 tablet-12 columns">

                            {gallery}

                        </div>

                        <div className="clear"></div>

                    </div>
                </section>

                <Footer/>
            </div>

        )
    }

    _fetchWork() {
        jQuery.ajax({
            method: 'GET',
            dataType: "json",
            url: 'api/works.json',
            success: (works) => {
                const work = works.find(work => (work.id === parseInt(this.props.params.id, 10)));
                this.setState({work});
            }
        });

    }

    _getStack() {
        if (typeof this.state.work.stack != 'undefined') {
            return this.state.work.stack.map((stackitem, i) => {
                return <img src={"assets/images/icons/" + stackitem + ".png"} alt="" title={stackitem} key={i}/>
            });
        } else
            return null;
        }

    _getGallery() {
        if (typeof this.state.work.gallery != 'undefined') {
            return this.state.work.gallery.map((galleryitem, i) => {
                return (
                    <div className="galleryImg" key={i}>
                        <img src={galleryitem.url} alt=""/>
                        <div className="overlay">
                            <p>{galleryitem.caption}</p>
                        </div>
                    </div>
                )
            });
        } else
            return null;
        }

}
