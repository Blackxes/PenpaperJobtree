/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";

import { connect } from "react-redux";

import CreateJob from "../components/CreateJob.jsx";

class Management extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<React.Fragment>
				<CreateJob />
			</React.Fragment>
		);
	}
}

export default connect()( Management );