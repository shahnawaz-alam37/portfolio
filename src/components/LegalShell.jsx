import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useLocation } from 'react-router-dom'
import AttendancePrivacyPolicy from '../pages/AttendancePrivacyPolicy'
import AttendanceTermsAndConditions from '../pages/AttendanceTermsAndConditions'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#c8845a' },
    secondary: { main: '#93a6ae' },
    background: { default: '#0a1218', paper: '#14222b' },
    text: { primary: '#f2efe7', secondary: '#93a6ae' },
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
  shape: { borderRadius: 0 },
})

function LegalShell() {
  const { pathname } = useLocation()
  const isPrivacy = pathname.endsWith('/privacy-policy')

  return (
    <ThemeProvider theme={theme}>
      {isPrivacy ? <AttendancePrivacyPolicy /> : <AttendanceTermsAndConditions />}
    </ThemeProvider>
  )
}

export default LegalShell
