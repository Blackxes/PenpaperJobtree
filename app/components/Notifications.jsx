/**********************************************************************************************
 * 
 * @File lists all notifications
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";

const NotificationList = ({ notifications }) => {
	const list = !notifications || !notifications.length ? [] : notifications.map(({ message, type, hidden }, index) => {
		if ( hidden )
			return null;
		
		const classString = [ "notification", `notification-${type}` ].join(" ");

		return (
			<li key={index} className={classString}>
				<p>{ message }</p>
			</li>
		);
	});
	
	return !list.filter( v => v != null ).length
		? null
		: <ul className="notifications">{[...list]}</ul>;
};

export default NotificationList;