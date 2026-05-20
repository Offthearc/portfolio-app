import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Projects from './Projects'
import { projects } from '../data/portfolio'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders all project titles', () => {
    render(<Projects />)
    for (const p of projects) {
      expect(screen.getByText(p.title)).toBeInTheDocument()
    }
  })

  it('renders project tags', () => {
    render(<Projects />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })
})
