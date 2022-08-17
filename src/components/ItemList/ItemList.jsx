import React from 'react'
import Item from '../Item/Item'
import { Box, Grid } from '@mui/material'
import {Link} from 'react-router-dom'


const ItemList = ({items}) => {
  return (
    
    
    <Grid container spacing={1} direction='row' sx={{ m:1 }}>
       
      {
         items.map( (item) => {
          return (
            <Grid item  key={item.id}>
              <Link to={`/item/${item.id}`}  >
                <Item key={item.id} item={item}/>
              </Link>
            </Grid>
          )
        })
      }
    </Grid>
    
  )
}

export default ItemList