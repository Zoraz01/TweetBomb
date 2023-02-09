import { Button } from "@mui/material";
import styled from "@emotion/styled";

const LoginButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#1DA1F2',
    borderColor: '#0e9af1',
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: '#3eaef4',
      borderColor: '#1DA1F2',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3eaef4',
      borderColor: '#1DA1F2',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  export default LoginButton