import React, { useEffect } from 'react';
import CustomizedButtons from '../tools/CustomizedButtons';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';
import 
{
    Dialog,
    DialogActions,
    DialogTitle,
    Stack,
    Slide
} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})
  

export default function DialogTemplate(props)
{
    const open = useSelector((state) => state.welcomeRX.isOpen)

    const [play, { stop }] = useSound(
        props.props.mp3,
        { loop: true }
      );

    useEffect(() =>{
        if (open)
            play();
        else
            stop();
        
    })
    
    return (
        <div>
            <Stack direction="row" sx={{m : 'auto', width: '60%', padding: 2}}>
                <CustomizedButtons text="Soumettez votre participation a la ville de Laval" />
            </Stack>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
            >
            <img
                style={{ width: 'auto', height: '100%' }}
                src={props.props.logo}
                alt="logo-laval"
            /> 
            <DialogTitle data-testid="dialog" sx={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center', padding: 5, color : '#7b38d8'}}>
                {props.props.title}
            </DialogTitle>
            <DialogActions >
                <CustomizedButtons text="Merci !" />
            </DialogActions>
            </Dialog>
      </div>
    )
}