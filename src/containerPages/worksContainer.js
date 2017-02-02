import {
    connect
} from 'react-redux'

import {
    worksPageIncrement,
    worksPageDecrement,
    setWorks,
    setCompleteWorks
} from '../redux/actions/index'
import WorksPage from '../pages/works'

const mapStateToProps = (state) => {
    return {
        worksPageNo: state.pages.worksPage,
        works: state.data.works,
        completeWorks: state.data.completeWorks,
        worksSize: state.pages.worksSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementWorksPage: () => {
            dispatch(worksPageIncrement())
        },
        decrementWorksPage: () => {
            dispatch(worksPageDecrement())
        },
        setWorks: (works) => {
            dispatch(setWorks(works))
        },
        setCompleteWorks: (completeWorks) => {
            dispatch(setCompleteWorks(completeWorks))
        }
    }
}

const WorksContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WorksPage)

export default WorksContainer
