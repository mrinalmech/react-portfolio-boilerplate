import React, {Component} from 'react'
import {Link} from 'react-router';

export default class Footer extends Component {
    render() {

        return (
            <section id="header">
                <div className="topbar">

                    <a className="hamburger" onClick={this.open}>
                        <img src="assets/images/hamburger.png" alt=""/>
                    </a>

                    <div className="container">
                        <ul id="nav" className="full">
                            <li className={this.props.path.split('/')[1] === 'about' && 'active'}>
                                <Link to="/about">
                                    about
                                </Link>
                            </li>
                            <li className={this.props.path.split('/')[1] === 'works' && 'active'}>
                                <Link to="/works">
                                    works
                                </Link>
                            </li>
                            <li className={this.props.path.split('/')[1] === 'services' && 'active'}>
                                <Link to="/services">
                                    services
                                </Link>
                            </li>
                            <li className={this.props.path.split('/')[1] === 'blog' && 'active'}>
                                <Link to="/blog">
                                    blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logo-wrap">
                    <div className="container">
                        <div className="desktop-6 columns">
                            <h1>
                                <Link to="/" title="home">
                                    <img src="assets/images/logo.png" alt=""/>
                                </Link>
                            </h1>
                        </div>
                        <div className="desktop-6 columns">
                            <p id="big-screen" className="site-desc">
                                frontend
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
                                backend
                                <div className="icon-holder">
                                    <img src="assets/images/icons/php.png" alt="" title="PHP"/>
                                    <img src="assets/images/icons/laravel.png" alt="" title="Laravel"/>
                                    <img src="assets/images/icons/node.png" alt="" title="Node.js"/>
                                    <img src="assets/images/icons/mysql.png" alt="" title="MySQL"/>
                                    <img src="assets/images/icons/postgresql.png" alt="" title="PostgreSQL"/>
                                    <img src="assets/images/icons/mongodb.png" alt="" title="MongoDB"/>
                                    <img src="assets/images/icons/redis.png" alt="" title="Redis"/>
                                    <img src="assets/images/icons/aws.png" alt="" title="AWS"/>
                                </div>
                                other
                                <div className="icon-holder">
                                    <img src="assets/images/icons/gulp.png" alt="" title="Gulp"/>
                                    <img src="assets/images/icons/trello.png" alt="" title="Trello"/>
                                    <img src="assets/images/icons/slack.png" alt="" title="Slack"/>
                                    <img src="assets/images/icons/github.png" alt="" title="Github"/>
                                    <img src="assets/images/icons/unity.png" alt="" title="Unity"/>
                                    <img src="assets/images/icons/java.png" alt="" title="Java"/>
                                    <img src="assets/images/icons/android.png" alt="" title="Android"/>
                                    <img src="assets/images/icons/csharp.png" alt="" title="C#"/>
                                </div>
                            </p>
                            <p id="small-screen" className="site-desc">
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
                                    <img src="assets/images/icons/php.png" alt="" title="PHP"/>
                                    <img src="assets/images/icons/python.png" alt="" title="Python"/>
                                    <img src="assets/images/icons/ruby.png" alt="" title="Ruby"/>
                                    <img src="assets/images/icons/node.png" alt="" title="Node.js"/>
                                    <img src="assets/images/icons/asp.png" alt="" title="Asp.net"/>
                                    <img src="assets/images/icons/mysql.png" alt="" title="MySQL"/>
                                    <img src="assets/images/icons/mongodb.png" alt="" title="MongoDB"/>
                                    <img src="assets/images/icons/redis.png" alt="" title="Redis"/>
                                    <img src="assets/images/icons/gulp.png" alt="" title="Gulp"/>
                                    <img src="assets/images/icons/trello.png" alt="" title="Trello"/>
                                    <img src="assets/images/icons/slack.png" alt="" title="Slack"/>
                                    <img src="assets/images/icons/github.png" alt="" title="Github"/>
                                    <img src="assets/images/icons/unity.png" alt="" title="Unity"/>
                                    <img src="assets/images/icons/java.png" alt="" title="Java"/>
                                    <img src="assets/images/icons/android.png" alt="" title="Android"/>
                                    <img src="assets/images/icons/csharp.png" alt="" title="C#"/>
                                </div>
                            </p>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </section>
        );
    }

    open() {
        document.getElementById("mySidenav").style.width = "250px";
    }
}
