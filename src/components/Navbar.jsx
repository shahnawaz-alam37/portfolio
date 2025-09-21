import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon, LightMode, DarkMode } from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = ({ onToggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Projects', path: '/projects' },
    { text: 'Events', path: '/events' },
    { text: 'Contact', path: '/contact' }
  ]

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleMenuClick = (path) => {
    navigate(path)
    setDrawerOpen(false)
  }

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'center',
            mt: 2,
            px: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              padding: '8px 24px',
              border: theme.palette.mode === 'dark' ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Desktop Menu */}
            {!isMobile ? (
              <>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => handleMenuClick(item.path)}
                    sx={{ 
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 400,
                      color: location.pathname === item.path ? 
                        (theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000') : 
                        (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)'),
                      '&:hover': {
                        background: 'transparent',
                        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}

                {/* <IconButton
                  onClick={onToggleTheme}
                  sx={{
                    ml: 1,
                    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
                  }}
                >
                  {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
                </IconButton> */}
              </>
            ) : (
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
                }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: '100%',
            background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <Box sx={{ width: '100%', py: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => handleMenuClick(item.path)}
                  sx={{
                    py: 2,
                    color: location.pathname === item.path ?
                      (theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000') :
                      (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)'),
                  }}
                >
                  <ListItemText 
                    primary={item.text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '1.1rem',
                        fontWeight: location.pathname === item.path ? 500 : 400,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                onClick={onToggleTheme}
                sx={{
                  py: 2,
                  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
                }}
              >
                <ListItemText 
                  primary={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '1.1rem',
                    },
                  }}
                />
                {theme.palette.mode === 'dark' ? <LightMode sx={{ ml: 1 }} /> : <DarkMode sx={{ ml: 1 }} />}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar