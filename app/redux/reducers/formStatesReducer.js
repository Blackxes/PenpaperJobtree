/**********************************************************************************************
 * 
 * @File form state reducing
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import * as at from "../actions/actionTypes.js";

const initialState = {
	submissionKey: null, // the name attribute of the button that has submitted the formular
	submitterKey: null // the key of the form that has been submitted
};

const formStates = ( state = initialState, { type, payload }) => {
	switch( type ) {
		case at.RECIEVE_SET_FORM_SUBMISSION_KEY:
			return { ...state,
				submissionKey: payload.submissionKey,
				submitter: payload.submitter
			};
		break;
	}
	return state;
}

export default formStates;