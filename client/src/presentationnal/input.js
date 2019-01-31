import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

class TextInput  extends Component {

  constructor(props) {
    super(props);
    this.state ={inputValue:""};
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({inputValue:event.target.value},()=>{
      this.props.handlerFromParent(this.state.inputValue);
    })
  }

  render() {

    if(this.props.isPassword){

      return (
        <div>
        <Input
        type={this.props.type}
        label={this.props.label}
        defaultValue={this.props.value}
        startAdornment={
          <InputAdornment position="start">
          <AccountCircle />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
          <IconButton aria-label="Toggle password visibility">
          <Visibility/>
          </IconButton>
          </InputAdornment>
        }

        onChange={this.handleChange}
        />
        </div>
      );
    }else {
      return (
        <div>
        <Input
        type={this.props.type}
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
}

TextInput.propTypes={
  value:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  isPassword:PropTypes.bool.isRequired,
  handlerFromParent:PropTypes.func.isRequired
}

export default TextInput ;
