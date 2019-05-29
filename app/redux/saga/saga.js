/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import { all, takeEvery, takeLatest, put, select } from "redux-saga/effects";
import * as at from "../actions/actionTypes.js";

import { JobClass } from "../../logic/Models.js";
import { getNewJobId, getSubmissionKey } from "../selectors.js";

//---------------------------------------------------------------------------------------------
export function* requestCreateJob(action) {
	yield takeEvery( at.REQUEST_CREATE_JOB, function* (action) {
		const Job = new JobClass({
			id: yield select(getNewJobId),
			...action.payload
		});

		yield put({ type: at.RECEIVE_ADD_JOB, payload: Job });
	});
}

//---------------------------------------------------------------------------------------------
export function* requestHandleJobSubmission(action) {
	yield takeEvery( at.REQUEST_HANDLE_JOBLIST_ACTION_SUBMISSION, function* (action) {
		const formState = yield select( (store) => store.formState );
		
		try {
			switch( formState.submissionKey ) {
				case "delete": yield put({ type: at.RECEIVE_DELETE_JOB, payload: action.payload.jobid }); break;
				case "edit": yield put({ type: at.RECEIVE_EDIT_JOB, payload: action.payload.jobid }); break;
				default: throw Error( "invalid submission key" );
			}
		}
		catch( err) {
			yield console.log( err.message );
		}

		return true;
	});
}


export default function* rootSaga() {
	yield all([
		requestCreateJob(),
		requestHandleJobSubmission()
	]);
}