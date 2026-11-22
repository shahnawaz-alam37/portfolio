import { cn } from '../lib/utils'
import { useRole } from '../hooks/useRole'

const options = [
  { value: 'all', label: 'All' },
  { value: 'ai', label: 'AI · ML' },
  { value: 'swe', label: 'Software' },
]

export default function RoleToggle() {
  const { role, setRole } = useRole()

  return (
    <div className="role-toggle" role="tablist" aria-label="View portfolio as">
      {options.map((option) => (
        <button
          type="button"
          key={option.value}
          role="tab"
          aria-selected={role === option.value}
          className={cn('role-pill label', role === option.value && 'is-active')}
          onClick={() => setRole(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
