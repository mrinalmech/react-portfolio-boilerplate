const initialState = {
    blogPage: 1,
    worksPage: 1,
    works: [],
    completeWorks: [],
    worksSize: 4
}

const pages = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

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
        case 'SET_WORKS':
            return Object.assign({}, state, {works: action.works})
        case 'SET_COMPLETE_WORKS':
            return Object.assign({}, state, {completeWorks: action.completeWorks})
        default:
            return state
    }
}

export default pages
