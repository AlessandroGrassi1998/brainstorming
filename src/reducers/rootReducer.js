import { combineReducers } from 'redux';
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    loginModal: loginReducer,
})

export default rootReducer;