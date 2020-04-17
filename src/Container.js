import React from 'react';
import './style.css';
import StripLeft from './StripLeft'
import StripRight from './StripRight'

function Container(props) {
	var stripComponents;
	if(props.which==="left"){
		stripComponents = props.data.map(person => <StripLeft key={person.id} name={person.name} srcUrl={person.src} assigned={person.assigned}/>);
	} else{
		stripComponents = props.data.map(person => <StripRight key={person.id} name={person.name} srcUrl={person.src} assigned={person.assigned}/>)
	}

  return (
  	<div className="boxClass">
  		{stripComponents}
  	</div>
  	)
}

export default Container;
