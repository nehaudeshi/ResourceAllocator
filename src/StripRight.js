import React from 'react';
import './style.css';

function StripRight(props) {
  	if(props.assigned==="True")
	  return (
	  	<div className="stripClass">
	  		<img src={props.srcUrl} alt="Hi"/>
	  		<p>{props.name}</p>
	  	</div>
	  	)
	else{
		return(null)
	}
}

export default StripRight;
