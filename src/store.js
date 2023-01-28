// import { type } from '@testing-library/user-event/dist/type'
import {createStore} from 'redux'
import {composeWithDevTools}from 'redux-devtools-extension'
// import { contactReducer } from './reducers/contactReducer';
import rootReducer from './reducers'

const store = createStore(rootReducer,composeWithDevTools())

export default store;