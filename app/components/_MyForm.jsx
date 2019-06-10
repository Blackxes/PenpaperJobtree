/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";
import { Form, Field } from 'react-final-form';

const showResults = () => {
	window.alert( JSON.stringify(values, undefined, 2) );
}

const handleSubmit = (v1, v2, v3) => {
	console.log( "form-submitted", v1, v2, v3 );
}

const MyForm = () => (
	<div>
		<h1>React Final Form</h1>
		<Form onSubmit={showResults}>
			{ ({ handleSubmit, values }) => (
				<form onSubmit={handleSubmit}>
					<Field
						name="firstName"
						component={ () => {
							return <input defaultValue="wusa" placeholder="wow"/>
						}}
						placeholder="First name"
					/>
					<button type="submit">Save</button>
					<pre>{ JSON.stringify(values, undefined, 2) }</pre>
				</form>
			)}
		</Form>
	</div>
);

const mapStateToProps = (props) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default MyForm;