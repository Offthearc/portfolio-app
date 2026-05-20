import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div style={{ maxWidth: '560px' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '40px', lineHeight: 1.7 }}>
            I&apos;m open to new opportunities and collaborations. Feel free to reach out — I&apos;ll get back to you as soon as I can.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a
              href={`mailto:${profile.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 24px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                color: 'var(--color-text)',
                fontWeight: 500,
                fontSize: '0.95rem',
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>✉</span>
              {profile.email}
            </a>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 20px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '10px',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 20px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '10px',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
