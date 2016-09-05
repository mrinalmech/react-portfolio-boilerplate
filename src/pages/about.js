import React from 'react';
import {Link} from 'react-router';

import Footer from '../components/footer';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="route-slider">
                <section id="home-slider">

                    <div className="container">

                        <div className="desktop-6 tablet-12 columns">
                            <div className="box-about">

                                <h3 className="font-color-primary">
                                    <span className="underline">about</span>
                                </h3>

                                <p className="tagline">I am a <u>full stack developer</u> with experience in a variety of technologies. See what I can do to help you and your business.
                                </p>

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
                                        <img src="assets/images/about/iitd.png" alt="" title="IIT Delhi 2009-14"/>
                                    </a>
                                    <a href="http://www.iimcal.ac.in" target="iim">
                                        <img src="assets/images/about/iimc.png" alt="" title="IIM Calcutta 2014-16"/>
                                    </a>
                                </div>
                                <p className="about-headline">
                                    Research papers
                                </p>
                                <div className=" edu-holder">
                                    <a href="http://link.springer.com/content/pdf/10.1007%2F978-3-319-08599-9_6.pdf" target="pdf">
                                        <img src="assets/images/about/icchp.png" alt="" title="Edutactile presented at ICCHP 2014"/>
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
                                    <img src="assets/images/about/wc3.png" alt="" title="Warcraft 3"/>
                                    <img src="assets/images/about/me.png" alt="" title="Mass Effect"/>
                                    <img src="assets/images/about/bioshock.png" alt="" title="Bioshock Infinite"/>
                                    <img src="assets/images/about/psycho.png" alt="" title="Psychonauts"/>
                                    <img src="assets/images/about/gtav.png" alt="" title="GTA V"/>
                                </div>

                                <div className="about-holder">
                                    <img src="assets/images/about/tba.png" alt="" title="Metallica by Metallica"/>
                                    <img src="assets/images/about/mop.png" alt="" title="Master of Puppets by Metallica"/>
                                    <img src="assets/images/about/ram.png" alt="" title="Random Access Memories by Daft Punk"/>
                                    <img src="assets/images/about/rs.png" alt="" title="Rubber Soul by The Beatles"/>
                                    <img src="assets/images/about/sott.png" alt="" title="Sign of the Times by Prince"/>
                                </div>

                                <div className="about-holder">
                                    <img src="assets/images/about/ah.png" alt="" title="Annie Hall"/>
                                    <img src="assets/images/about/ews.png" alt="" title="Everybody Wants Some!!"/>
                                    <img src="assets/images/about/ma.png" alt="" title="Mistress America"/>
                                    <img src="assets/images/about/mk.png" alt="" title="Moonrise Kingdom"/>
                                    <img src="assets/images/about/china.png" alt="" title="Chinatown"/>
                                </div>

                                <div className="about-holder">
                                    <img src="assets/images/about/detective.png" alt="" title="True Detective"/>
                                    <img src="assets/images/about/metal.png" alt="" title="Metalocalypse"/>
                                    <img src="assets/images/about/silicon.png" alt="" title="Silicon Valley"/>
                                    <img src="assets/images/about/simpsons.png" alt="" title="The Simpsons"/>
                                    <img src="assets/images/about/cowboy.png" alt="" title="Cowboy Bebop"/>
                                </div>

                                <div className="about-holder">
                                    <img src="assets/images/about/midnight.png" alt="" title="Midnight's Children by Salman Rushdie"/>
                                    <img src="assets/images/about/hundred.png" alt="" title="100 Years of Solitude by Gabriel Garcia Marquez"/>
                                    <img src="assets/images/about/tree.png" alt="" title="Tree of Smoke by Denis Johnson"/>
                                    <img src="assets/images/about/billy.png" alt="" title="Billy Lynn's Long Halftime Walk by Ben Fountain"/>
                                    <img src="assets/images/about/sisters.png" alt="" title="The Sisters Brothers by Patrick DeWitt"/>
                                </div>

                                <div className="about-holder">
                                    <img src="assets/images/about/david.png" alt="" title="David Boring by Daniel Clowes"/>
                                    <img src="assets/images/about/allstar.png" alt="" title="All Star Superman by Grant Morrison"/>
                                    <img src="assets/images/about/casanova.png" alt="" title="Casanova by Matt Fraction"/>
                                    <img src="assets/images/about/starman.png" alt="" title="Starman by James Robinson"/>
                                    <img src="assets/images/about/hitman.png" alt="" title="Hitman by Garth Ennis"/>
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
