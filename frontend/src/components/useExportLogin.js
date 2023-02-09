import React from 'react';
import { useNavigate } from "react-router-dom";
function LoginLayout() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `./components/Log-in`; 
    navigate(path);
}
}
export default LoginLayout