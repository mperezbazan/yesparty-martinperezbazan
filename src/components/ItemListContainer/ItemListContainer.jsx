import { Typography, Box, CircularProgress } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import products from '../../data/products.mock.json'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({greeting}) => {


const [listProducts,setListProducts]=useState([])
const [loading, setLoading] = useState(false);
//const [categoryFiltered, setCategoryFiltered]= useState(null);
const {category} =useParams()

const getProducts = new Promise ((resolve, reject)=>{
  
  setTimeout( () => {
    const productsFiltered = category ? products.filter(product => product.category === category) : products
    resolve(productsFiltered)
  },2000)
})


useEffect(()=>{

  setLoading(true)
    getProducts
      .then((res)=>{
        setListProducts(res)
      })
      .catch((error)=>{
        console.log("Error en consulta de productos")
      })
      .finally(()=>{
        setLoading(false)
      })
},[category])


  return (
    <div className='container'>
        
            <Typography variant="h5" className="list-title">
                {greeting}
            </Typography>
           
              {loading && (
                <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center', marginY:5 }}>
                  <CircularProgress />
                </Box>
              )}
            <Box sx={{ display:"flex", flexDirection:"row" }}>
              <ItemList items={listProducts}/>
            </Box>
           
            
            

    </div>
  )
}

export default ItemListContainer