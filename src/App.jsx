import React, { useState, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [mode, setMode] = useState('dark')

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#FFFFFF' : '#000000',
      },
      secondary: {
        main: mode === 'dark' ? '#FFFFFF' : '#000000',
      },
      background: {
        default: mode === 'dark' ? '#000000' : '#FFFFFF',
        paper: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
      },
      text: {
        primary: mode === 'dark' ? '#FFFFFF' : '#000000',
        secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === 'dark' ? '#000000' : '#FFFFFF',
            color: mode === 'dark' ? '#FFFFFF' : '#000000',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 50,
            padding: '8px 24px',
            fontSize: '0.95rem',
            fontWeight: 500,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
          },
          contained: {
            background: mode === 'dark' ? '#FFFFFF' : '#000000',
            color: mode === 'dark' ? '#000000' : '#FFFFFF',
            boxShadow: 'none',
            '&:hover': {
              background: mode === 'dark' ? '#F0F0F0' : '#1A1A1A',
              boxShadow: 'none',
            },
          },
        },
      },
    },
  }), [mode])

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ParticleBackground />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar onToggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </ThemeProvider>
    </Router>
  )
}

export default App