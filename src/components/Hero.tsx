import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        paddingTop: 'var(--nav-height)',
      }}
    >
      <div className="container">
        <p style={{ color: 'var(--color-accent)', fontWeight: 600, marginBottom: '16px', fontSize: '0.95rem' }}>
          Hi, I&apos;m
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          {profile.name}
        </h1>
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--color-text-muted)',
            marginBottom: '24px',
          }}
        >
          {profile.title}
        </h2>
        <p
          style={{
            maxWidth: '520px',
            color: 'var(--color-text-muted)',
            fontSize: '1.1rem',
            marginBottom: '40px',
            lineHeight: 1.7,
          }}
        >
          {profile.tagline}
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              padding: '12px 28px',
              background: 'var(--color-accent)',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'background 0.2s',
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              padding: '12px 28px',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
