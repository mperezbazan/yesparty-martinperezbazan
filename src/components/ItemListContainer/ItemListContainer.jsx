import { Typography, Box, CircularProgress, Stack } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import {useParams, useSearchParams} from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import db from '../../firebaseConfig'
import { Container } from '@mui/system'
import Search from '../Search/Search.jsx'

const ItemListContainer = ({greeting}) => {

const [searchParams]=useSearchParams();
const [listProducts,setListProducts]=useState([])
const [loading, setLoading] = useState(false);
const {category} =useParams()

const getProducts = async ()=>{
  const productSearched = searchParams.get('search');
  let filteredProduct
  const productCollection = category ? query(
    collection(db, 'items'),
    where("category","==",category),
   
  ) 
  :
  collection(db, 'items')
 
const productSnapshot= await getDocs(productCollection)
const productList = productSnapshot.docs.map( (doc) => {
    return {id:doc.id, ...doc.data()}
  })

  //La busqueda de productos se realiza con filter, dado que en Firebase no hay una forma de obtener una coleccion con un operador LIKE, como en otras BBDD.
  productSearched ?
    (
      filteredProduct= productList.filter(
      (product)=>{
      return product.description.toLowerCase().indexOf(productSearched.toLowerCase()) !== -1
    })
      
    )
  :
  (
    filteredProduct=productList
  )
  
  return filteredProduct;

}

useEffect(()=>{
  setLoading(true)
  getProducts()
  .then((res)=>{
    setListProducts(res)
    setLoading(false)
  });
  
},[category, searchParams])


  return (
    
    <div className='container'>
      <Stack className="list-title" spacing={2} direction={'row'}>
        <Typography variant="h5" sx={{ display:'flex' }} >
            {category ? category.toUpperCase() : greeting  }
        </Typography>
        <Search/>
      </Stack>
      <Container  maxWidth='xl' >
        {loading ?
        (
          <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center', marginY:5 }}>
            <CircularProgress />
          </Box>
        )
        :
        (
          <Box sx={{ display:"flex", flexDirection:"row",  }}>
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