import React from 'react'
import {Typography, CardMedia, Box, Skeleton} from '@mui/material'
import './ItemDetail.css'


const ItemDetail = ({item, loading}) => {
  console.log({item});
  console.log("LOADING: ",{loading})
  const { title,description, price, stock, pictureUrl} = item;
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
          <Skeleton sx={{  minHeight:400 }} animation="wave" variant="rectangular" />
        ) : (
          <CardMedia
            component="img"
            image={`./images/${pictureUrl}`}
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
              </>
            )
          }
          

        </Box>  
      </Box>
      
      
      
      
      
    </div>
  )
}

export default ItemDetail