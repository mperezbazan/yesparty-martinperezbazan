import React, {useState, useEffect} from 'react'
import { AppBar, Avatar, Box, Button, makeStyles, Menu, MenuItem } from '@mui/material'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
//import categories from '../../data/categories.mock.json'
import {collection, getDocs} from "firebase/firestore";
import db from "../../firebaseConfig"



const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

                  return <Link to={`/category/${category.key}`} key={category.id}><MenuItem  sx={{ color:'#839AA8' }} onClick={handleClose} key={category.id}>{category.title}</MenuItem></Link>

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