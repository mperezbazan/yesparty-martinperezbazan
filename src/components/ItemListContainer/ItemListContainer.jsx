import { Typography, Box, CircularProgress } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import db from '../../firebaseConfig'
import { Container } from '@mui/system'


const ItemListContainer = ({greeting}) => {


const [listProducts,setListProducts]=useState([])
const [loading, setLoading] = useState(false);
const {category} =useParams()

const getProducts = async ()=>{
  const productCollection = category ? query(
    collection(db, 'items'),
    where("category","==",category)
  ) 
  :
  collection(db, 'items')
 
const productSnapshot= await getDocs(productCollection)
const productList = productSnapshot.docs.map( (doc) => {
    return {id:doc.id, ...doc.data()}
  })
  return productList;
}

useEffect(()=>{
  setLoading(true)
  getProducts()
  .then((res)=>{
    setListProducts(res)
    setLoading(false)
  });
  
},[category])


  return (
    <div className='container'>
      <Typography variant="h5" className="list-title">
          {category ? category.toUpperCase() : greeting  }
      </Typography>
      <Container  maxWidth='xl'>
        {loading ?
        (
          <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center', marginY:5 }}>
            <CircularProgress />
          </Box>
        )
        :
        (
          <Box sx={{ display:"flex", flexDirection:"row" }}>
            {
              listProducts.length>0 ? 
              <ItemList items={listProducts}/>
              : 
              <Typography variant='h5' sx={{ color:'#839AA8', m:5  }}>No existen productos para la categoría seleccionada</Typography>
            }
            
          </Box>
        )
        }
            
      </Container>    

    </div>
  )
}

export default ItemListContainer