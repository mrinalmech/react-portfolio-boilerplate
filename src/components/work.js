import React from 'react';
import {Link} from 'react-router';

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
                      <img src={this.props.imgUrl} alt=""/>

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
            return <img src={"assets/images/icons/"+stackitem+".png"} alt="" title={stackitem} key={i}/>
        });
    }

}
