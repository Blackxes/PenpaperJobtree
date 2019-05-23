/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import * as at from "./actionTypes.js";

export const requestCreateJob = ( data ) => ({ type: at.REQUEST_CREATE_JOB, payload: data });
export const requestEditJob = ( id ) => ({ type: at.REQUEST_EDIT_JOB, payload: id });
export const requestDeleteJob = ( id ) => ({ type: at.REQUEST_DELETE_JOB, payload: id });
export const requestUpdateJob = ( id ) => ({ type: at.REQUEST_UPDATE_JOB, payload: id });
export const requestSaveJob = ( id, data ) => ({ type: at.REQUEST_SAVE_JOB, payload: {id, data} });

export const receiveAddJob = ( data ) => ({ type: at.RECEIVE_ADD_JOB, payload: {...data} });
export const receiveDeleteJob = ( id ) => ({ type: at.RECEIVE_DELETE_JOB, payload: id });
export const receiveEditJob = ( id ) => ({ type: at.RECEIVE_EDIT_JOB, payload: id });
export const receiveUpdateJob = ( id, data ) => ({ type: at.RECEIVE_UPDATE_JOB, payload: {id, data} });
export const receiveSaveJob = ( id ) => ({ type: at.RECEIVE_SAVE_JOB, payload: id });

//---------------------------------------------------------------------------------------------
// panels
// export const requestRevealPanel = ( key ) => ({ type: at.REQUEST_REVEAL_PANEL, payload: key });
// export const requestHidePanel = ( key ) => ({ type: at.REQUEST_HIDE_PANEL, payload: key });
// export const receiveRevealPanel = ( key ) => ({ type: at.RECEIVE_REVEAL_PANEL, payload: key });
// export const receiveHidePanel = ( key ) => ({ type: at.RECEIVE_REVEAL_PANEL, payload: key });