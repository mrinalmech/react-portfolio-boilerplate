import React from 'react';

import Footer from '../components/footer';

export default class ServicesPage extends React.Component {
    render() {
        return (
            <div className="route-slider">
                <section id="about" className="page">

                    <div className="container">

                        <div className="desktop-12 columns">
                            <div className="border-top"></div>
                        </div>

                        <div className="clear"></div>

                        <div className="desktop-12 tablet-12 columns">
                            <p className="page-desc">Applications have thousands of moving parts. A person who has command over the breadth of the stack is always an asset. See what I can do to help you.
                            </p>
                        </div>
                    </div>

                    <div className="services">

                        <div className="container">

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    <img src="assets/images/services/frontend.png" alt=""/>
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>frontend web</h4>
                                    <p>My command over the frontend development begins from the design phase itself. While not a graphic designer I possess knowledge about using color, type and layout to create a coherent and visually engaging user experience. Once the design is finalised I begin turning it into a webpage using the latest HTML and CSS techniques and guidelines. I use preprocessors such as Sass and third party front end frameworks like Bootstrap to assist me in my job. The next step is breathing life into the page using good old Javascript. This might involve using JQuery if the page has static data and is animation-intensive. If it's a data-driven web application I crank out an MVC framework, either Google's Angular or Facebook's React and link it to backend APIs. To ensure the latest ES2015 functionalities I use Babel. Frontend dependencies are managed by Bower and all minification/compression of Javascript and CSS files is done by Gulp, my build system of choice.
                                    </p>
                                    <div className="icon-holder">
                                        <img src="assets/images/icons/html.png" alt="" title="HTML5"/>
                                        <img src="assets/images/icons/css.png" alt="" title="CSS3"/>
                                        <img src="assets/images/icons/sass.png" alt="" title="Sass"/>
                                        <img src="assets/images/icons/compass.png" alt="" title="Compass"/>
                                        <img src="assets/images/icons/bootstrap.png" alt="" title="Bootstrap"/>
                                        <img src="assets/images/icons/js.png" alt="" title="Javascript"/>
                                        <img src="assets/images/icons/ts.png" alt="" title="Typescript"/>
                                        <img src="assets/images/icons/jquery.png" alt="" title="JQuery"/>
                                        <img src="assets/images/icons/angular.png" alt="" title="Angular"/>
                                        <img src="assets/images/icons/react.png" alt="" title="React"/>
                                        <img src="assets/images/icons/redux.png" alt="" title="Redux"/>
                                        <img src="assets/images/icons/reactrouter.png" alt="" title="React Router"/>
                                        <img src="assets/images/icons/babel.png" alt="" title="Babel"/>
                                        <img src="assets/images/icons/bower.png" alt="" title="Bower"/>
                                        <img src="assets/images/icons/ps.png" alt="" title="Photoshop"/>
                                        <img src="assets/images/icons/svg.png" alt="" title="SVG"/>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 offset-3 tablet-6 tablet-offset-0 columns">
                                    <img src="assets/images/services/backend.png" alt=""/>
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>backend web</h4>
                                    <p>
                                        I specialize in making server side software which implement RESTful APIs that communicate with the frontend and manipulate databases during CRUD operations. My weapon of choice is either faithful old PHP or Node.js for those seeking a full Javascript stack.
                                    </p>
                                    <div className="icon-holder">
                                        <img src="assets/images/icons/php.png" alt="" title="PHP"/>
                                        <img src="assets/images/icons/laravel.png" alt="" title="Laravel"/>
                                        <img src="assets/images/icons/node.png" alt="" title="Node.js"/>
                                        <img src="assets/images/icons/asp.png" alt="" title="Asp.net"/>
                                        <img src="assets/images/icons/python.png" alt="" title="Python"/>
                                        <img src="assets/images/icons/django.png" alt="" title="Django"/>
                                        <img src="assets/images/icons/ruby.png" alt="" title="Ruby"/>
                                        <img src="assets/images/icons/rails.png" alt="" title="Rails"/>
                                        <img src="assets/images/icons/aws.png" alt="" title="AWS"/>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 push-6 tablet-6 tablet-push-0 columns">
                                    <img src="assets/images/services/database.png" alt=""/>
                                </div>
                                <div className="desktop-6 pull-3 tablet-6 tablet-pull-0 columns">
                                    <h4>database</h4>
                                    <p>I have knowledge of databases both relational and non-relational. My master's specialization in databases has given me a good idea about database design and implementation to ensure optimum memory usage, fast operation times and data consistency.
                                    </p>
                                    <div className="icon-holder">
                                        <img src="assets/images/icons/mysql.png" alt="" title="MySQL"/>
                                        <img src="assets/images/icons/postgresql.png" alt="" title="PostgreSQL"/>
                                        <img src="assets/images/icons/mongodb.png" alt="" title="MongoDB"/>
                                        <img src="assets/images/icons/redis.png" alt="" title="Redis"/>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 offset-3 tablet-6 tablet-offset-0 columns">
                                    <img src="assets/images/services/mobile.png" alt=""/>
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>mobile</h4>
                                    <p>A structure designed and constructed to have robustness will not suffer from disproportionate collapse (progressive collapse) under accidental loading. When it comes to steel framed buildings, to achieve robustness is about designing connections appropriately. Cncrete structures is less problem with structural robustness.</p>
                                    <div className="icon-holder">
                                        <img src="assets/images/icons/react.png" alt="" title="React Native"/>
                                        <img src="assets/images/icons/android.png" alt="" title="Android"/>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 tablet-6 columns">
                                    <img src="assets/images/services/games.png" alt=""/>
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>video games</h4>
                                    <p>Architectural drawings are made according to a set of conventions, which include particular views (floor plan, section etc.), sheet sizes, units of measurement and scales, annotation and cross referencing. Conventionally, drawings were made in ink on paper or a similar material, and any copies required had to be laboriously made by hand.
                                    </p>
                                    <div className="icon-holder">
                                        <img src="assets/images/icons/unity.png" alt="" title="Unity"/>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 offset-3 tablet-6 tablet-offset-0 columns">
                                    <img src="assets/images/services/desktop.png" alt=""/>
                                </div>
                                <div className="desktop-6 tablet-6 columns">
                                    <h4>desktop software</h4>
                                    <p>The development of the computer had a major impact on the methods used to design and create technical drawings, making manual draughting almost obsolete, and opening up new possibilities of form using organic shapes and complex geometry. Today the vast majority of drawings are created using CAD software.</p>
                                    <div className="icon-holder">
                                        <img src="assets/images/icons/unity.png" alt="" title="Unity"/>
                                        <img src="assets/images/icons/java.png" alt="" title="Java"/>
                                        <img src="assets/images/icons/csharp.png" alt="" title="C#"/>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div className="item">
                                <div className="desktop-3 push-6 tablet-6 tablet-push-0 columns">
                                    <img src="assets/images/services/flow.png" alt=""/>
                                </div>
                                <div className="desktop-6 pull-3 tablet-6 tablet-pull-0 columns">
                                    <h4>workflow</h4>
                                    <p>Good technical skills can only ensure so much. I am well-versed in modern day project management techniques thanks to my MBA education. To ensure greater productivity I use Slack/Skype for team communication, Trello for kanban, Git for version control and Gulp as a build system.
                                    </p>
                                    <div className="icon-holder">
                                        <img src="assets/images/icons/trello.png" alt="" title="Trello"/>
                                        <img src="assets/images/icons/github.png" alt="" title="Github"/>
                                        <img src="assets/images/icons/gulp.png" alt="" title="Gulp"/>
                                        <img src="assets/images/icons/slack.png" alt="" title="Slack"/>
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
