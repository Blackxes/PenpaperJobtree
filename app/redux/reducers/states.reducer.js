/**********************************************************************************************
 * 
 * @File manages states within the app
 * 	eg. current_view/ add_job_interface/ etc.
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

// import { REVEAL_ADD_JOB_INTERFACE, HIDE_ADD_JOB_INTERFACE } from "../actions/actionCreators.js";
// import { stdChannel } from "redux-saga";
// import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

// const initialState = {
// 	"interfaces": {
// 		"create_job": false,
// 		"delete_job": false,
// 		"edit_job": false
// 	}
// };

// const statesReducer = ( state = initialState, { type, payload }) => {
// 	switch( type ) {
// 		case REVEAL_ADD_JOB_INTERFACE:
// 			return { ...state, add_job_interface: true }
// 		break;
// 		case HIDE_ADD_JOB_INTERFACE:
// 			return { ...state, add_job_interface: false }
// 		break;
// 	}
// 	return state;
// }

// export default statesReducer;