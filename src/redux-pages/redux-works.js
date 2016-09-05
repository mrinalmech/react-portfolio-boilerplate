import { connect } from 'react-redux'

import { worksPageIncrement, worksPageDecrement } from '../redux/actions/index'
import WorksPage from '../pages/works'

const mapStateToProps = (state) => {
  return {
    worksPageNo: state.worksPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementWorksPage: () => {
      dispatch(worksPageIncrement())
    },
    decrementWorksPage: () => {
      dispatch(worksPageDecrement())
    }
  }
}

const ReduxWorksPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksPage)

export default ReduxWorksPage
