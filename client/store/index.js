import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import inputStringReducer from './inputString'
import cardDeckReducer from './cardDeck'
import scoreReducer from './score'

const reducer = combineReducers({ 
  auth, 
  //inputSting: inputStringReducer,
  cards: cardDeckReducer,
  score: scoreReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
