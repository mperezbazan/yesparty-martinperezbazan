import React from 'react'
import {Box, Skeleton} from '@mui/material'

const SkeletonItem = () => {
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

       
          <Skeleton sx={{  height:400 }} animation="wave" variant="rectangular" />
       
         
        </Box>

        <Box sx={{ 
          p:2,
          minWidth:300,
          minHeight:400,
          mt:5,
          ml:10
         }}>
          
                <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={20} width="80%" />
                <Skeleton animation="wave" height={30} width="80%" />
                <Skeleton animation="wave" height={20} width="80%" />
          
          

        </Box> 
      </Box>
    </div>
  )
}

export default SkeletonItem