/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

export class JobClass {
	constructor({ id = 0, name = "", description = "", requiredLevel = 0, maxLevel = 0 }) {
		this.id = id;
		this.name = name.toLowerCase();
		this.description = description;
		this.requiredLevel = requiredLevel;
		this.maxLevel = maxLevel;
	}
}