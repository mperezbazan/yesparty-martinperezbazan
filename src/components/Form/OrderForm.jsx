import React, {useState, useContext} from 'react'
import { Typography, Box, TextField, Button, Divider,CircularProgress } from '@mui/material'
import { CartContext } from '../../context/CartContext'
import {addDoc, collection, updateDoc, doc, increment} from 'firebase/firestore'
import db from '../../firebaseConfig'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'



const OrderForm = () => {
  const {cart, totalInCart, clear }=useContext(CartContext);
  const [orderData, setOrderData]=useState({
    buyer:{},
    items:cart.map((product)=>{
      return {
        id: product.id,
        title: product.title,
        quantity: product.quantity,
        price: product.price
      }
    }),
    total: totalInCart,
    date: new Date().toLocaleString()
  })
  const [formData, setFormData] = useState({
    name:'',
    phone:'',
    email:''
  })
  const [loading,setLoading]=useState(false)
  const [success, setSuccess] = useState()
  
  const sendOrder= async (newOrder) => {
  
    const collectionOrder = collection(db, 'orders');
    const orderDoc = await addDoc(collectionOrder, newOrder)
    setSuccess(orderDoc.id)
    cart.map((product)=>{
      removeStock(product.id, product.quantity)
    })
    setOrderData()
    clear()
    setLoading(false)
  }

  const removeStock=async(item, qty)=>{
    const productDoc = doc(db, "items", item)
    await updateDoc(productDoc,{stock: increment(-qty)})
  }

  const handleChange=(e)=>{
    if(typeof(e)=='string'){
      setFormData({...formData, phone: e})
    }else{
      setFormData({...formData, [e.target.name]: e.target.value})
    }
    
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true)
    sendOrder({...orderData, buyer: formData})
  }


  return (
    <>
     {loading ? 
     (
      <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center', p:0,m:0,  height:350 }}>
        <CircularProgress />
      </Box>
    )
    :
    success ? (
        <Box sx={{p:0,m:0,  height:350  }}>
        <Typography variant='h6'>GRACIAS POR TU COMPRA!</Typography>
        <Divider/>
        <Typography variant='h6' sx={{ my:5 }}> N° de Orden:  <Typography color={'primary'} >{success}</Typography></Typography>
        <Typography variant='body1'>Conserve este número de orden para poder recibir sus productos</Typography>
        <Link to='/'>
          <Button variant='contained' color='primary' sx={{mt:5 }}>
            Volver a inicio
          </Button>
        </Link>
        </Box>
      )
      :
      (
        <Box sx={{p:0,m:0, height:350  }}>
          <Typography variant='h5'>Datos de Contacto</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
              size="medium"
              name='name'
              type={'text'}
              onChange={handleChange}
              value={formData.name}
              required

            />
            

            <PhoneInput
              country={'ar'}
              specialLabel='Telefono'
              onlyCountries={['ar']}
              value={formData.phone}
              onChange={handleChange}
              
              masks={{ ar:'(...) ...-....' }}
              inputProps={{ 
                name: 'phone',
                required:true,
                autoFocus:true
                
               }}
            />
            <TextField
              id="email"
              label="Correo electronico"
              type={'email'}
              size="medium"
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <Button
              color="success"
              type="submit"
              variant="contained"
              sx={{ m:5 }}
            >
              Finalizar Compra
            </Button>
          </Box>
        </Box>
      )
    }
    </>

  )
}

export default OrderForm