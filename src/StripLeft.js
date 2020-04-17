import React from 'react';
import './style.css';

function StripLeft(props) {
  	if(props.assigned==="False"){
	  return (
	  	<div className="stripClass">
	  		<img src={props.srcUrl} alt="Hi"/>
	  		<p>{props.name}</p>
	  	</div>
	  	)
	}
	else{
		return(null)
	}
}

export default StripLeft;
