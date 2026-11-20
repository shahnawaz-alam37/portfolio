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
    title: '1. Introduction',
    paragraphs: [
      'This Privacy Policy explains how the Attendance & Labour mobile app (the "App") collects, uses, stores and protects information when you sign in and record your attendance. The App helps workers and labours mark check-in and check-out, and allows their employer or site administrator to review attendance records.',
      'This policy is published as part of the OAuth app review process so that users can understand what data the App requests and how it is handled.'
    ]
  },
  {
    title: '2. Information We Collect',
    paragraphs: [
      'Account information from your OAuth provider: when you sign in, we may receive your name, email address and profile picture if you choose to share them. We never receive or store your OAuth password.',
      'Attendance information: the dates, check-in and check-out times, work site or project details, and any notes you add while using the App.',
      'Optional device information: if you grant permission, we may use the camera to capture a verification photo or device location to confirm a site check-in. These permissions are optional and can be turned off in your device settings at any time.'
    ]
  },
  {
    title: '3. How We Use Information',
    paragraphs: [
      'We use the information only to create and maintain your account, record your attendance, show your own records back to you, and let authorised administrators verify working hours. We also use limited technical data to keep the App reliable and secure.',
      'We do not use your personal information for advertising, and we do not sell it.'
    ]
  },
  {
    title: '4. Sharing of Information',
    paragraphs: [
      'Your attendance records are visible to you and to the employer or site administrator responsible for your work site. We share information with service providers, such as hosting and authentication providers, only when needed to operate the App.',
      'We may disclose information if required by law. We do not share your personal information with third parties for marketing purposes.'
    ]
  },
  {
    title: '5. Data Retention',
    paragraphs: [
      'We keep attendance records for as long as they are needed for timekeeping, payroll support and legal record-keeping requirements. You may request deletion of your records, subject to these obligations.'
    ]
  },
  {
    title: '6. Security',
    paragraphs: [
      'Data is transmitted over encrypted connections, access is restricted to authorised users, and OAuth tokens are stored securely. While we take reasonable steps to protect your information, no system can be guaranteed completely secure.'
    ]
  },
  {
    title: '7. Your Rights and Choices',
    paragraphs: [
      'You can ask to access, correct or delete your information, revoke the App\'s OAuth access from your provider\'s account settings, and disable optional camera or location permissions at any time.',
      'To make a request, contact us using the details in section 9.'
    ]
  },
  {
    title: '8. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The updated version will be published at this same address, and we encourage you to review it periodically.'
    ]
  },
  {
    title: '9. Contact Us',
    paragraphs: [
      'If you have questions about this policy or about your data, write to shahnawaz.alam1024@gmail.com.'
    ]
  }
]

const AttendancePrivacyPolicy = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 12, pb: 6, position: 'relative' }}>
      <AnimatedBackground />
      <Container maxWidth="md">
        <h1 className="text-center mt-2 fw-bold" style={gradientStyle}>
          Privacy Policy
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

export default AttendancePrivacyPolicy
