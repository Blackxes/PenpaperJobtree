/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import * as at from "../actions/actionTypes.js";

const initialState = {
	list: [],
	idCounter: 1 // serves as an incrementing id counter
};

const jobs = ( state = initialState, { type, payload }) => {
	switch( type ) {
		case at.RECEIVE_ADD_JOB:
			return { ...state, idCounter: state.idCounter + 1, list: [...state.list, payload] };
		break;
		case at.RECEIVE_DELETE_JOB:
			console.log( "delete", payload );
		break;
		case at.RECEIVE_EDIT_JOB:
			console.log( "edit", payload );
		break;
		// case at.REMOVE_JOB:
		// 	console.log( "remove job" );
		// break;
		// case at.EDIT_JOB:
		// 	console.log( "edit job" );
		// break;
		// case SAVE_JOB:
		// 	console.log( "save job" );
		// break;
		// case "INCREMENT_CATCH":
		// 	console.log( "increment", payload );
		// break;
	}
	return state;
}

export default jobs;