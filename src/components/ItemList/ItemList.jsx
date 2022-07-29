import React from 'react'
import Item from '../Item/Item'
import { Box } from '@mui/material'


const ItemList = ({items}) => {
 
  
  return (
    <Box sx={{ display:"flex", flexDirection:"row", m:3 }}>
      {
         items.map( (item) => {
          return <Item key={item.id} item={item}/>
        })
      }
    </Box>
  )
}

export default ItemList