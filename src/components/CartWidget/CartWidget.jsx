import {React, useContext, useState} from 'react';
import {CartContext} from '../../context/CartContext';
import { Badge, Button, Menu, Box, CardMedia, Typography, Divider } from '@mui/material';
import {Link} from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const CartWidget = () => {
  const [anchorEl, setAnchorEl]=useState(null)
  const open = Boolean(anchorEl);
  const {cart, totalInCart, totalItems, clear, removeFromCart} =  useContext(CartContext);


  const handleClick=(e)=>{
    setAnchorEl(e.currentTarget);
    
  }
  const handleClose =()=>{
    setAnchorEl(null);
  }
  
  return (
    <>
      
      <Button sx={{ mr:2, color: 'white'  }} onClick={handleClick}>
        <Badge badgeContent={totalItems} color="primary" >
          <ShoppingCartOutlinedIcon fontSize='large'/>
        </Badge>
      </Button>
      
      <Menu
        id="cart-widget"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ m:2, minWidth:300  }}>
          {cart.length > 0 ?
            <>
              {cart.map( (product) => {
                return(
                  <div key={product.id}>
                <Box sx={{display:'flex',  alignItems:'center', my:1}} >
                  <CardMedia
                      sx={{  height:50, mr:1, maxWidth:60 }}
                      component="img"
                      src={`../images/${product.pictureUrl}`}
                  />
                  <Typography variant="p"sx={{ mr:1,minWidth:40, alignItems:'center'}}>{product.quantity} X </Typography>
                  <Typography variant="p" sx={{ mr:1, minWidth:150 }}>{product.title}</Typography>
                  <Typography variant="p" sx={{ mr:1, minWidth:100 }}>$ {product.price} c/u</Typography>
                  <Button onClick={()=>removeFromCart(product.id)}>
                    <DeleteIcon />
                  </Button>
                  
                </Box>
                <Divider/>
                </div>
    
               )
                })  
              }
              <Typography sx={{ my:2 }} variant="h5">Total: $ {totalInCart}</Typography>
              <Link to='/cart'>
                <Button variant="contained" size='small' onClick={handleClose}>
                  Finalizar Compra
                </Button>
              </Link>
                <Button variant="contained" color='error' size='small' sx={{mx:2}} onClick={clear}>
                  Vaciar Carrito
                </Button>
              
            </>
            
          
          :
          <Typography variant="p">Su carrito está vacío</Typography>
          }
      
        </Box>
        
      </Menu>
    </>
  )
}

export default CartWidget