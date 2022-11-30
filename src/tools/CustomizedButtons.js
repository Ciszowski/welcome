import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { HANDLECLICK } from '../reducers/constants/searchTypes';

const CustomButtons = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '14px 18px',
  border: '5px solid',
  lineHeight: 1.3,
  backgroundColor: '#7b38d8',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})


export default function CustomizedButtons(props) {
  const dispatch = useDispatch()

  const handleClick= () => {
    dispatch({type: HANDLECLICK })
  }

  return (
    <CustomButtons variant="contained" disableRipple  sx={{fontSize : 25}} onClick={handleClick}>
      {props.text}
    </CustomButtons>
  )
}