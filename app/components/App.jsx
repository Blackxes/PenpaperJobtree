/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";
import { connect } from "react-redux";

import CreateJob from "./CreateJob.jsx";
import JobList from "./JobList.jsx";

require( "../styles/index.scss" );

class App extends React.Component {
	render() {
		return(
			<React.Fragment>
				<header>
					<h1>Jobmanagement</h1>
				</header>
				<main>
					<CreateJob />
					<JobList />
				</main>
			</React.Fragment>
		);
	}
}

export default connect()( App );