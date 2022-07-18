import React from 'react'
import { AppBar, Avatar, Box, Button } from '@mui/material'
import './Navbar/Navbar.css'


const Navbar = () => {
  return (
    <AppBar position="static" >
         <Box  className='appbar'>
            <Avatar alt="YES Party" src="/assets/images/logo.png" sx={{ m: 2, width: 40, height: 40 }}/>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Productos
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Nosotros
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Contacto
            </Button>
         </Box>
    </AppBar>
  )
}

export default Navbar