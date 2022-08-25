import React, {useState, useEffect} from 'react'
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import {collection, getDocs} from "firebase/firestore";
import db from "../../firebaseConfig"

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [categories, setCategories] = useState([]);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu=(e)=>{
    setAnchorElNav(e.currentTarget);
  }
  const handleCloseNavMenu=()=>{
    setAnchorElNav(null);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElNav(null);
  };

  const getCategories = async()=>{
    const categoryCollection = collection (db, 'categories');
    const categorySnapshot = await getDocs(categoryCollection);
    const categoryList = categorySnapshot.docs.map ((doc)=>{
      return {id:doc.id, ...doc.data()}
    })
    return categoryList

  }

  useEffect(()=>{
    getCategories()
      .then((res)=>{
        setCategories(res)
      });
    
  },[]);

 

  return (
    <AppBar position="static" >
        <Toolbar disableGutters sx={{ backgroundColor:'#54BAB9' }}>
         <Box   sx={{ flexGrow:1, display:'flex' }}>
            <Link to="/">
              <Avatar alt="YES Party" src="/images/logo.png" sx={{ m: 2, width: 40, height: 40, display:{xs:'none', md:'flex'} }}/>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem  onClick={handleCloseNavMenu}  >
                  <Link to="/">
                    <Typography textAlign="center" sx={{ color:'#839AA8' }} >Productos</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  sx={{ color:'#839AA8' }}>
                  <Typography textAlign="center" onClick={handleClick}>Categorias</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}  sx={{ color:'#839AA8' }}>
                  <Typography textAlign="center">Contacto</Typography>
                </MenuItem>
            </Menu>
          </Box>

            <Box sx={{ flexGrow:1, display:{xs:'none', md:'flex'} }}>
              <Link to="/">
                <Button sx={{ my: 2.5, color: 'white'}}>
                  Productos
                </Button>
              </Link>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display:{xs:'none', md:'flex'}}}
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

                  return <Link to={`/category/${category.key}`} key={category.id}><MenuItem  sx={{ color:'#839AA8' }} onClick={handleClose} key={category.id}>{category.title}</MenuItem></Link>

                })}
                
                
              </Menu>
              <Button sx={{ my: 2, color: 'white', display:{xs:'none', md:'flex'}}}>
                Contacto
              </Button>
            </Box>
            
            <CartWidget/>

          </Box>
          
        </Toolbar>
      
         
    </AppBar>
  )
}

export default Navbar