/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";
import { connect } from "react-redux";

import { serializeArrayAsKeyValuePairs } from "../helper.js";

import { requestCreateJob } from "../redux/actions/actionCreators.js";

const CreateJob = ({ createJob }) => {
	return (
		<form onSubmit={createJob} >
			<h3>Add a new job</h3>
			<input type="text" name="name" placeholder="Job title" />
			<input type="text" name="description" placeholder="Description" />
			<button>Create</button>
		</form>
	);
}

const mapDispatchToProps = ( dispatch ) => ({
	createJob: (evt) => {
		evt.preventDefault();
		return dispatch( requestCreateJob(serializeArrayAsKeyValuePairs(evt.target)) );
	}
});

export default connect( null, mapDispatchToProps )( CreateJob );