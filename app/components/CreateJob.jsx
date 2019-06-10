/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";

import { connect } from "react-redux";
import { Form, Field } from "react-final-form";

const CreateJob = ({ panelVisionState, handleCreateJob }) => {
	return !panelVisionState ? null : (
		<Form
			onSubmit={handleCreateJob}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>	
					<Field name="title" component="input" placeholder="Job title" />
					<Field name="description" component="input" placeholder="Job description" />
					<button type="submit">Create</button>
				</form>
			)}
		/>
	);
}

export default connect()( CreateJob );