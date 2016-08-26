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
                                    <span className="underline">About</span>
                                </h3>

                                <img src="images/box_about.png" alt=""/>

                                <p className="tagline">I am a <u>full stack developer</u> with experience in a variety of technologies. See what I can do to help you and your business.
                                </p>

                                <Link to="/services" className="button full">
                                    What I Do
                                </Link>

                            </div>
                        </div>

                    </div>

                </section>

                <Footer/>
            </div>
        )
    }
}
