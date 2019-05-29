/**********************************************************************************************
 * 
 * @File combines and returns all reducers
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import { combineReducers } from "redux";

import jobs from "./jobReducer.js";
import formState from "./formStatesReducer.js";

export default combineReducers({
	jobs,
	formState
});