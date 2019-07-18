/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";
import { connect } from "react-redux";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as AC from "../redux/actions/actionCreators.js";
import * as PID from "../redux/panels.js";

// import Dashboard from "./Dashboard.jsx";
// import Management from "../container/Management.jsx";
import CreateJob from "./CreateJob.jsx";
// import Relations from "./JobRelations";

import JobList from "./JobList.jsx";
import NotificationList from "./Notifications.jsx";
import { getNotifications, getJobs, getPanel } from "../redux/selectors.js";

require( "../styles/index.scss" );

class App extends React.Component {
	render() {
		const props = { ...this.props };
		
		return (
			<React.Fragment>
				<section>
					<button className="info" onClick={props.onCreateInfoNotification}>Info me!</button>
					<button className="error" onClick={props.onCreateErrorNotification}>Error me!</button>
				</section>
				<section>
					<NotificationList notifications={props.notifications}/>
				</section>
				<section>
					<div>
						<button onClick={props.panelToggleJobCreation}>{ props.panelVisionStateJobCreation ? "Cancel job creation" : "Create Job!" }</button>
					</div>
					<div>
						<CreateJob panelVisionState={props.panelVisionStateJobCreation} handleCreateJob={props.handleCreateJob}/>
						<JobList jobs={props.jobs}/>
					</div>
				</section>
			</React.Fragment>
			// <JobList />
			// <BrowserRouter>
			// 	<Switch>
			// 		<Route path="/"></Route>
			// 		<Route path="/dashboard" component={Dashboard} />
			// 		<Route path="/management" component={Management} />
			// 		<Route path="/relations" componen={Relations} />
			// 	</Switch>
			// </BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => ({
	panelVisionStateJobCreation: getPanel( state, PID.JOB_CREATION ),
	jobs: getJobs(state),
	notifications: getNotifications(state)
});

const mapDispatchToProps = (dispatch) => ({
	panelToggleJobCreation: (evt) => {
		evt.preventDefault();
		dispatch(AC.requestTogglePanel(PID.JOB_CREATION))
	},
	handleCreateJob: ( values ) => dispatch(AC.requestHandleSubmissionCreateJob(values)),
	onCreateInfoNotification: () => dispatch(AC.requestCreateNotification("Testing notifications Info!", "info", 3000)),
	onCreateErrorNotification: () => dispatch(AC.requestCreateNotification("Testing notifications Error!", "error", 3000))
});

export default connect( mapStateToProps, mapDispatchToProps )( App );