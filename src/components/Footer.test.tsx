import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'
import { profile } from '../data/portfolio'

describe('Footer', () => {
  it('renders author name', () => {
    render(<Footer />)
    expect(screen.getByText(/David Parrar/i)).toBeInTheDocument()
  })

  it('renders copyright year', () => {
    render(<Footer />)
    const year = String(new Date().getFullYear())
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('contains the profile name', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(profile.name))).toBeInTheDocument()
  })
})
