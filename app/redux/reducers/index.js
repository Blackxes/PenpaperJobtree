/**********************************************************************************************
 * 
 * @File combines and returns all reducers
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import { combineReducers } from "redux";

import stateReducer from "./stateReducer.js";
import panelReducer from "./panelReducer.js";
import jobs from "./jobReducer.js";
import notificationReducer from "./notificationReducer.js";

export default combineReducers({
	states: stateReducer,
	panels: panelReducer,
	jobs: jobs,
	notifications: notificationReducer
});

// job relations
// actual jobs
// job groups
