import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import AnimatedBackground from '../components/AnimatedBackground'
import GlassCard from '../components/GlassCard'

const gradientStyle = {
  background: 'linear-gradient(135deg, #6366f1 30%, #8b5cf6 45%, #f59e0b 60%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  width: '100%'
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: [
      'By signing in to and using the Attendance & Labour mobile app (the "App"), you agree to these Terms and Conditions. If you do not agree, please do not use the App.',
      'These terms apply to all workers, labours and administrators who use the App to record or review attendance.'
    ]
  },
  {
    title: '2. Eligibility and Account',
    paragraphs: [
      'You must sign in using a supported OAuth provider and provide accurate information. You are responsible for keeping your account secure and for all activity that happens under your account.',
      'Do not share your login with another person. If you believe your account has been used without your permission, contact us using the details in section 12.'
    ]
  },
  {
    title: '3. Use of the App',
    paragraphs: [
      'The App is provided to record attendance, such as check-in and check-out times, work site details and related notes. You agree to use it only for this purpose and to record information truthfully.',
      'You must not attempt to copy, modify, reverse engineer or disrupt the App, or use automated means to submit attendance records.'
    ]
  },
  {
    title: '4. Attendance Records',
    paragraphs: [
      'Attendance records created in the App may be reviewed by your employer or site administrator. It is your responsibility to check that your entries are correct and to report any discrepancy promptly.',
      'The App is a timekeeping aid and does not by itself create an employment contract or determine payroll. Any payment or working-hour decisions remain with your employer.'
    ]
  },
  {
    title: '5. Optional Permissions',
    paragraphs: [
      'Camera and location access are optional and are used only if you enable them to support verification of a check-in. You may revoke these permissions at any time in your device settings, although some verification features may then be unavailable.'
    ]
  },
  {
    title: '6. Third-Party Services',
    paragraphs: [
      'Sign-in is handled by your OAuth provider. That provider\'s own terms and privacy policy govern your relationship with it, and we do not control its services.'
    ]
  },
  {
    title: '7. Intellectual Property',
    paragraphs: [
      'The App and its content are owned by the App owner and are protected by applicable intellectual property laws. You may not reuse or distribute them without permission.'
    ]
  },
  {
    title: '8. Termination',
    paragraphs: [
      'You may stop using the App at any time and revoke its OAuth access from your provider\'s account settings. We may suspend or terminate access if these terms are violated or if required to protect the App or other users.'
    ]
  },
  {
    title: '9. Disclaimer and Limitation of Liability',
    paragraphs: [
      'The App is provided "as is". We aim to keep it accurate and available, but we are not liable for indirect losses or for errors caused by incorrect information entered by a user or by interruptions beyond our reasonable control.'
    ]
  },
  {
    title: '10. Changes to These Terms',
    paragraphs: [
      'We may update these Terms and Conditions from time to time. The current version will always be published at this same address.'
    ]
  },
  {
    title: '11. Governing Law',
    paragraphs: [
      'These terms are governed by applicable law. If any provision is found to be unenforceable, the remaining provisions continue to apply.'
    ]
  },
  {
    title: '12. Contact Us',
    paragraphs: [
      'For questions about these terms, write to shahnawaz.alam1024@gmail.com.'
    ]
  }
]

const AttendanceTermsAndConditions = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 12, pb: 6, position: 'relative' }}>
      <AnimatedBackground />
      <Container maxWidth="md">
        <h1 className="text-center mt-2 fw-bold" style={gradientStyle}>
          Terms and Conditions
        </h1>
        <Typography variant="subtitle1" align="center" sx={{ mt: 1, color: 'text.secondary' }}>
          Attendance &amp; Labour Mobile App
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
          Last updated: 21 November 2026
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {sections.map((section) => (
            <GlassCard key={section.title} sx={{ p: 4 }} hover={false}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                {section.title}
              </Typography>
              {section.paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ mb: index === section.paragraphs.length - 1 ? 0 : 2, lineHeight: 1.7, color: 'text.secondary' }}
                >
                  {paragraph}
                </Typography>
              ))}
            </GlassCard>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default AttendanceTermsAndConditions
