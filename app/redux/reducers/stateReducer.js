/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import * as AT from "../actions/actionTypes";
import * as PID from "../panels.js";

const initialState = {
	job: {
		isCreating: false
	}
}

const stateReducer = (state = initialState, {type, pl}) => {
	switch( type ) {
		case AT.REQUEST_REVEAL_PANEL:
			return pl == PID.JOB_CREATION ? { ...state, job: {isCreating: true} } : state;
		break;
		case AT.REQUEST_HIDE_PANEL:
			return pl == PID.JOB_CREATION ? { ...state, job: {isCreating: false} } : state;
		break;
		case AT.REQUEST_TOGGLE_PANEL:
			return pl == PID.JOB_CREATION ? { ...state, job: {isCreating: !state.job.isCreating} } : state;
		break;
	}
	return state;
}

export default stateReducer;