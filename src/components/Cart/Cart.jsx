import { Divider, Grid, Typography, Button, Box, CardMedia, Stack, Modal, IconButton } from '@mui/material';
import React, { useContext, useState }  from 'react'
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import OrderForm from '../Form/OrderForm';
import CloseIcon from '@mui/icons-material/Close';

const Cart = () => {

  const {cart, totalInCart, clear, removeFromCart} =  useContext(CartContext);
  const [open, setOpen]=useState(false)
  
  const handleClose = ()=>{
    setOpen(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };
  
  return (
    <>
      <Grid container spacing={2} direction='row' sx={{ m:2 }}>

        <Grid item xs={12} md={6} >
        

          <Typography variant='h5'>Tus productos</Typography>
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
                        
                        <Grid item md={3} xs={5}>
                          <Typography variant="p" sx={{ mr:1, minWidth:150 }}>{product.title}</Typography>
                        </Grid>
                        <Grid item md={2} xs={1} >
                          <Typography variant="p"sx={{ mr:1,minWidth:40, alignItems:'center'}}>$ {product.price} </Typography>
                        </Grid>
                        <Grid item md={3} xs={2}>
                        <Typography variant="p" sx={{ mr:1, minWidth:100 }}>Subtotal: $ {product.quantity * product.price}</Typography>
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

        {
          cart.length>0 && 
          <>
            <Grid item md={1} sx={{ mx:5, minHeight:'100%' }} display={{ sm:'none', md:'block' }}>
              <Divider orientation='vertical' />
            </Grid>
            
            <Grid item xs={12} md={4} >
            <Typography sx={{ my:2 }} variant="h5">Datos de Compra</Typography>
            <Typography sx={{ mt:5 }} variant="h6">Envio: GRATIS</Typography>
            <Typography sx={{ my:2 }} variant="h6">Total de compra: $ {totalInCart}</Typography>
            <Button variant="contained" size='small' color='success'sx={{ mt:5 }} onClick={()=>setOpen(true)}>
                Realizar pago
            </Button>
              
            </Grid>
          </>
        }

      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style} >
          <Box textAlign='end' sx={{p:0, m:0}}>
            <IconButton aria-label="close" size='small' onClick={()=>handleClose()}>
              <CloseIcon />
            </IconButton>
          </Box>
          <OrderForm/>
        </Box>
      </Modal>
      
    </>
  )
}

export default Cart