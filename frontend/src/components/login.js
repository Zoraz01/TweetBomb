import Header from "./Header";
/*import Button from "./Button" */ 
import PropTypes from 'prop-types';
import {Navigate} from "react-router-dom"
import React from 'react';
import {Button} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import BackButton from "./BackButton";
import LoginButton from "./LoginButton";


function Log({title},{onClick}, props){
  const [goToHeader, setGoToHeader] = React.useState(false);
  const [goToBomb, setGoToBomb] = React.useState(false);

  if(goToBomb){
    return <Navigate to = "/Bomb"/>;
  }

  if(goToHeader){
    return <Navigate to = "/"/>;
  }
  
 
    
    return (
    <header className = 'header'>
      <hp>Log In via Twitter</hp>
      <p className="ppLogin"> Get started by logging in to Twitter</p>
      <p className="boldpp"> Your account will only be used to Bomb Tweets</p>
      <div>
                            <Stack spacing={4} direction="row">
                                
                                <BackButton  variant = "contained"  onClick = {() => setGoToHeader(true)} >
                                    go back
                                </BackButton>
                                <LoginButton  variant = "contained" size = "large" onClick = {() => setGoToBomb(true)}>
                                    Login
                                </LoginButton>
                            </Stack>
                        </div>
    </header>
  )
}
Log.defaultProps = {
    title: "Tweet Bomb",
}

Log.propTypes = {
  title: PropTypes.string,
}
export default Log;