import React from 'react'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import {  Card,  CardContent, CardMedia } from '@mui/material'
import './Item.css'

const Item = ({item}) => {
   return (
    <div>
        <Card sx={{ m:1, maxWidth:300 }} className='item-card'>
            <CardHeader
                title={item.title}
                titleTypographyProps={{variant:'h6' }}
            />
            <CardMedia component="img" height='400'  title={item.title} image={`/images/${item.pictureUrl}`} />
            <CardContent>
                <Typography align="center" variant="h6" >$ {item.price} </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default Item