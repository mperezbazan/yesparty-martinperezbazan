import React, { useEffect, useState } from 'react'
import products from '../../data/products.mock.json'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
  

  
  const [loading, setLoading] = useState(false);
  const [item,setItem]=useState({})
  const {id} = useParams();

  const getItem = new Promise ((resolve, reject)=>{
          setTimeout( () => {
            resolve (products.find( (product) => {
              if(product.id == id){
                return product
              }
            }))
          },2000)
        })
    
    useEffect(()=>{
       
        setLoading(true)
        
        getItem
          .then((res)=>{
            console.log(res)
            setItem(res)
          })
          .catch((error)=>{
            console.log("Error en consulta de producto")
          })
          .finally(()=>{
            setLoading(false)
          })
          
    },[])
    
  return (
    <>
    <ItemDetail item={item} loading={loading}/>
    </>
  )
  
}

export default ItemDetailContainer