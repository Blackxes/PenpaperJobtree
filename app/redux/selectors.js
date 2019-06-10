/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

export const getJobs = store => store.jobs.list;
export const getNewJobId = store => store.jobs.idCounter;
export const getNewNotificationId = store => store.notifications.idCounter;

// returns a job by a filter key
export const getFilteredJobs = (store, key, value) => store.jobs.list.filter((v) => v[key] == value);

export const getNotifications = store => store.notifications.list;
export const getNotification = (store, id) => store.notifications.list.filter( (v) => v.id == id );

export const getPanel = (store, id) => store.panels[id];