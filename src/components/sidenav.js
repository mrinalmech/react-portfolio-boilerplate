import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Sidenav extends Component {
    render() {

        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={this.close}>&times;</a>
                <ul>
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
        );
    }

    close() {
        document.getElementById("mySidenav").style.width = "0";
    }
}
