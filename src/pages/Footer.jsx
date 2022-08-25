import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, IconButton, Grid, Typography, Stack } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Box >
          <Grid container justifyContent="center">
            <Grid item >
              <Stack spacing={1} direction='row' justifyContent={'center'} alignItems='center'>

                <Typography variant='body2'>Creado por Martin Pérez Bazán </Typography>
                <IconButton href="https://linkedin.com/in/mperezbazan/" target='_blank'>
                  <LinkedInIcon/>
                </IconButton> 
                <IconButton href="https://github.com/mperezbazan/" target='_blank'>
                  <GitHubIcon/>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
      </Box>
    </footer>
  )
}

export default Footer