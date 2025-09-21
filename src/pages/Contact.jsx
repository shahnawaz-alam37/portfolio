import React from 'react'
import { Box, Typography, Container, Grid, TextField, Button, useTheme } from '@mui/material'
import AnimatedBackground from '../components/AnimatedBackground'

const Contact = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 12,
        pb: 6,
        position: 'relative'
      }}
    >
      <AnimatedBackground />
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 6,
            fontWeight: 600,
            textAlign: 'center',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000'
          }}
        >
          Contact Me
        </Typography>
        
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            p: 4,
            borderRadius: 2,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <TextField 
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField 
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField 
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
          <Button 
            variant="contained"
            size="large"
            fullWidth
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
