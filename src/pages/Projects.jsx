import React from 'react'
import { Box, Typography, Container, Grid, useTheme } from '@mui/material'
import AnimatedBackground from '../components/AnimatedBackground'

const Projects = () => {
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
          My Projects
        </Typography>
        
        <Grid container spacing={4}>
          {/* Project cards will go here */}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects
