import React from 'react';
import jQuery from 'jquery';

import BlogPost from '../components/blog-post'
import Footer from '../components/footer';

export default class BlogPage extends React.Component {

    constructor() {

        super();

        this.state = {
            blogPosts: [],
            completeBlogPosts: [],
            size: 2
        };

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);

    }

    componentWillMount() {
        this._fetchBlogPosts();
    }

    render() {
        const blogPosts = this._getBlogPosts();
        return (
            <div className="route-slider">
                <section id="archive">
                    <div className="container">
                        {blogPosts}
                        <div className="desktop-12 columns">
                            <div className="nav-pages">
                                <a className="link-prev" onClick={this.prev}>
                                    <div>
                                        <span className={this.state.offset === 0 && 'inactive'}>Previous</span>
                                    </div>
                                </a>

                                <a title="Next" className="link-next" onClick={this.next}>
                                    <div>
                                        <span className={this.state.offset + this.state.size >= this.state.completeBlogPosts.length && 'inactive'}>Next</span>
                                    </div>
                                </a>

                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        )
    }

    prev() {

            this.setState({
                blogPosts: this.state.completeBlogPosts.slice((this.props.blogPageNo - 2) * this.state.size, (this.props.blogPageNo - 1) * this.state.size)
            });
            window.scrollTo(0, 0);
            this.props.decrementBlogPage();

    }

    next() {

            this.setState({
                blogPosts: this.state.completeBlogPosts.slice(this.props.blogPageNo * this.state.size, (this.props.blogPageNo + 1) * this.state.size)
            });
            window.scrollTo(0, 0);
            this.props.incrementBlogPage();


    }

    _getBlogPosts() {
        return this.state.blogPosts.map((blogPost) => {
            return <BlogPost {...blogPost} key={blogPost.id}/>
        });
    }

    _fetchBlogPosts() {
        jQuery.ajax({
            method: 'GET',
            dataType: "json",
            url: 'api/blogposts.json',
            success: (blogPosts) => {
                this.setState({
                    completeBlogPosts: blogPosts,
                    blogPosts: blogPosts.slice((this.props.blogPageNo-1)*this.state.size, (this.props.blogPageNo-1)*this.state.size + this.state.size)
                })
            }
        });
    }
}

BlogPage.propTypes = {
    blogPageNo: React.PropTypes.number.isRequired,
    incrementBlogPage: React.PropTypes.func.isRequired,
    decrementBlogPage: React.PropTypes.func.isRequired
};
