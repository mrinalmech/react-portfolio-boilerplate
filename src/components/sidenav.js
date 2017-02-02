import React, {Component} from 'react'
import Link from 'react-router/lib/Link';

export default class Sidenav extends Component {

    render() {

        return (
            <div id="mySidenav" className={this.props.isOpen ? "sidenav" : "sidenav collapsed"}>
                <a className="closebtn" onClick={()=>this.props.close()}>&times;</a>
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

}

Sidenav.propTypes = {
    path: React.PropTypes.string.isRequired,
    close: React.PropTypes.func.isRequired,
    isOpen: React.PropTypes.bool.isRequired
};
