import { Divider, Grid, Typography, Button, Box, CardMedia, Stack, TextField } from '@mui/material';
import React, { useContext }  from 'react'
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

  const {cart, totalInCart, clear, removeFromCart} =  useContext(CartContext);
  
  return (
    <>
      <Grid container spacing={2} direction='row' sx={{ m:2 }}>

        <Grid item xs={12} md={6} >
        

          <Typography variant='h5'>Checkout</Typography>
          {
           cart.length>0 ?
            <>
              {cart.map( (product) => {
                return(
                  <div key={product.id}>
                    <Box sx={{display:'flex', alignItems:'center', my:1}} >
                     <Grid  spacing={2} container alignItems='center' justifyContent='center'>
                        <Grid item md={2} xs={1}>
                          <CardMedia
                            sx={{  height:100, m:1, maxWidth:60 }}
                            component="img"
                            src={`../images/${product.pictureUrl}`}
                          />
                        </Grid>
                        <Grid item md={1} xs={1} >
                          <Typography variant="p"sx={{ mr:1,minWidth:40, alignItems:'center'}}>{product.quantity} X </Typography>
                        </Grid>
                        <Grid item md={6} xs={6}>
                          <Typography variant="p" sx={{ mr:1, minWidth:150 }}>{product.title}</Typography>
                        </Grid>
                        <Grid item md={2} xs={2}>
                        <Typography variant="p" sx={{ mr:1, minWidth:100 }}>$ {product.quantity * product.price}</Typography>
                        </Grid>
                        
                        <Grid item md={1} xs={1}>
                          <Button onClick={()=>removeFromCart(product.id)}>
                            <DeleteIcon />
                          </Button>
                        </Grid>

                     </Grid>
                      
                    
                    
                    
                    
                </Box>
                <Divider/>
                </div>
    
               )
                })  
              }
              
              
              <Stack direction="row-reverse" spacing={2} m={2}>
                <Link to='/'>
                  <Button variant="text" size='small' >
                    Seguir comprando
                  </Button>
                </Link>
                <Button variant="text" size='small' color='error' sx={{ mx:5 }} onClick={clear}>
                      Vaciar carrito
                  </Button>
              </Stack>
              <Typography sx={{ my:2 }} variant="h6">Total: $ {totalInCart}</Typography>
              <Button variant="contained" size='small' color='success' >
                  Realizar pago
              </Button>
     
             
            </>
              :
            <>
            <Typography variant='h6' my={5}> El carrito de compras está vacío</Typography>
            <Link to='/'>
                <Button variant="contained" size='small' >
                  Volver
                </Button>
            </Link>
            </>
   
          }
        </Grid>
        <Grid item md={1} sx={{ mx:5, minHeight:'100%' }} display={{ sm:'none', md:'block' }}>
          <Divider orientation='vertical' />
        </Grid>
        
        <Grid item xs={12} md={4} >
          <Typography variant='h5'>Registro de Usuario</Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch' },
              mt:2
            }}
            textAlign="center"
          >
            <TextField
              id="name"
              label="Nombre"
              size="small"

            />
            <TextField
              id="surname"
              label="Apellido"
              size="small"
            />
            <TextField
              id="phone"
              label="Teléfono"
              size="small"
            />
            <TextField
              id="email"
              label="Correo electronico"
              size="small"
            />
            
          </Box>
          <Box textAlign='center'>
            <Button variant="contained" size='small' sx={{ mt:5, mx:'auto' }} >
                  Registrar
            </Button>
          </Box>
          
          
        </Grid>

      </Grid>
      
    </>
  )
}

export default Cart