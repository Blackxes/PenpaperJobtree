/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import { all, put, takeEvery, takeLatest, select, cancel, delay } from "redux-saga/effects";
import * as AT from "../actions/actionTypes.js";
import * as AC from "../actions/actionCreators.js";
// import * as PID from "../panels.js";
import * as SEL from "../selectors.js";
import * as Models from "../../logic/Models.js";

import { watchCreateNotification, watchHideNotification, watchDeleteNotification } from "./notificationSaga.js";

// watches the job creation
export function* watchHandleJobCreation() {
	yield takeLatest( AT.REQUEST_HANDLE_SUBMISSION_CREATE_JOB, function* ({ type, pl }) {
		try {
			if ( !pl["title"] || !pl.title.length )
				throw new Error( "Invalid title" );
			
			// no duplicated job titles are allowed
			const duplicates = yield select( SEL.getFilteredJobs, "title", pl.title.toLowerCase() );
			
			if ( duplicates.length )
				throw new Error( "Duplicated title are not permitted" );
			
			const Job = new Models.JobClass({ ...pl, id: yield select(SEL.getNewJobId) });
			
			yield put( AC.requestAddJob(Job) );
		}
		catch( error ) {
			yield put( AC.requestCreateNotification(error.message, "error", 5000 ) );
			yield cancel();
		}
	});
}

// root saga
export default function* rootSaga() {
	yield all([
		watchCreateNotification(),
		watchHideNotification(),
		watchDeleteNotification(),
		watchHandleJobCreation()
	]);
}