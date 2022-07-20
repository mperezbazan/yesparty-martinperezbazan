import { Box, Button, IconButton, Snackbar, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import React, {useState, useEffect} from 'react'

const ItemCount = ({stock, initial}) => {
    const [count, setCount]=useState(initial);
    const [disabledMinus, setDisabledMinus]=useState(true)
    const [disabledAdd, setDisabledAdd]=useState(false)
    const [disabledAddCart, setDisabledAddCart]=useState(false)
    const [openSnackbar, setOpenSnackbar]=useState(false)

    useEffect(()=>{
        if(stock===0){
            setCount("SIN STOCK");
            setDisabledMinus(true);
            setDisabledAdd(true);
            setDisabledAddCart(true);
        }
    },[])
    useEffect(()=>{
        if(count===stock){
            setDisabledAdd(true);
        }
        if(count===initial){
            setDisabledMinus(true);
        }
    },[count])
    
    const handleClickAdd=()=>{
        if(count<stock){
            setCount(count +1);
            setDisabledMinus(false);
        }
        
    }
    const handleClickSub=()=>{
        if(count>initial){
            setCount(count -1);
            setDisabledAdd(false);
        }
    }
    const handleClose=()=>{
        setOpenSnackbar(false)
    }
    const action=(
        <>
            <IconButton size='small' color="inherit" onClick={handleClose}>
                <Close fontSize="small"/>
            </IconButton>
        </>
    )

    const onAdd=()=>{
        setOpenSnackbar(true)
    }
  return (
    <>
        <Snackbar open={openSnackbar} message={"Cantidad de items agregados: " + count} action={action} anchorOrigin={{vertical: "top",horizontal:"center"}}/>

        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Box sx={{ display:"flex", flexDirection:"row", height:50 }}>
                <Button sx={{m:2}} disabled={disabledMinus} size="small" variant='outlined' onClick={handleClickSub}>-</Button>
                <Typography sx={{m:2}} size="small" align ="center">{count}</Typography>
                <Button sx={{m:2}} disabled={disabledAdd} size="small" variant='outlined' onClick={handleClickAdd}>+</Button>
            </Box>
            <Button variant='outlined' size="small" disabled={disabledAddCart} onClick={onAdd}>
                Agregar al carrito
            </Button>
        </Box>
    </>

  )
}

export default ItemCount