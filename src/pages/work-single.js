import React from 'react';
import jQuery from 'jquery';

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

    handleImageChange() {
        const galleryElement = this.refs.gallery;

        if (imagesLoaded(galleryElement)) {
            const element = document.getElementById('work-single-loader');

            element.style.opacity = "0";
            element.style.filter = 'alpha(opacity=0)';

            setTimeout(function() {
                element.parentNode.removeChild(element);
            }, 350);
        }

    }

    renderImageWithKey(imageUrl, title, i) {
        return (<img src={imageUrl} title={title} alt="" key={i} onLoad={this.handleImageChange.bind(this)} onError={this.handleImageChange.bind(this)}/>);
    }

    renderImage(imageUrl) {
        return (<img src={imageUrl} alt="" onLoad={this.handleImageChange.bind(this)} onError={this.handleImageChange.bind(this)}/>);
    }

    render() {
        const stack = this._getStack();
        const gallery = this._getGallery();

        return (
            <div className="route-slider" ref="gallery">

                <div id="work-single-loader" className="secondary-loader">
                    <img className="secondary-loading-img" src="assets/images/loading.svg" alt="LOADING"/>
                </div>

                <section id="works" className="page single">
                    <div className="container">

                        <div className="desktop-3 tablet-12 nested columns">

                            <div className="sidebar sticky">
                                <div className="desktop-3 tablet-12 columns">
                                    <div className="box-info">
                                        <h3 className="border-top">{this.state.work.name}</h3>
                                        <p className="project-desc">2013</p>
                                        <p>{this.state.work.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="desktop-3 tablet-6 mobile-half columns">
                                    <div className="box-info">
                                        <h4 className="border-top">Category</h4>
                                        <p>{this.state.work.task}
                                        </p>
                                    </div>
                                </div>

                                <div className="desktop-3 tablet-6 mobile-half columns">
                                    <div className="box-info">
                                        <h4 className="border-top">Client</h4>
                                        <a href={this.state.work.clientUrl} target={this.state.work.clientUrl}>{this.renderImage(this.state.work.clientLogo)}</a>

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
                return this.renderImageWithKey("assets/images/icons/" + stackitem + ".png", stackitem, i)
            });
        } else
            return null;
        }

    _getGallery() {
        if (typeof this.state.work.gallery != 'undefined') {
            return this.state.work.gallery.map((galleryitem, i) => {
                return (
                    <div className="galleryImg" key={i}>
                        {this.renderImage(galleryitem.url)}
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
