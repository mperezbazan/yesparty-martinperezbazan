import React, {useState} from 'react'
import { AppBar, Avatar, Box, Button, Menu, MenuItem } from '@mui/material'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import categories from '../../data/categories.mock.json'


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" >
         <Box  className='appbar' sx={{ flexGrow:1 }}>
            <Link to="/">
              <Avatar alt="YES Party" src="/images/logo.png" sx={{ m: 2, width: 40, height: 40 }}/>
            </Link>
            <Box sx={{ flexGrow:1 }}>
              <Link to="/">
                <Button sx={{ my: 2, color: 'white'}}>
                  Productos
                </Button>
              </Link>
             
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', }}
              >
                Categorias
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
               
              >
                {categories.map((category) => {

                  return <Link to={`/category/${category.slug}`} key={category.id}><MenuItem  className="menu-item" onClick={handleClose} key={category.id}>{category.title}</MenuItem></Link>

                })}
                
                
              </Menu>
                
             
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