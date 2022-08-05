import React from 'react'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import {  Card,  CardContent, CardMedia } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({item}) => {
   return (
    <div>
        <Card sx={{ width:350, m:1 }}>
            <CardHeader
                title={item.title}
            />
            <CardMedia component="img" height='400' title={item.title} image={`/images/${item.pictureUrl}`} />
            <CardContent>
                <Typography align="center" variant="h6" color="initial">$ {item.price} </Typography>
                
            </CardContent>
        </Card>
    </div>
  )
}

export default Item