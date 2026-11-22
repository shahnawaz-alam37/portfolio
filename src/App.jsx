import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RoleProvider } from './components/RoleContext'
import SmoothScroll from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import ScrollManager from './components/ScrollManager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'

const LegalShell = lazy(() => import('./components/LegalShell'))

function PortfolioShell() {
  return (
    <RoleProvider>
      <SmoothScroll />
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <main className="site-main" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/projects" element={<Navigate to="/work" replace />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </RoleProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="route-fallback">Loading document…</div>}>
        <Routes>
          <Route path="/app/attendance-and-labour/privacy-policy" element={<LegalShell />} />
          <Route path="/app/attendance-and-labour/terms-and-conditions" element={<LegalShell />} />
          <Route path="*" element={<PortfolioShell />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
