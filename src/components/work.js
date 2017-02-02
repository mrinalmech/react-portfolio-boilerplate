import React from 'react';
import Link from 'react-router/lib/Link';

export default class Work extends React.Component {

    constructor() {
        super();
    }

    render() {
        const stack = this._getStack();
        return (
            <Link to={'/works/' + this.props.id} className="permalink">
                <div className="desktop-6 columns">
                    <div className="item">
                        {this.props.renderImage(this.props.imgUrl)}
                        <h3>{this.props.name}
                            <div className="icon-holder">
                                {stack}
                            </div>
                        </h3>
                        <span className="category">{this.props.task}</span>
                    </div>
                    <div className="clear"></div>
                </div>
            </Link>
        );
    }

    _getStack() {
        return this.props.stack.map((stackitem, i) => {
            return this.props.renderImageWithKey("/assets/images/icons/" + stackitem + ".png", stackitem, i)
        });
    }

}

Work.propTypes = {
    renderImage: React.PropTypes.func.isRequired,
    renderImageWithKey: React.PropTypes.func.isRequired,
    handleImageChange: React.PropTypes.func.isRequired
};
