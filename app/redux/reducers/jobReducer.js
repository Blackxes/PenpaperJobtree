/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import * as AT from "../actions/actionTypes.js"

const initialState = {
	list: [],
	idCounter: 1 // serves as an incrementing id counter
};

const jobs = (state = initialState, { type, pl }) => {
	switch( type ) {
		case AT.REQUEST_ADD_JOB:
			return { ...state, list: [...state.list, pl] };
		break;
	}
	return state;
}

export default jobs;