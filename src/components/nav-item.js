import React, { Component } from 'react'
import Link from 'react-router/lib/Link';

export default class NavItem extends Component {
  render () {
    const isActive = this.context.router.isActive(this.props.to, true),
            className = isActive ? "active" : "";

        return (
            <li className={className}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </li>
        );
  }
}
