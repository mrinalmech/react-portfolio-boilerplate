import React from 'react';
import Link from 'react-router/lib/Link';

//Util
import {imagesLoaded} from '../util/util';

//Components
import Footer from '../components/footer';
import AboutMap from '../components/aboutMap'

export default class AboutPage extends React.Component {

    handleImageChange() {
        const galleryElement = this.refs.gallery;

        if (imagesLoaded(galleryElement)) {
            const element = document.getElementById('about-loader');

            element.style.opacity = "0";
            element.style.filter = 'alpha(opacity=0)';

            setTimeout(() => {
                element.parentNode.removeChild(element);
            }, 350);
        }

    }

    renderImage(imageUrl, title) {
        return (<img onLoad={this.handleImageChange.bind(this)} src={imageUrl} title={title} alt="" onError={this.handleImageChange.bind(this)}/>);
    }

    render() {
        return (
            <div className="route-slider" ref="gallery">
                <div id="about-loader" className="secondary-loader">
                    <img className="secondary-loading-img" src="/assets/images/loading.svg" alt="LOADING"/>
                </div>
                <section id="home-slider">
                    <div className="container">
                        <div className="desktop-6 tablet-12 columns">
                            <div className="box-about">
                                <h3 className="font-color-primary">
                                    <span className="underline">about</span>
                                </h3>
                                <p className="tagline">I am a <u>full stack developer</u> with experience in a variety of technologies. See what I can do to help you and your business.</p>
                                <Link to="/services" className="button full">
                                    what i do
                                </Link>
                                <p>I have a bachelor's and master's in Computer Science from the extremely prestigious and selective Indian Institute of Technology Delhi and an MBA from the equally prestigious and selective Indian Institute of Management Calcutta. For a more detailed CV please click <u><a href="/assets/images/MrinalCV.pdf" target="cv">here</a></u>.</p>
                                <p className="about-headline">
                                    Education
                                </p>
                                <div className="edu-holder">
                                    <a href="http://www.iitd.ac.in" target="iit">
                                        {this.renderImage("/assets/images/about/iitd.png", "IIT Delhi 2009-14")}
                                    </a>
                                    <a href="http://www.iimcal.ac.in" target="iim">
                                        {this.renderImage("/assets/images/about/iimc.png", "IIM Calcutta 2014-16")}
                                    </a>
                                </div>
                                <p className="about-headline">
                                    Research papers
                                </p>
                                <div className=" edu-holder">
                                    <a href="http://link.springer.com/content/pdf/10.1007%2F978-3-319-08599-9_6.pdf" target="pdf">
                                        {this.renderImage("/assets/images/about/icchp.png", "Edutactile presented at ICCHP 2014")}
                                    </a>
                                </div>
                                <p>Apart from coding I enjoy reading books, watching movies, playing video games and listening to music.</p>
                            </div>
                        </div>
                        <div className="desktop-6 tablet-12 nested columns">
                            <div className="box-about">
                                <h3 className="font-color-primary">
                                    <span className="underline">contact</span>
                                </h3>
                                <div className="desktop-3 tablet-6 mobile-half columns">
                                    <div className="box-contact">
                                        <h4>
                                            <span className="underline">Address</span>
                                        </h4>
                                        <p>
                                            Mumbai, Maharashtra<br/>
                                            India
                                        </p>
                                    </div>
                                </div>
                                <div className="desktop-3 tablet-6 mobile-half columns">
                                    <div className="box-contact">
                                        <h4>
                                            <span className="underline">Email</span>
                                        </h4>
                                        <p>
                                            <a href="mailto:mrinalmech@gmail.com">mrinalmech@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="clear"></div>
                                <AboutMap/>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }

}
