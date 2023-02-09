import { Button } from "@mui/material";
import styled from "@emotion/styled";

const BombButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 20px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#e61919',
    borderColor: '#fffff',
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: '#ff0000',
      borderColor: '#e61919',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ff0000',
      borderColor: '#e61919',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  export default BombButton