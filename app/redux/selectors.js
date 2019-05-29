/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

// returns a new id for a job
export const getNewJobId = (store) => store.jobs.idCounter;

//---------------------------------------------------------------------------------------------
// returns the current submission key
export const getSubmissionKey = (store) => {
	console.log( "mission", store.formState );
}
	// store.formState.submissionKey;

