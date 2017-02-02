const initialState = {
    works: [],
    completeWorks: []
}

const data = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_WORKS':
            return Object.assign({}, state, {works: action.works})
        case 'SET_COMPLETE_WORKS':
            return Object.assign({}, state, {completeWorks: action.completeWorks})
        default:
            return state
    }
}

export default data
