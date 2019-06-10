/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

export class JobClass {
	constructor({ id = 0, title = "", description = "", requiredLevel = 0, maxLevel = 0 }) {
		this.id = id;
		this.title = title.toLowerCase();
		this.description = description;
		this.requiredLevel = requiredLevel;
		this.maxLevel = maxLevel;
	}
}

export class NotificationClass {
	constructor({ id, message, type = "ok", duration = 5000, autoDeletion = true }) {
		this.id = id;
		this.message = message;
		this.type = type;
		this.duration = duration;
		this.cancelled = false;
		this.hidden = false;
		this.autoDeletion = autoDeletion;
	}
}