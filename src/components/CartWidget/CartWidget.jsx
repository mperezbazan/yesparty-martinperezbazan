import React from 'react'
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const CartWidget = () => {
  return (
    <>
      <Button sx={{ mr:2, color: 'white'  }}>
        <ShoppingCartOutlinedIcon fontSize='large'/>
      </Button>
    </>
  )
}

export default CartWidget