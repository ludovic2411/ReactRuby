import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const MyLink=()=><RouterLink style={{textDecoration:"none", color:"white",marginLeft:"5px"}} to="/">Home</RouterLink>;

class Submit  extends Component {


  render() {
    return (
      <div style={{marginTop:"5px"}}>
        <Button size="medium" color="secondary" variant="contained" onClick={this.props.function}>
          {this.props.text}
        </Button>
        <Link component={MyLink}>Link</Link>
      </div>
    );
  }

}

Submit.propTypes={
  function:PropTypes.func.isRequired,
  text:PropTypes.string.isRequired,
}

export default Submit ;
