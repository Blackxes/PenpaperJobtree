/**********************************************************************************************
 * 
 * @File contains the action types
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import * as AT from "../actions/actionTypes.js";
import * as PID from "../panels.js";

const initialState = {};

const panelReducer = (state = initialState, { type, pl }) => {
	switch( type ) {
		case AT.REQUEST_REVEAL_PANEL:
			return { ...state, [pl]: true };
		break;
		case AT.REQUEST_HIDE_PANEL:
			return { ...state, [pl]: false };
		break;
		case AT.REQUEST_TOGGLE_PANEL:
			return { ...state, [pl]: !state[pl] };
		break;
	}
	return state;
}

export default panelReducer;