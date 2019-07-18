/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";

const JobList = ({ jobs }) => (
	!jobs || !jobs.length ? null : (
		<ul className="job-list listing">
			{ jobs.map(({ title, description }, i) => {
				return (
					<li key={i} className="job list-item panel">
						<p className="job-title">{ title } (<span className="job-description text-small">{ description }</span>)</p>
					</li>
				);
			})}
		</ul>
	)
);

export default JobList;