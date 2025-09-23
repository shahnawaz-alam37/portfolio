import React from 'react'
import { Box, Typography, Container, TextField, Button, IconButton, useTheme } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import AnimatedBackground from '../components/AnimatedBackground'
import GlassCard from '../components/GlassCard'

const Contact = () => {
  const theme = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const subject = encodeURIComponent(formData.get('subject'))
    const message = encodeURIComponent(formData.get('message'))
    window.location.href = `mailto:shahnawaz.alam1024@gmail.com?subject=${subject}&body=${message}`
  }

  const socialLinks = [
    {
      icon: <GitHub />,
      href: 'https://github.com/shahnawaz-alam37',
      label: 'GitHub'
    },
    {
      icon: <LinkedIn />,
      href: 'https://linkedin.com/in/shahnawaz-alam37',
      label: 'LinkedIn'
    },
    {
      icon: <Email />,
      href: 'mailto:shahnawaz.alam1024@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        py: 8
      }}
    >
      <AnimatedBackground />
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 6,
            fontWeight: 600,
            textAlign: 'center',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #f59e0b 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's Connect
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Social Links Card */}
          <GlassCard sx={{ p: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
              Find me on
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 3
            }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 60,
                    height: 60,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      background: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                  aria-label={link.label}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </GlassCard>

          {/* Contact Form Card */}
          <GlassCard sx={{ p: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
              Send me a message
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3
              }}
            >
              <TextField 
                label="Subject"
                name="subject"
                variant="outlined"
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
              />
              <TextField 
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
              />
              <Button 
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </GlassCard>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
