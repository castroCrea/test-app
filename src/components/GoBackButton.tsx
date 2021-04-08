import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const GoBackButton = () => {  
  return <Button color="primary" component={Link} to="/" variant="contained">Back</Button>
}

export default GoBackButton