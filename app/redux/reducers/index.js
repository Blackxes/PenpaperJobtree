/**********************************************************************************************
 * 
 * @File combines and returns all reducers
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import { combineReducers } from "redux";

import jobs from "./job.reducer.js";

export default combineReducers({
	jobs,
	counter: () => 20,
	names: () => ["gandalf", "olaf"]
});