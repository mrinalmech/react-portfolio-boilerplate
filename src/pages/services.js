import React from 'react';

import Footer from '../components/footer';
import {imagesLoaded} from '../util/util';

export default class ServicesPage extends React.Component {

    handleImageChange() {
        const galleryElement = this.refs.gallery;

        if (imagesLoaded(galleryElement)) {
            const element = document.getElementById('services-loader');

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

                <div id="services-loader" className="secondary-loader">
                    <img className="secondary-loading-img" src="assets/images/loading.svg" alt="LOADING"/>
                </div>

                <section id="about" className="page">

                    <div className="container">

                        <div className="desktop-12 columns">
                            <div className="border-top"></div>
                        </div>
                    </div>

                    <div className="services">

                        <div className="container">

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    {this.renderImage("assets/images/services/frontend.png", "")}
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>frontend web</h4>
                                    <p>My command over the frontend development begins from the design phase itself. While not a graphic designer I possess knowledge about using color, type and layout to create a coherent and visually engaging user experience. Once the design is finalised I begin turning it into a webpage using the latest HTML and CSS techniques and guidelines. I use preprocessors such as Sass and third party front end frameworks like Bootstrap to assist me in my job. The next step is breathing life into the page using good old Javascript. This might involve using JQuery if the page has static data and is animation-intensive. If it's a data-driven web application I crank out an MVC framework, either Google's Angular or Facebook's React and link it to backend APIs. To ensure the latest ES2015 functionalities I use Babel. Frontend dependencies are managed by Bower and all minification/compression of Javascript and CSS files is done by Gulp, my build system of choice.
                                    </p>
                                    <div className="icon-holder">
                                        {this.renderImage("assets/images/icons/html.png", "HTML5")}
                                        {this.renderImage("assets/images/icons/css.png", "CSS3")}
                                        {this.renderImage("assets/images/icons/sass.png", "Sass")}
                                        {this.renderImage("assets/images/icons/compass.png", "Compass")}
                                        {this.renderImage("assets/images/icons/bootstrap.png", "Bootstrap")}
                                        {this.renderImage("assets/images/icons/js.png", "Javascript")}
                                        {this.renderImage("assets/images/icons/ts.png", "Typescript")}
                                        {this.renderImage("assets/images/icons/jquery.png", "JQuery")}
                                        {this.renderImage("assets/images/icons/angular.png", "Angular")}
                                        {this.renderImage("assets/images/icons/react.png", "React")}
                                        {this.renderImage("assets/images/icons/redux.png", "Redux")}
                                        {this.renderImage("assets/images/icons/reactrouter.png", "React Router")}
                                        {this.renderImage("assets/images/icons/babel.png", "Babel")}
                                        {this.renderImage("assets/images/icons/bower.png", "Bower")}
                                        {this.renderImage("assets/images/icons/ps.png", "Photoshop")}
                                        {this.renderImage("assets/images/icons/svg.png", "SVG")}
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    {this.renderImage("assets/images/services/backend.png", "")}
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>backend web</h4>
                                    <p>
                                        I specialize in making server side software which implement RESTful APIs that communicate with the frontend and manipulate databases during CRUD operations. My weapon of choice is either faithful old PHP (vanilla or using a framework such as Laravel) or Node.js for those seeking a full Javascript stack. And once the application is ready for deployment I can host it, especially on AWS whose EC2 and Elastic Beanstalk services I am very familiar with.
                                    </p>
                                    <div className="icon-holder">
                                        {this.renderImage("assets/images/icons/php.png", "PHP")}
                                        {this.renderImage("assets/images/icons/laravel.png", "Laravel")}
                                        {this.renderImage("assets/images/icons/node.png", "Node.js")}
                                        {this.renderImage("assets/images/icons/aws.png", "AWS")}
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    {this.renderImage("assets/images/services/database.png", "")}
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>database</h4>
                                    <p>
                                        I have knowledge of databases both relational and non-relational. My master's specialization in databases has given me a good idea about database design and implementation to ensure optimum memory usage, fast operation times and data consistency.
                                    </p>
                                    <div className="icon-holder">
                                        {this.renderImage("assets/images/icons/mysql.png", "MySQL")}
                                        {this.renderImage("assets/images/icons/postgresql.png", "PostgreSQL")}
                                        {this.renderImage("assets/images/icons/mongodb.png", "MongoDB")}
                                        {this.renderImage("assets/images/icons/redis.png", "Redis")}
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    {this.renderImage("assets/images/services/mobile.png", "")}
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>mobile</h4>
                                    <p>I have experience in creating mobile applications whether natively for Android or using a framework such as React Native or Unity.</p>
                                    <div className="icon-holder">
                                        {this.renderImage("assets/images/icons/react.png", "React Native")}
                                        {this.renderImage("assets/images/icons/android.png", "Android")}
                                        {this.renderImage("assets/images/icons/unity.png", "Unity")}
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    {this.renderImage("assets/images/services/games.png", "")}
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>video games</h4>
                                    <p>Video games have been a love of mine since a very young age and this love has manifested itself into a set of skills crucial to video game development from physics programming to artificial intelligence development. My preferred video game development framework is Unity. I also possess a vast knowledge of various game mechanics across genres due to my extensive gaming habit. Currently digging on Overwatch and Deus Ex: Mankind Divided.
                                    </p>
                                    <div className="icon-holder">
                                        {this.renderImage("assets/images/icons/unity.png", "Unity")}
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    {this.renderImage("assets/images/services/desktop.png", "")}
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>desktop software</h4>
                                    <p>Despite the prevalence of cloud based web and mobile apps the desktop application still has a bit of life left in it. My expertise in this domain consists of design and development of desktop applications in Java (Swing) and C#. For a more gameological feel I can crack out Unity.</p>
                                    <div className="icon-holder">
                                        {this.renderImage("assets/images/icons/unity.png", "Unity")}
                                        {this.renderImage("assets/images/icons/java.png", "Java")}
                                        {this.renderImage("assets/images/icons/csharp.png", "C#")}
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    {this.renderImage("assets/images/services/flow.png", "")}
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>workflow</h4>
                                    <p>Good technical skills can only ensure so much. I am well-versed in modern day project management techniques thanks to my MBA education. To ensure greater productivity I use Slack/Skype for team communication, Trello for kanban, Git for version control and Gulp as a build system.
                                    </p>
                                    <div className="icon-holder">
                                        {this.renderImage("assets/images/icons/trello.png", "Trello")}
                                        {this.renderImage("assets/images/icons/github.png", "Github")}
                                        {this.renderImage("assets/images/icons/gulp.png", "Gulp")}
                                        {this.renderImage("assets/images/icons/slack.png", "Slack")}
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                        </div>

                    </div>

                </section>

                <Footer/>
            </div>

        )
    }
}
