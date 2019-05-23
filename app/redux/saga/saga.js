/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import { all, takeEvery, put } from "redux-saga/effects";
import * as at from "../actions/actionTypes.js";

import { JobClass } from "../../logic/Models.js";

export function* createJob( payload ) {
	
}

export function* requestCreateJob(action) {
	yield console.log( action );
	yield takeEvery( at.REQUEST_CREATE_JOB, function* (action) {
		const Job = new JobClass( action.payload );
		yield put({ type: at.RECEIVE_ADD_JOB, payload: Job });
	});
}

export default function* rootSaga() {
	yield all([
		requestCreateJob()
	]);
}