import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByText('dp.')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText('View Projects')).toBeInTheDocument()
  })
})
