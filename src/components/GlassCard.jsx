import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const GlassCard = ({ 
  children, 
  sx = {}, 
  delay = 0, 
  hover = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': hover ? {
            background: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(99, 102, 241, 0.3)',
            boxShadow: '0 35px 60px rgba(99, 102, 241, 0.1)',
          } : {},
          ...sx
        }}
        {...props}
      >
        {children}
      </Box>
    </motion.div>
  )
}

export default GlassCard