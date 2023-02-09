import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import {Navigate} from "react-router-dom"
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginButton from './LoginButton';


function Header({title},props){
  const [goToLogin, setGoToLogin] = React.useState(false);

  if(goToLogin){
    return <Navigate to = "/logIn"/>;
  }

  

  return (
    <header className = 'header'>
      <hp>{title}</hp>
      <p className='pp'>
        Bomb a Tweet to block everyone that has interacted with it (retweeted or liked).
      </p>
      <a className='author' href="https://github.com/Zoraz01" target="_blank">
        Created by Zoraz
      </a>
         
        <LoginButton variant = "contained" size = "large" onClick = {() => setGoToLogin(true)}>
          Log In
        </LoginButton>
      
    </header>
  )
}
Header.defaultProps = {
    title: "Tweet Bomb",
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
