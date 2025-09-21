import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  IconButton,
  useTheme
} from '@mui/material'
import { 
  Download as DownloadIcon, 
  Work as WorkIcon,
  KeyboardArrowDown as ArrowDownIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const Home = () => {
  const theme = useTheme();
  const technologies = ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Material-UI', 'AWS', 'Docker']

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8, // Add padding top for navbar
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box textAlign="center">
            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                
              </Typography>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
                  fontWeight: 800,
                  mb: 3,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #f59e0b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm{' '}
                <Box component="span" sx={{ 
                //   background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Shahnawaz Alam
                </Box>
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  mb: 4,
                  color: 'text.secondary',
                  maxWidth: 800,
                  mx: 'auto',
                  fontWeight: 400,
                }}
              >
                A passionate{' '}
                <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  full-stack developer
                </Box>
                {' '}creating exceptional digital experiences with cutting-edge technologies
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                sx={{ mb: 6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WorkIcon />}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>Navigate('/projects')}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </Button>
              </Stack>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 6 }}>
                {[
                  { icon: <GitHubIcon />, label: 'GitHub' },
                  { icon: <LinkedInIcon />, label: 'LinkedIn' },
                  { icon: <EmailIcon />, label: 'Email' }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      sx={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        '&:hover': {
                          background: 'rgba(99, 102, 241, 0.1)',
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            {/* Technologies Glass Card */}
            <motion.div variants={itemVariants}>
              <Box 
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
                  p: 4,
                  maxWidth: 800,
                  mx: 'auto',
                  mb: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(99, 102, 241, 0.3)',
                    boxShadow: '0 35px 60px rgba(99, 102, 241, 0.1)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
                  Technologies I work with:
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  flexWrap="wrap"
                  sx={{ gap: 1.5 }}
                >
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Chip
                        label={tech}
                        sx={{
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                          color: 'white',
                          fontWeight: 600,
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                            borderColor: 'primary.main',
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Floating Geometric Shapes */}
      <Box sx={{ position: 'absolute', top: '20%', right: '10%', opacity: 0.1 }}>
        <motion.div
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
              borderRadius: 2,
            }}
          />
        </motion.div>
      </Box>

      <Box sx={{ position: 'absolute', bottom: '30%', left: '5%', opacity: 0.1 }}>
        <motion.div
          animate={{ rotate: -360, x: [-15, 15, -15] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              background: 'linear-gradient(45deg, #f59e0b, #ef4444)',
              borderRadius: '50%',
            }}
          />
        </motion.div>
      </Box>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <IconButton
            onClick={scrollToNext}
            sx={{
              color: 'white',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '&:hover': {
                background: 'rgba(99, 102, 241, 0.1)',
                borderColor: 'primary.main',
              },
            }}
          >
            <ArrowDownIcon />
          </IconButton>
        </motion.div>
      </Box>
    </Box>
  )
}

export default Home