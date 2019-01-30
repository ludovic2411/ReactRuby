import React, { Component } from 'react';
import TextInput from './presentationnal/input';
import Submit from './presentationnal/submit';
import { Link } from "react-router-dom";

class signIn  extends Component {

  constructor(props) {
    super(props);
    this.state ={email:"your email",
    password:"your password"} ;
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    alert(this.state.email)
  }

  handleEmail(data){
    this.setState({email:data});
  }



  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form>
          <TextInput value={this.state.email} label="Your email" handlerFromParent={this.handleEmail}/>
          <Submit function={this.handleSubmit} text="Login"/>
        </form>
        <Link style={{textDecoration:"none", color:"white"}} to="/">Home</Link>
      </div>
    );
  }

}

export default signIn ;
