import React, { Component } from 'react';
import TextInput from './presentationnal/input';
import Submit from './presentationnal/submit';

class signIn  extends Component {

  constructor(props) {
    super(props);
    this.state ={email:"your email",
    password:"your password"} ;
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.email==="foo" && this.state.password==="bar"){
      alert("login!")
    }
  }

  handleEmail(data){
    this.setState({email:data});
  }

  handlePassword(data){
    this.setState({password:data});
  }



  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form>
          <TextInput type="text" value={this.state.email} label="Your email" handlerFromParent={this.handleEmail} isPassword={false}/>
          <TextInput type="password" value={this.state.password} label="Your password" handlerFromParent={this.handlePassword} isPassword={true}/>
          <Submit function={this.handleSubmit} text="Login"/>
        </form>
      </div>
    );
  }

}

export default signIn ;
