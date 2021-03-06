const initialState = {
    blogPage: 1,
    worksPage: 1,
    worksSize: 4
}

const pages = (state = initialState, action) => {

    switch (action.type) {
        case 'BLOG_PAGE_INCREMENT':
            return Object.assign({}, state, {
                blogPage: state.blogPage + 1
            })
        case 'BLOG_PAGE_DECREMENT':
            return Object.assign({}, state, {
                blogPage: state.blogPage - 1
            })
        case 'WORKS_PAGE_INCREMENT':
            return Object.assign({}, state, {
                worksPage: state.worksPage + 1
            })
        case 'WORKS_PAGE_DECREMENT':
            return Object.assign({}, state, {
                worksPage: state.worksPage - 1
            })
        default:
            return state
    }
}

export default pages
