import React from 'react';
import jQuery from 'jquery';

import Footer from '../components/footer';

export default class BlogSingle extends React.Component {
    constructor() {
        super();

        this.state = {
            blogPost: {}
        };
    }

    componentWillMount() {
        this._fetchBlogPost();
    }

    componentWillReceiveProps(newProps) {
        this._fetchBlogPost();
    }

    render() {
        return (
            <div className="route-slider">
                <section id="archive">
                    <div className="container">

                        <div className="entry">

                            <div className="desktop-12 columns">
                                <img src={this.state.blogPost.imgUrl} alt=""/>
                            </div>

                            <div className="desktop-3 tablet-12 columns">
                                <div className="box-meta">
                                    <span className="category">
                                        <a href="archive.php">{this.state.blogPost.category}
                                        </a>
                                    </span><br/>
                                    <span className="date">{this.state.blogPost.date}
                                    </span>
                                </div>
                            </div>

                            <div className="desktop-9 tablet-12 columns">
                                <div className="box-content">
                                    <a href="single-blog.php" className="permalink">
                                        <h4>{this.state.blogPost.title}</h4>
                                    </a>

                                    <p>{this.state.blogPost.firstpara}</p>

                                    <blockquote>
                                        <p className="quote">{this.state.blogPost.quote}</p>
                                    </blockquote>

                                    <p>{this.state.blogPost.secondpara}</p>

                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                    </div>
                </section>

                <Footer/>
            </div>
        )
    }

    _fetchBlogPost() {
        jQuery.ajax({
            method: 'GET',
            dataType: "json",
            url: 'api/blogposts.json',
            success: (blogPosts) => {
                const blogPost = blogPosts.find(blogPost => (blogPost.id === parseInt(this.props.params.id, 10)));
                this.setState({blogPost});
            }
        });
    }
}
