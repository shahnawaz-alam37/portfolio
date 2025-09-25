import React from 'react'
import { Box, Typography, Container, Grid, useTheme } from '@mui/material'
import AnimatedBackground from '../components/AnimatedBackground'

const Events = () => {
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
      <Container maxWidth="lg">
        <h1 
          className="text-center mt-2 fw-bold" 
          style={{
            background: "linear-gradient(135deg, #6366f1 30%, #8b5cf6 45%, #f59e0b 60%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            width: "100%"
          }}
        >
        Events          
        </h1>
        
        <Grid container spacing={4}>
          {/* Event cards will go here */}
        </Grid>
      </Container>
    </Box>
  )
}

export default Events
