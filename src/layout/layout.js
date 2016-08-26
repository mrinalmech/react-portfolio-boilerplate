import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../components/header';
import Sidenav from '../components/sidenav';

export default class Layout extends React.Component {
    render() {
        const path = this.props.location.pathname;
        return (
            <div>

                <Sidenav path={path}/>
                <Header path={path}/>
                <ReactCSSTransitionGroup transitionName="pageSlider" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
                    {React.cloneElement(this.props.children, {key: path})}
                </ReactCSSTransitionGroup>

            </div>
        )
    }
}
