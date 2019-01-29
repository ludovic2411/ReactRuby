import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';

class TextInput  extends Component {

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
        />
      </div>
    );
  }
}

TextInput.propTypes={
  value:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired
}

export default TextInput ;
