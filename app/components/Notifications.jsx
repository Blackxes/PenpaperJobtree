/**********************************************************************************************
 * 
 * @File lists all notifications
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";

const NotificationList = ({ notifications }) => {
	return !(notifications && notifications.length) ? null : (
		<ul>
			{ notifications.map((notif, i) => {
				const classNames = [
					"notification",
					`notification-${notif.type}`,
					notif.hidden ? "hidden" : "active"
				];
				
				return (
					<li key={i} className={classNames.join(" ")}>
						<p>{ notif.message }</p>
					</li>
				);
			})}
		</ul>
	)
};

export default NotificationList;