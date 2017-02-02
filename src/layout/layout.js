import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../components/header';
import Sidenav from '../components/sidenav';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggleClose = this.toggleClose.bind(this);
    }

    render() {
        const path = this.props.location.pathname;
        return (
            <div>

                <Sidenav isOpen={this.state.open} close={this.toggleClose} path={path}/>
                <Header open={this.toggleClose} path={path}/>
                <ReactCSSTransitionGroup transitionName="pageSlider" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
                    {React.cloneElement(this.props.children, {key: path})}
                </ReactCSSTransitionGroup>

            </div>
        )
    }

    toggleClose() {
        this.setState((prevState) => ({
            open: !prevState.open
        }))
    }

}
