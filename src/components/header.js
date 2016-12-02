import React, {Component} from 'react'
import {Link} from 'react-router';

function imagesLoaded(parentNode) {
    const imgElements = parentNode.querySelectorAll('img');
    for (const img of imgElements) {
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

export default class Header extends Component {

    handleImageChange() {
        const galleryElement = this.refs.gallery;

        if (imagesLoaded(galleryElement)) {
            const element = document.getElementById('loader');
            element.style.opacity = "0";
            element.style.filter = 'alpha(opacity=0)';

            setTimeout(function() {
                element.parentNode.removeChild(element);
            }, 350);
        }

    }

    renderImageWithTitle(imageUrl, title) {
        return (<img onLoad={this.handleImageChange.bind(this)} src={imageUrl} title={title} alt="" onError={this.handleImageChange.bind(this)}/>);
    }

    renderImage(imageUrl) {
        return (<img onLoad={this.handleImageChange.bind(this)} src={imageUrl} alt="" onError={this.handleImageChange.bind(this)}/>);
    }

    render() {

        return (
            <section id="header" ref="gallery">
                <div className="topbar">

                    <a className="hamburger" onClick={this.open}>
                        {this.renderImage("assets/images/hamburger.png")}
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
                                    {this.renderImage("assets/images/newlogo.png")}
                                </Link>
                            </h1>
                        </div>
                        <div className="desktop-6 columns">
                            <p id="big-screen" className="site-desc">
                                FRONTEND
                                <div className="icon-holder">
                                    {this.renderImageWithTitle("assets/images/icons/html.png", "HTML5")}
                                    {this.renderImageWithTitle("assets/images/icons/css.png", "CSS3")}
                                    {this.renderImageWithTitle("assets/images/icons/sass.png", "Sass")}
                                    {this.renderImageWithTitle("assets/images/icons/compass.png", "Compass")}
                                    {this.renderImageWithTitle("assets/images/icons/bootstrap.png", "Bootstrap")}
                                    {this.renderImageWithTitle("assets/images/icons/js.png", "Javascript")}
                                    {this.renderImageWithTitle("assets/images/icons/ts.png", "Typescript")}
                                    {this.renderImageWithTitle("assets/images/icons/jquery.png", "JQuery")}
                                    {this.renderImageWithTitle("assets/images/icons/angular.png", "Angular")}
                                    {this.renderImageWithTitle("assets/images/icons/react.png", "React")}
                                    {this.renderImageWithTitle("assets/images/icons/redux.png", "Redux")}
                                    {this.renderImageWithTitle("assets/images/icons/reactrouter.png", "React Router")}
                                    {this.renderImageWithTitle("assets/images/icons/babel.png", "Babel")}
                                    {this.renderImageWithTitle("assets/images/icons/bower.png", "Bower")}
                                    {this.renderImageWithTitle("assets/images/icons/ps.png", "Photoshop")}
                                    {this.renderImageWithTitle("assets/images/icons/svg.png", "SVG")}
                                </div>
                                BACKEND
                                <div className="icon-holder">
                                    {this.renderImageWithTitle("assets/images/icons/php.png", "PHP")}
                                    {this.renderImageWithTitle("assets/images/icons/laravel.png", "Laravel")}
                                    {this.renderImageWithTitle("assets/images/icons/node.png", "Node.js")}
                                    {this.renderImageWithTitle("assets/images/icons/aws.png", "AWS")}
                                    {this.renderImageWithTitle("assets/images/icons/mysql.png", "MySQL")}
                                    {this.renderImageWithTitle("assets/images/icons/postgresql.png", "PostgreSQL")}
                                    {this.renderImageWithTitle("assets/images/icons/mongodb.png", "MongoDB")}
                                    {this.renderImageWithTitle("assets/images/icons/redis.png", "Redis")}
                                </div>
                                OTHER
                                <div className="icon-holder">
                                    {this.renderImageWithTitle("assets/images/icons/gulp.png", "Gulp")}
                                    {this.renderImageWithTitle("assets/images/icons/trello.png", "Trello")}
                                    {this.renderImageWithTitle("assets/images/icons/slack.png", "Slack")}
                                    {this.renderImageWithTitle("assets/images/icons/github.png", "Github")}
                                    {this.renderImageWithTitle("assets/images/icons/unity.png", "Unity")}
                                    {this.renderImageWithTitle("assets/images/icons/java.png", "Java")}
                                    {this.renderImageWithTitle("assets/images/icons/android.png", "Android")}
                                    {this.renderImageWithTitle("assets/images/icons/csharp.png", "C#")}
                                </div>
                            </p>
                            <p id="small-screen" className="site-desc">
                                <div className="icon-holder">
                                    {this.renderImageWithTitle("assets/images/icons/html.png", "HTML5")}
                                    {this.renderImageWithTitle("assets/images/icons/css.png", "CSS3")}
                                    {this.renderImageWithTitle("assets/images/icons/sass.png", "Sass")}
                                    {this.renderImageWithTitle("assets/images/icons/compass.png", "Compass")}
                                    {this.renderImageWithTitle("assets/images/icons/bootstrap.png", "Bootstrap")}
                                    {this.renderImageWithTitle("assets/images/icons/js.png", "Javascript")}
                                    {this.renderImageWithTitle("assets/images/icons/ts.png", "Typescript")}
                                    {this.renderImageWithTitle("assets/images/icons/jquery.png", "JQuery")}
                                    {this.renderImageWithTitle("assets/images/icons/angular.png", "Angular")}
                                    {this.renderImageWithTitle("assets/images/icons/react.png", "React")}
                                    {this.renderImageWithTitle("assets/images/icons/redux.png", "Redux")}
                                    {this.renderImageWithTitle("assets/images/icons/reactrouter.png", "React Router")}
                                    {this.renderImageWithTitle("assets/images/icons/babel.png", "Babel")}
                                    {this.renderImageWithTitle("assets/images/icons/bower.png", "Bower")}
                                    {this.renderImageWithTitle("assets/images/icons/ps.png", "Photoshop")}
                                    {this.renderImageWithTitle("assets/images/icons/svg.png", "SVG")}
                                    {this.renderImageWithTitle("assets/images/icons/php.png", "PHP")}
                                    {this.renderImageWithTitle("assets/images/icons/python.png", "Python")}
                                    {this.renderImageWithTitle("assets/images/icons/ruby.png", "Ruby")}
                                    {this.renderImageWithTitle("assets/images/icons/node.png", "Node.js")}
                                    {this.renderImageWithTitle("assets/images/icons/asp.png", "Asp.net")}
                                    {this.renderImageWithTitle("assets/images/icons/mysql.png", "MySQL")}
                                    {this.renderImageWithTitle("assets/images/icons/mongodb.png", "MongoDB")}
                                    {this.renderImageWithTitle("assets/images/icons/redis.png", "Redis")}
                                    {this.renderImageWithTitle("assets/images/icons/gulp.png", "Gulp")}
                                    {this.renderImageWithTitle("assets/images/icons/trello.png", "Trello")}
                                    {this.renderImageWithTitle("assets/images/icons/slack.png", "Slack")}
                                    {this.renderImageWithTitle("assets/images/icons/github.png", "Github")}
                                    {this.renderImageWithTitle("assets/images/icons/unity.png", "Unity")}
                                    {this.renderImageWithTitle("assets/images/icons/java.png", "Java")}
                                    {this.renderImageWithTitle("assets/images/icons/android.png", "Android")}
                                    {this.renderImageWithTitle("assets/images/icons/csharp.png", "C#")}
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
