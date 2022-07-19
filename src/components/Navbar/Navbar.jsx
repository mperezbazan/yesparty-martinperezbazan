import React from 'react'
import { AppBar, Avatar, Box, Button } from '@mui/material'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <AppBar position="static" >
         <Box  className='appbar' sx={{ flexGrow:1 }}>
          
            <Avatar alt="YES Party" src="/assets/images/logo.png" sx={{ m: 2, width: 40, height: 40 }}/>

            <Box sx={{ flexGrow:1 }}>
              <Button sx={{ my: 2, color: 'white' }}>
                Productos
              </Button>
              <Button sx={{ my: 2, color: 'white', }}>
                Nosotros
              </Button>
              <Button sx={{ my: 2, color: 'white', }}>
                Contacto
              </Button>
            </Box>
            
            <CartWidget/>

          </Box>
         
    </AppBar>
  )
}

export default Navbar