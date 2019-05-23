/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import * as at from "../actions/actionTypes.js";

const initialState = []

const jobs = ( state = initialState, { type, payload }) => {
	console.log( state );
	switch( type ) {
		case at.RECEIVE_ADD_JOB:
			console.log( payload );
			return [ ...state, payload ]
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

[1, 2, 3, 4]