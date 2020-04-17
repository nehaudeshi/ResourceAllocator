import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from './Header'
import BoxContainer from './Container'
import personData from './personData'

class App extends React.Component{

    constructor(){
      super();
      this.state = {
        data : personData
      }
      this.assignClick = this.assignClick.bind(this);
      this.revokeClick = this.revokeClick.bind(this);
    }
    
    assignClick(){
      var x=1;
      this.setState(
        prevState => {
            const updatedData = prevState.data.map(person => {
                    if (person.assigned === "False" && x === 1){
                        console.log(person.name)
                        x=2;
                        return {
                        ...person, 
                        assigned: "True"
                      }
                    }
                    return person;
                })
            if(JSON.stringify(prevState.data) ===  JSON.stringify(updatedData)){
              alert("Sorry! No people to assign");
            }
            return {data : updatedData}
        });
    }

    revokeClick(){
      var x=1;
      this.setState(
        prevState => {
            const updatedData = prevState.data.map(person => {
                    if (person.assigned === "True" && x === 1){
                        console.log(person.name)
                        x=2;
                        return {
                        ...person, 
                        assigned: "False"
                      }
                    }
                    return person;
                })
            if(JSON.stringify(prevState.data) ===  JSON.stringify(updatedData)){
              alert("Sorry! No people to revoke");
            }
            return {data : updatedData}
        });
    }

    toggleClick(){
      var appDiv = document.getElementById("appDiv").classList;
      if(appDiv.contains("light")){
        appDiv.add("dark");
        appDiv.remove("light");
      } else if(appDiv.contains("dark")){
        appDiv.add("light");
        appDiv.remove("dark");
      }
      
    }

    render(){
      return (
        <div id="appDiv" className="light">
          <Header/>
          <Container id="container">
            <Row>
              <Col md={12} lg={5}><BoxContainer which="left" data={this.state.data}/></Col>
              <Col md={12} lg={2}>
                <div className="buttonDiv">
                  <center>
                    <button id="assignButton" onClick={this.assignClick}>Assign &#8608; </button>
                    <br/>
                    <br/>
                    <button id="revokeButton" onClick={this.revokeClick}> &#8606; Revoke</button>
                  </center>
                </div>
              </Col>
              <Col md={12} lg={5}><BoxContainer which="right" data={this.state.data}/></Col>
            </Row>
            <br/>
            <br/>
            <center>
                <button id="toggleButton" onClick={this.toggleClick}>Toggle Mode</button>
            </center>
          </Container>
        </div>
    );
  }
}

export default App;
