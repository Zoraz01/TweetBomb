/*import Button from "./Button"; */
import {Navigate} from "react-router-dom"
import React from 'react';
import { ButtonGroup, TextField,Button,Checkbox,Box} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import styled from "@emotion/styled";
import BackButton from "./BackButton";
import BombButton from "./BombButton";


function Bomb(){
    const [goToLogin, setGoToLogin] = React.useState(false);
    const [linkOfTweet,SetLinkOfTweet] = React.useState("link")
    const [twitteraAuthenticated,SetTwitterAuthenticated] = React.useState(false)
    authenticateTwitter();

  if(goToLogin){
    return <Navigate to = "/logIn"/>;
  }
  function handleBomb(){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({link:linkOfTweet})
    };
    fetch('/api/create-Ouath', requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
  }
  function authenticateTwitter(){
    fetch('/twitter/is_authenticated').
    then((response) => response.json())
    .then((data) => {
        SetTwitterAuthenticated: data.status
        if(!data.status){
            fetch('/twitter/get-auth-url').then((response) => response.json()).then((date) => {
                window.location.replace(data.url);
            })
        }
    })
  }


    return(
        <header className="header">
            <hp>Paste the Tweet's URL</hp>
            <p className = "ppBomb">This will block the author of the tweet and everyone who liked and retweeted it</p>
            <TextField id= "TextBox" label = "Paste link here" margin="normal" style = {{width: "500px"}} onChange = {(ev) => SetLinkOfTweet(ev.target.value)} />
            
                
                        <div>
                            <Stack spacing={4} direction="row">
                                
                                <BackButton  variant = "contained"  onClick = {() => setGoToLogin(true)} >
                                    go back
                                </BackButton>
                                <BombButton  variant = "contained" size = "large" onClick = {handleBomb}>
                                    Bomb!
                                </BombButton>
                            </Stack>
                        </div>
                
            
            
        </header>

    );
}

export default Bomb