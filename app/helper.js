/**********************************************************************************************
 * 
 * @File in here are generic helper functions
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import $ from "jquery";

//---------------------------------------------------------------------------------------------
// reduces the given array from jquery's default serializeArray function
// to a key: value pair object
export const serializeArrayAsKeyValuePairs = (form) => {
	return $(form).serializeArray().reduce( (s, c) => ({ ...s, [c.name]: c.value }), {} );
}

//---------------------------------------------------------------------------------------------
// returns the form element by a submit button
export const getFormIdBySubmitEvent = (btn) => {
	if ( !btn )
		throw new Error( "passed submit button is invalid" );
		
	const form = $(btn).parentsUntil( null, "form" );

	return form ? form[0] : null;
}