import React, { useState } from 'react'
import {Typography, CardMedia, Box, Skeleton, Button} from '@mui/material'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'


const ItemDetail = ({item, loading}) => {
  const { title,description, price, stock, pictureUrl} = item;
  const [qty, setQty] = useState(0);

  return (
    <div>
      <Box sx={{ 
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"left",
        ml:10
       }}>
        <Box sx={{ 
          boxShadow:1,
          borderRadius:2,
          p:2,
          minWidth:300,
          mt:5,
         }}>

        {loading ? (
          <Skeleton sx={{  height:400 }} animation="wave" variant="rectangular" />
        ) : (
          <CardMedia
            sx={{  height:400 }}
            component="img"
            image={`../images/${pictureUrl}`}
          />
        )}
         
        </Box>

        <Box sx={{ 
          p:2,
          minWidth:300,
          minHeight:400,
          mt:5,
          ml:10
         }}>
          {
            loading ? (
              <>
                <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={20} width="80%" />
                <Skeleton animation="wave" height={30} width="80%" />
                <Skeleton animation="wave" height={20} width="80%" />
              </>
            ):(
              <>
                <Typography variant="h3" color="initial">{title}</Typography>
                <Typography variant="body1" color="initial">{description}</Typography>
                <Typography variant="h5" color="initial">$ {price}</Typography>
                <Typography variant="body2" color="initial">Cantidad en stock: {stock}</Typography>
                {qty>0 ? 
                  (
                  <Link to="/cart">
                    <Button variant='contained' size="small" color='info' sx ={{ mt:5, align:"center" }}>
                      Terminar Compra
                    </Button>
                  </Link>
                  )
                  :
                  (<ItemCount stock={stock} initial={1} onAdd={setQty}/>)
                }
              </>
            )
          }
          

        </Box> 
      </Box>
      
      
      
      
      
      
    </div>
  )
}

export default ItemDetail