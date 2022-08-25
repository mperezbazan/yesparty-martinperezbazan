import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import db from '../../firebaseConfig'
import SkeletonItem from '../SkeletonItem/SkeletonItem'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item,setItem]=useState({})
  const {id} = useParams();

  const getProduct = async ()=>{
    const docRef = doc(db, 'items',id);
    const docSnapshot= await getDoc(docRef)
    const product = {id: docSnapshot.id, ...docSnapshot.data()}
    return product;
  }

  useEffect(()=>{
      setLoading(true)
      getProduct()
        .then((res)=>{
          setItem(res)
          setLoading(false) 
        })
     
    },[])
    
  return (
    <>
      {loading ?
        <SkeletonItem/>
      :
        <ItemDetail item={item} loading={loading}/>
      }
    </>
  )
  
}

export default ItemDetailContainer