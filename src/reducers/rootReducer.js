import { combineReducers } from 'redux';

import loginReducer from './loginReducer'
import openDrawerReducer from './openDrawerReducer'
import tabPanelReducer from './tabPanelReducer'
import postitDialogReducer from './postitDialogReducer';
import userReducer from './userReducer';
import questionOnNavbarReducer from './questionOnNavbarReducer';

const rootReducer = combineReducers({
    userReducer: userReducer,
    loginModal: loginReducer,
    drawerReducer: openDrawerReducer,
    tabPanelReducer: tabPanelReducer,
    postitDialogReducer: postitDialogReducer,
    questionOnNavbarReducer: questionOnNavbarReducer
})

export default rootReducer;