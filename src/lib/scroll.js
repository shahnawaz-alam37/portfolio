let lenisInstance = null

export function setLenis(instance) {
  lenisInstance = instance
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true })
  } else {
    window.scrollTo(0, 0)
  }
}

export function scrollToHash(hash) {
  if (!hash) return
  const id = hash.replace(/^#/, '')
  if (!id) return
  const target = document.getElementById(id)
  if (!target) return
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -72 })
  } else {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  }
}
