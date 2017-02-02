import { combineReducers } from 'redux'

//Reducers
import pages from './pages'
import data from './data'

const portfolioApp = combineReducers({
  pages,
  data
})


export default portfolioApp
