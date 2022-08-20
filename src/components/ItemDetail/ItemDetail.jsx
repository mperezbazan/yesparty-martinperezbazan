import React, { useState, useContext } from 'react'
import {Typography, CardMedia, Box, Button, Stack} from '@mui/material'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({item, loading}) => {
  const { title,description, price, stock, pictureUrl} = item;
  const {addToCart} = useContext(CartContext)
  const [qty, setQty] = useState(0);

  const addProductToCart = (quantity) => {
    addToCart({...item,quantity})
    setQty(quantity)
  }
  
  return (
    <div>
      <Box sx={{ 
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"left",
        ml:10
       }}>
        <Box sx={{ 
          boxShadow:1,
          borderRadius:2,
          p:2,
          minWidth:300,
          mt:5,
         }}>

        
          <CardMedia
            sx={{  height:400 }}
            component="img"
            image={`../images/${pictureUrl}`}
          />
         
        </Box>

        <Box sx={{ 
          p:2,
          minWidth:300,
          minHeight:400,
          mt:5,
          ml:10
         }}>
          
                <Typography variant="h3" color="initial">{title}</Typography>
                <Typography variant="body1" color="initial">{description}</Typography>
                <Typography variant="h5" color="initial">$ {price}</Typography>
                <Typography variant="body2" color="initial">Cantidad en stock: {stock}</Typography>
                {qty>0 ? 
                  (
                    <Stack direction="row" spacing={2} m={2}>
                      <Link to='/'>
                        <Button variant="contained" size='small' color='secondary' >
                          Seguir comprando
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button variant='contained' size="small" color='info' >
                          Finalizar Compra
                        </Button>
                      </Link>
                    </Stack>
                  
                  )
                  :
                  (<ItemCount stock={stock} initial={1} onAdd={addProductToCart}/>)
                }
           
        </Box> 
      </Box>
    </div>
  )
}

export default ItemDetail