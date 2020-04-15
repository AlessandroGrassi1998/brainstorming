import { combineReducers } from 'redux';

import loginReducer from './loginReducer'
import openDrawerReducer from './openDrawerReducer'
import tabPanelReducer from './tabPanelReducer'
import postitDialogReducer from './postitDialogReducer';

const rootReducer = combineReducers({
    loginModal: loginReducer,
    drawerReducer: openDrawerReducer,
    tabPanelReducer: tabPanelReducer,
    postitDialogReducer: postitDialogReducer,
})

export default rootReducer;