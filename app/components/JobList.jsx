/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";

const JobList = ({ jobs }) => (
	<ul>
		{ jobs.map((job, i) => {
			return (
				<li key={i}>
					<pre>{ JSON.stringify(job, undefined, 2) }</pre>
					{/* // <p>{ title }</p> */}
					{/* // <p>{ description }</p> */}
				</li>
			);
		})}
	</ul>
);

export default JobList;