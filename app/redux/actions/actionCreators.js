/**********************************************************************************************
 * 
 * @File contains actions creators
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import * as AT from "./actionTypes.js";

// jobs
export const requestHandleSubmissionCreateJob = values => ({ type: AT.REQUEST_HANDLE_SUBMISSION_CREATE_JOB, pl: values });
export const requestAddJob = jobObj => ({ type: AT.REQUEST_ADD_JOB, pl: jobObj });

// panels
export const requestRevealPanel = panelId => ({ type: AT.REQUEST_REVEAL_PANEL, pl: panelId });
export const requestHidePanel = panelId => ({ type: AT.REQUEST_HIDE_PANEL, pl: panelId });
export const requestTogglePanel = panelId => ({ type: AT.REQUEST_TOGGLE_PANEL, pl: panelId });

// notifications
export const requestCreateNotification = (message, type, duration) => ({ type: AT.REQUEST_CREATE_NOTIFICATION, pl: {message, type, duration} });
export const requestAddNotification = notifObject => ({ type: AT.REQUEST_ADD_NOTIFICATION, pl: notifObject });
export const requestHideNotification = id => ({ type: AT.REQUEST_HIDE_NOTIFICATION, pl: id });
export const receiveHideNotification = id => ({ type: AT.RECEIVE_HIDE_NOTIFICATION, pl: id });
// export const requestDeleteNotification = id => ({ type: AT.REQUEST_DELETE_NOTIFICATION, pl: id });
// export const receiveDeleteNotification = id => ({ type: AT.RECEIVE_DELETE_NOTIFICATION, pl: id });