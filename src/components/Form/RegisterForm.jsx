import React from 'react'
import { Typography, Box, TextField, Button } from '@mui/material'

const RegisterForm = () => {
  return (
    <>
    <Typography variant='h5'>Registro de Usuario</Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch' },
              mt:2
            }}
            textAlign="center"
          >
            <TextField
              id="name"
              label="Nombre"
              size="small"

            />
            <TextField
              id="phone"
              label="Teléfono"
              size="small"
            />
            <TextField
              id="email"
              label="Correo electronico"
              size="small"
            />
            
          </Box>
          <Box textAlign='center'>
            <Button variant="contained" size='small' sx={{ mt:5, mx:'auto' }} >
                  Registrar
            </Button>
          </Box>
    </>
  )
}

export default RegisterForm