import React from 'react';
import jQuery from 'jquery';
import Link from 'react-router/lib/Link';

import Footer from '../components/footer';
import {imagesLoaded} from '../util/util';

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

    componentWillReceiveProps() {
        this._fetchBlogPost();
    }

    handleImageChange() {
        const galleryElement = this.refs.gallery;
        if (imagesLoaded(galleryElement)) {
            const element = document.getElementById('blog-single-loader');

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
        return (
            <div className="route-slider" ref="gallery">
                <div id="blog-single-loader" className="secondary-loader">
                    <img className="secondary-loading-img" src="/assets/images/loading.svg" alt="LOADING"/>
                </div>
                <section id="archive">
                    <div className="container">
                        <div className="entry">
                            <div className="desktop-12 columns">
                                {this.renderImage(this.state.blogPost.imgUrl)}
                            </div>
                            <div className="desktop-3 tablet-12 columns">
                                <div className="box-meta">
                                    <span className="category">
                                        <Link to="/blog">
                                            {this.state.blogPost.category}
                                        </Link>
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
                                    <p className="white-space">{this.state.blogPost.secondpara}</p>
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
        jQuery.get('/api/blogposts.json').then((blogPosts) => {
            const blogPost = blogPosts.find(blogPost => (blogPost.id === parseInt(this.props.params.id, 10)));
            this.setState({blogPost});
        });
    }
}
