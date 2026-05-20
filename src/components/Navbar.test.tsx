import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo link', () => {
    render(<Navbar />)
    expect(screen.getByText('dp.')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
