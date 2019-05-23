/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";

import { connect } from "react-redux";

const Jobs = ({ jobs }) => {
	return (
		<ul>
			{
				jobs.map( (job, i) => {
					return <li key={i}>{ job.name }</li>
				})
			}
		</ul>
	);
}

//---------------------------------------------------------------------------------------------
const mapStateToProps = (state) => ({
	jobs: state.jobs
});

export default connect( mapStateToProps, null )( Jobs );