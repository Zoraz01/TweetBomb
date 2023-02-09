import { Button } from "@mui/material";
import styled from "@emotion/styled";

const BackButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 20px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#cccccc',
    borderColor: '#fffff',
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: '808080',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '808080',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  export default BackButton