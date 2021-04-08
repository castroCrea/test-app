import React from 'react';
import { useLocation } from 'react-router-dom';
import AddNote from './AddNote';
import GoBackButton from './GoBackButton';

const Header = React.memo(() => {
  let location = useLocation();
  console.log(location)

  return (
    <header>
      <h1>My text editor</h1>{location.pathname !== '/' ? <GoBackButton /> : <AddNote />}
    </header>
  )
})

export default Header;