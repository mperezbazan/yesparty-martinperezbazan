import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, IconButton } from '@mui/material';


const Footer = () => {
  return (
    <Box className='footer' alignItems='center'>
      Creado por Martin Pérez Bazán 
      <IconButton href="https://linkedin.com/in/mperezbazan/" target='_blank'>
        <LinkedInIcon/>
      </IconButton> 
      <IconButton href="https://github.com/mperezbazan/" target='_blank'>
        <GitHubIcon/>
      </IconButton>
    </Box>
    
  )
}

export default Footer