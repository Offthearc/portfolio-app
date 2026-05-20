import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'
import { profile } from '../data/portfolio'

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByText(profile.name)).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<Hero />)
    expect(screen.getByText(profile.title)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('View Projects')).toBeInTheDocument()
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
  })
})
