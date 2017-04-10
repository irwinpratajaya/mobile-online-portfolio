import { combineReducers } from 'redux'
import reactoReducer from './reactoReducer'
// import userReducer from './userReducer'

const rootReducer = combineReducers({
  posts: reactoReducer
  // user: userReducer
})

export default rootReducer
