import React from 'react';
import jQuery from 'jquery';

import BlogPost from '../components/blog-post'
import Footer from '../components/footer';
import {imagesLoaded} from '../util/util';

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

    handleImageChange() {
        const galleryElement = document.getElementById('blog');
        if (imagesLoaded(galleryElement)) {
            const element = document.getElementById('blog-loader');

            element.style.opacity = "0";
            element.style.filter = 'alpha(opacity=0)';

            setTimeout(() => {
                element.parentNode.removeChild(element);
            }, 350);
        }

    }

    renderImage(imageUrl) {
        return (<img onLoad={this.handleImageChange.bind(this)} alt="" src={imageUrl} onError={this.handleImageChange.bind(this)}/>);
    }

    render() {
        const blogPosts = this._getBlogPosts();
        return (
            <div id="blog" className="route-slider">
                <div id="blog-loader" className="secondary-loader">
                    <img className="secondary-loading-img" src="/assets/images/loading.svg" alt="LOADING"/>
                </div>
                <section id="archive">
                    <div className="container">
                        {blogPosts}
                        <div className="desktop-12 columns">
                            <div className="nav-pages">
                                <a className="link-prev" onClick={this.prev}>
                                    <div>
                                        <span className={this.props.blogPageNo === 1 && 'inactive'}>Previous</span>
                                    </div>
                                </a>

                                <a title="Next" className="link-next" onClick={this.next}>
                                    <div>
                                        <span className={this.props.blogPageNo * this.state.size >= this.state.completeBlogPosts.length && 'inactive'}>Next</span>
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

        this.setState((prevState) => ({
            blogPosts: prevState.completeBlogPosts.slice((this.props.blogPageNo - 2) * prevState.size, (this.props.blogPageNo - 1) * prevState.size)
        }));
        window.scrollTo(0, 0);
        this.props.decrementBlogPage();

    }

    next() {

        this.setState((prevState) => ({
            blogPosts: prevState.completeBlogPosts.slice(this.props.blogPageNo * prevState.size, (this.props.blogPageNo + 1) * prevState.size)
        }));
        window.scrollTo(0, 0);
        this.props.incrementBlogPage();

    }

    _getBlogPosts() {
        return this.state.blogPosts.map((blogPost) => {
            return <BlogPost {...blogPost} key={blogPost.id} renderImage={this.renderImage} handleImageChange={this.handleImageChange}/>
        });
    }

    _fetchBlogPosts() {
        jQuery.get('api/blogposts.json').then((blogPosts) => {
            this.setState({
                completeBlogPosts: blogPosts,
                blogPosts: blogPosts.slice((this.props.blogPageNo - 1) * this.state.size, (this.props.blogPageNo - 1) * this.state.size + this.state.size)
            })
        })
    }
}

BlogPage.propTypes = {
    blogPageNo: React.PropTypes.number.isRequired,
    incrementBlogPage: React.PropTypes.func.isRequired,
    decrementBlogPage: React.PropTypes.func.isRequired
};
