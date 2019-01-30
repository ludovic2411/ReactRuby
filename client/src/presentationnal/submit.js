import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Submit  extends Component {

  render() {
    return (
      <div style={{marginTop:"5px"}}>
        <Button size="medium" color="secondary" variant="contained" onClick={this.props.function}>
          {this.props.text}
        </Button>
      </div>
    );
  }

}

Submit.propTypes={
  function:PropTypes.func.isRequired,
  text:PropTypes.string.isRequired,
}

export default Submit ;
