import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './presentationnal/input';
import { Link } from "react-router-dom";

class signIn  extends Component {

  constructor(props) {
    super(props);
    this.state ={email:"your email",
    password:"your password"} ;
  }

  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form>
          <TextInput value={this.state.email} label="Your email"/>
        </form>
        <Link style={{textDecoration:"none", color:"white"}} to="/">Home</Link>
      </div>
    );
  }

}

export default signIn ;
