import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash, scrollToTop } from '../lib/scroll'

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      scrollToTop()
      return undefined
    }
    const timeout = setTimeout(() => scrollToHash(hash), 90)
    return () => clearTimeout(timeout)
  }, [pathname, hash])

  return null
}
