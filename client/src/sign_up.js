import React, { Component } from 'react';
import TextInput from './presentationnal/input';
import Submit from './presentationnal/submit';
import email from './validation/email';

class signUp  extends Component {
  constructor(props) {
    super(props);
    this.state ={email:"your email",
    password:"your password",
    passwordConfirmation:"Confirm your password"} ;
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handlePasswordConfirmation=this.handlePasswordConfirmation.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if(email(this.state.email) && this.state.password==="bar"&& this.state.passwordConfirmation===this.state.password){
      alert("registrered!")
    }
  }

  handleEmail(data){
    this.setState({email:data});
  }

  handlePassword(data){
    this.setState({password:data});
  }

  handlePasswordConfirmation(data){
    this.setState({passwordConfirmation:data})
  }



  render() {
    return (
      <div>
        <h2>Sign up</h2>
        <form>
          <TextInput type="text" value={this.state.email} label="Your email" handlerFromParent={this.handleEmail} isPassword={false}/>
          <TextInput type="password" value={this.state.password} label="Your password" handlerFromParent={this.handlePassword} isPassword={true}/>
            <TextInput type="password" value={this.state.passwordConfirmation} label="Confirm your password" handlerFromParent={this.handlePasswordConfirmation} isPassword={true}/>
          <Submit function={this.handleSubmit} text="Login"/>
        </form>
      </div>
    );
  }
}

export default signUp ;
