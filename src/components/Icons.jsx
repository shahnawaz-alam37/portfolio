import React from 'react'

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
  'aria-hidden': true,
  focusable: 'false',
}

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 13L13 3M5 3h8v8" />
    </svg>
  )
}

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  )
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 2v8M4.5 7L8 10.5 11.5 7M2 13h12" />
    </svg>
  )
}

export function GitHubIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 1.5a6.5 6.5 0 0 0-2.06 12.67c.32.06.44-.14.44-.31v-1.2c-1.8.39-2.18-.77-2.18-.77-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.65.05.99.67.99.67.58 1 1.52.71 1.89.54.06-.42.23-.71.41-.87-1.44-.16-2.95-.72-2.95-3.2 0-.71.25-1.28.67-1.74-.07-.17-.29-.83.06-1.72 0 0 .54-.17 1.78.67a6.2 6.2 0 0 1 3.24 0c1.24-.84 1.78-.67 1.78-.67.35.89.13 1.55.06 1.72.41.46.67 1.03.67 1.74 0 2.49-1.52 3.04-2.96 3.2.24.2.45.6.45 1.21v1.79c0 .17.12.38.45.31A6.5 6.5 0 0 0 8 1.5Z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="1.5" y="3" width="13" height="10" />
      <path d="M1.5 3.5L8 9l6.5-5.5" />
    </svg>
  )
}
