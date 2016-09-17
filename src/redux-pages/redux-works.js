import { connect } from 'react-redux'

import { worksPageIncrement, worksPageDecrement, setWorks, setCompleteWorks } from '../redux/actions/index'
import WorksPage from '../pages/works'

const mapStateToProps = (state) => {
  return {
    worksPageNo: state.worksPage,
    works: state.works,
    completeWorks:state.completeWorks,
    worksSize:state.worksSize
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
    setWorks: (works)=>{
      dispatch(setWorks(works))
    },
    setCompleteWorks: (completeWorks)=>{
      dispatch(setCompleteWorks(completeWorks))
    }
  }
}

const ReduxWorksPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksPage)

export default ReduxWorksPage
