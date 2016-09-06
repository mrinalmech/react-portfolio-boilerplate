import React from 'react';
import {Link} from 'react-router';

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

export default class AboutPage extends React.Component {

    handleImageChange() {
        const galleryElement = this.refs.gallery;

        if (imagesLoaded(galleryElement)) {
            var element = document.getElementById('about-loader');

            element.style.opacity = "0";
            element.style.filter = 'alpha(opacity=0)';

            setTimeout(function() {
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
                    <img className="secondary-loading-img" src="assets/images/loading.png" alt="LOADING"/>
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

                                <p>I have a bachelor's and master's in Computer Science from the extremely prestigious and selective Indian Institute of Technology Delhi and an MBA from the equally prestigious and selective Indian Institute of Management Calcutta. For a more detailed CV please click here.
                                </p>
                                <p className="about-headline">
                                    Education
                                </p>
                                <div className="edu-holder">
                                    <a href="http://www.iitd.ac.in" target="iit">
                                        {this.renderImage("assets/images/about/iitd.png", "IIT Delhi 2009-14")}
                                    </a>
                                    <a href="http://www.iimcal.ac.in" target="iim">
                                        {this.renderImage("assets/images/about/iimc.png", "IIM Calcutta 2014-16")}
                                    </a>
                                </div>
                                <p className="about-headline">
                                    Research papers
                                </p>
                                <div className=" edu-holder">
                                    <a href="http://link.springer.com/content/pdf/10.1007%2F978-3-319-08599-9_6.pdf" target="pdf">
                                        {this.renderImage("assets/images/about/icchp.png", "Edutactile presented at ICCHP 2014")}
                                    </a>
                                </div>
                                <p>Apart from coding I enjoy reading books, watching movies, playing video games and listening to music. Some of my favorites are listed on the right.</p>

                            </div>

                        </div>

                        <div className="desktop-6 tablet-12 columns">

                            <div className="box-about">

                                <h3 className="font-color-primary">
                                    <span className="underline">some of my most favorite things in the world</span>
                                </h3>
                                <div className="about-holder">
                                    {this.renderImage("assets/images/about/wc3.png", "Warcraft 3")}
                                    {this.renderImage("assets/images/about/me.png", "Mass Effect")}
                                    {this.renderImage("assets/images/about/bioshock.png", "Bioshock Infinite")}
                                    {this.renderImage("assets/images/about/psycho.png", "Psychonauts")}
                                    {this.renderImage("assets/images/about/gtav.png", "GTA V")}
                                </div>

                                <div className="about-holder">
                                    {this.renderImage("assets/images/about/tba.png", "Metallica by Metallica")}
                                    {this.renderImage("assets/images/about/mop.png", "Master of Puppets by Metallica")}
                                    {this.renderImage("assets/images/about/ram.png", "Random Access Memories by Daft Punk")}
                                    {this.renderImage("assets/images/about/rs.png", "Rubber Soul by The Beatles")}
                                    {this.renderImage("assets/images/about/sott.png", "Sign of the Times by Prince")}
                                </div>

                                <div className="about-holder">
                                    {this.renderImage("assets/images/about/ah.png", "Annie Hall")}
                                    {this.renderImage("assets/images/about/ews.png", "Everybody Wants Some!!")}
                                    {this.renderImage("assets/images/about/ma.png", "Mistress America")}
                                    {this.renderImage("assets/images/about/mk.png", "Moonrise Kingdom")}
                                    {this.renderImage("assets/images/about/china.png", "Chinatown")}
                                </div>

                                <div className="about-holder">
                                    {this.renderImage("assets/images/about/detective.png", "True Detective")}
                                    {this.renderImage("assets/images/about/metal.png", "Metalocalypse")}
                                    {this.renderImage("assets/images/about/silicon.png", "Silicon Valley")}
                                    {this.renderImage("assets/images/about/simpsons.png", "The Simpsons")}
                                    {this.renderImage("assets/images/about/cowboy.png", "Cowboy Bebop")}
                                </div>

                                <div className="about-holder">
                                    {this.renderImage("assets/images/about/midnight.png", "Midnight's Children by Salman Rushdie")}
                                    {this.renderImage("assets/images/about/hundred.png", "100 Years of Solitude by Gabriel Garcia Marquez")}
                                    {this.renderImage("assets/images/about/tree.png", "Tree of Smoke by Denis Johnson")}
                                    {this.renderImage("assets/images/about/billy.png", "Billy Lynn's Long Halftime Walk by Ben Fountain")}
                                    {this.renderImage("assets/images/about/sisters.png", "The Sisters Brothers by Patrick DeWitt")}
                                </div>

                                <div className="about-holder">
                                    {this.renderImage("assets/images/about/david.png", "David Boring by Daniel Clowes")}
                                    {this.renderImage("assets/images/about/allstar.png", "All Star Superman by Grant Morrison")}
                                    {this.renderImage("assets/images/about/casanova.png", "Casanova by Matt Fraction")}
                                    {this.renderImage("assets/images/about/starman.png", "Starman by James Robinson")}
                                    {this.renderImage("assets/images/about/hitman.png", "Hitman by Garth Ennis")}
                                </div>

                            </div>
                        </div>

                    </div>

                </section>

                <Footer/>
            </div>
        )
    }

}
