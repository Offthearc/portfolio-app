import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './Skills'
import { skills } from '../data/portfolio'

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />)
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)
    for (const { category } of skills) {
      expect(screen.getByText(category)).toBeInTheDocument()
    }
  })

  it('renders skill items', () => {
    render(<Skills />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })
})
