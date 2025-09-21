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
import { useNavigate } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'
import GlassCard from '../components/GlassCard'

const Home = () => {
  const theme = useTheme()
  const navigate = useNavigate()
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
        pt: 8,
      }}
    >
      <AnimatedBackground />
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box textAlign="center">
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
                  onClick={() => navigate('/projects')}
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
                  { icon: <GitHubIcon />, label: 'GitHub', link: 'https://github.com/shahnawaz-alam37' },
                  { icon: <LinkedInIcon />, label: 'LinkedIn', link: 'https://linkedin.com/in/shahnawaz-alam37' },
                  { icon: <EmailIcon />, label: 'Email', link: 'mailto:your.email@example.com' }
                ].map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      component="a"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'text.primary',
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

            {/* Technologies */}
            <motion.div variants={itemVariants}>
              <GlassCard sx={{ maxWidth: 800, mx: 'auto', p: 4 }}>
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
                          color: 'text.primary',
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
              </GlassCard>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

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
              color: 'text.primary',
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
