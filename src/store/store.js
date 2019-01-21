import { createStore, combineReducers, applyMiddleware,compose } from 'redux'
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'

const reducer = combineReducers({
  rootReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
 composeEnhancer(applyMiddleware(thunk)),
  )

export default store;