import { Typography } from '@mui/material'
import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container'>
        
            <Typography variant="h5" className="list-title">
                {greeting}
            </Typography>

        
    </div>
  )
}

export default ItemListContainer