import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders bio content', () => {
    render(<About />)
    expect(screen.getByText(/software engineer/i)).toBeInTheDocument()
  })

  it('renders location and focus info', () => {
    render(<About />)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Focus')).toBeInTheDocument()
  })
})
