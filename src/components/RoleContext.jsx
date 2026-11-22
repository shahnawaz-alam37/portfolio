import { useMemo, useState } from 'react'
import { RoleContext } from '../lib/roleStore'

export function RoleProvider({ children }) {
  const [role, setRole] = useState('all')
  const value = useMemo(() => ({ role, setRole }), [role])
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}
