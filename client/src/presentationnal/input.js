import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';

class TextInput  extends Component {

  constructor(props) {
    super(props);
    this.state ={inputValue:""} ;
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({inputValue:event.target.value},()=>{
      this.props.handlerFromParent(this.state.inputValue);
    })
  }

  render() {
    return (
      <div>
      <Input
      label={this.props.label}
      defaultValue={this.props.value}
      startAdornment={
        <InputAdornment position="start">
        <AccountCircle />
        </InputAdornment>
      }
      onChange={this.handleChange}
      />
      </div>
    );
  }
}

TextInput.propTypes={
  value:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  handlerFromParent:PropTypes.func.isRequired
}

export default TextInput ;
