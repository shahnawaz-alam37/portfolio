import { useContext } from 'react'
import { RoleContext } from '../lib/roleStore'

export function useRole() {
  const context = useContext(RoleContext)
  if (!context) throw new Error('useRole must be used within RoleProvider')
  return context
}
