import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      technologies: ['React', 'Firebase', 'Material-UI'],
      link: 'https://github.com/yourusername/project2'
    },
    // Add more projects as needed
  ]

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        pt: 12, // Padding top to account for navbar
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'text.primary',
              fontWeight: 700,
            }}
          >
            My Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <GlassCard
                  sx={{ height: '100%', p: 4 }}
                  delay={index * 0.1}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: 'text.primary',
                      fontWeight: 600,
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Typography
                        key={techIndex}
                        variant="body2"
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          backgroundColor: 'background.paper',
                          color: 'text.secondary',
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Projects