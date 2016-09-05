import React from 'react';
import {Link} from 'react-router';

export default class BlogPost extends React.Component {

    constructor() {
        super();
    }

    render() {
        const tags = this._getTags();
        return (
            <div className="entry">

                <div className="desktop-12 columns">
                    <Link to={'/blog/' + this.props.id}>
                        <img src={this.props.imgUrl} alt=""/>
                    </Link>
                </div>

                <div className="desktop-3 tablet-12 columns">
                    <div className="box-meta">
                        <span className="category">
                            <Link to="/blog">
                                {this.props.category}
                            </Link>
                        </span><br/>
                        <span className="date">{this.props.date}</span>
                    </div>
                </div>

                <div className="desktop-9 tablet-12 nested columns">
                    <div className="desktop-9 tablet-12 columns">
                        <Link to={'/blog/' + this.props.id} className="permalink">
                            <div className="box-content">
                                <h4>{this.props.title}</h4>

                                <p className="excerpt">{this.props.excerpt}</p>

                            </div>
                        </Link>
                    </div>

                    <div className="clear"></div>

                    <div className="box-tags">
                        <div className="desktop-1 tablet-2 columns">
                            <h5>Tags</h5>
                        </div>

                        <div className="desktop-8 tablet-10 columns">
                            <p className="tags">
                                {tags}
                            </p>
                        </div>
                    </div>

                </div>

                <div className="clear"></div>
            </div>
        );
    }

    _getTags() {
        return this.props.tags.map((tag, i) => {
            return <a key={i}>{tag}</a>
        });
    }

}
