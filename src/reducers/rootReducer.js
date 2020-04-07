import { combineReducers } from 'redux';

import loginReducer from './loginReducer'
import openDrawerReducer from './openDrawerReducer'
import tabPanelReducer from './tabPanelReducer'

const rootReducer = combineReducers({
    loginModal: loginReducer,
    drawerReducer: openDrawerReducer,
    tabPanelReducer: tabPanelReducer,
})

export default rootReducer;