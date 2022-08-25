import React from 'react'
import {Box, Container, Grid, Skeleton} from '@mui/material'

const SkeletonItem = () => {
  return (
    <>
    <Container maxWidth={'md'}>
      <Grid 
        container 
        spacing={1} 
        sx={{ 
          mt:2, 
          justifyContent:'center',
          alignItems:'center' 
          }}
      >
        <Grid 
          item 
          xs={12} 
          sm={6}
        >
          <Box sx={{ 
              boxShadow:1,
              borderRadius:2,
              p:2,
              maxWidth:300,
              
            }}>
              <Skeleton sx={{  width:300, height:300 }} animation="wave" variant="rectangular" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ 
            p:2,
            minWidth:300,
            minHeight:400,
            
            }}>
            
                <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={20} width="80%" />
                <Skeleton animation="wave" height={30} width="80%" />
                <Skeleton animation="wave" height={20} width="80%" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </>
  )
}

export default SkeletonItem