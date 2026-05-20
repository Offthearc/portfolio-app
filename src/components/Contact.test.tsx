import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'
import { profile } from '../data/portfolio'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<Contact />)
    expect(screen.getByText(profile.email)).toBeInTheDocument()
  })

  it('renders GitHub and LinkedIn links', () => {
    render(<Contact />)
    expect(screen.getByText('GitHub ↗')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn ↗')).toBeInTheDocument()
  })
})
