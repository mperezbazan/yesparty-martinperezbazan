import { Typography, Box } from '@mui/material'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container'>
        
            <Typography variant="h5" className="list-title">
                {greeting}
            </Typography>
            <Box sx={{ display:"flex", flexDirection:"row" }}>
                <ItemCount stock={3} initial={1} />
                <ItemCount stock={6} initial={1} />
                <ItemCount stock={6} initial={2} />
                <ItemCount stock={0} initial={1} />
            </Box>
            

        
    </div>
  )
}

export default ItemListContainer