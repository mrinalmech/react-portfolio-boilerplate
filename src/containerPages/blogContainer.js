import {connect} from 'react-redux'

import {blogPageIncrement, blogPageDecrement} from '../redux/actions/index'
import BlogPage from '../pages/blog'

const mapStateToProps = (state) => {
    return {blogPageNo: state.pages.blogPage}
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementBlogPage: () => {
            dispatch(blogPageIncrement())
        },
        decrementBlogPage: () => {
            dispatch(blogPageDecrement())
        }
    }
}

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(BlogPage)

export default BlogContainer
