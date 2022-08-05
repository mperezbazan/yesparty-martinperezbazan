import React from 'react'
import Item from '../Item/Item'
import { Box } from '@mui/material'
import {Link} from 'react-router-dom'


const ItemList = ({items}) => {
  return (
    <Box sx={{ display:"flex", flexDirection:"row", m:3 }}>
      {
         items.map( (item) => {
          return (
              <Link to={`/item/${item.id}`}>
                <Item key={item.id} item={item}/>
              </Link>
            
          )
        })
      }
    </Box>
  )
}

export default ItemList