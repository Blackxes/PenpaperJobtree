/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";
import $ from "jquery";

import { connect } from "react-redux";

import * as at from "../redux/actions/actionCreators.js";
import { serializeArrayAsKeyValuePairs, getFormIdBySubmitEvent } from "../helper.js";

class JobList extends React.Component {

	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		// Todo: load jobs
	}

	componentDidUpdate() {
		// Todo: update submit triggerer
	}

	render() {
		const props = this.props;

		return (
			<ul className="list">
				{
					props.jobs.map( (job, i) => {
						return (
							<li key={i} className="list-item grid">
								<form id={"job-" + job.name} method="post" onSubmit={props.handleSubmit}>
									<div className="job-info">
										<p>{ job.name }</p>
										<p>{ job.description }</p>
									</div>
									<input type="hidden" name="jobid" value={job.id}/>
									<div className="actions">
										<button className="icon-wrap" name="edit" onClick={props.setFormSubmissionKey}><i className="fas fa-pencil-alt"></i></button>
										<button className="icon-wrap" name="delete" onClick={props.setFormSubmissionKey}><i className="fas fa-trash"></i></button>
									</div>
								</form>
							</li>
						);
					})
				}
			</ul>
		);
	}
}

//---------------------------------------------------------------------------------------------
const mapStateToProps = (state) => ({
	jobs: state.jobs.list
});


//---------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => ({
	handleSubmit: (evt) => {
		evt.preventDefault();
		
		return dispatch(
			at.requestHandleJobListActionSubmission(
				serializeArrayAsKeyValuePairs(evt.target)
			)
		);
	},
	setFormSubmissionKey: (evt) => dispatch(
		at.recieveSetFormSubmissionKey(
			getFormIdBySubmitEvent(evt.target).id,
			evt.currentTarget.name
		)
	)
});

export default connect( mapStateToProps, mapDispatchToProps )( JobList );