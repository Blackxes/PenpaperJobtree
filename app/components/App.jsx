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
import Jobs from "./Jobs.jsx";

require( "../styles/index.css" );

class App extends React.Component {
	render() {
		return(
			<React.Fragment>
				<h1>Jobmanagement</h1>
				<CreateJob />
				<Jobs />
			</React.Fragment>
		);
	}
}

export default connect()( App );