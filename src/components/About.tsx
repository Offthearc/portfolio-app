import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <h2 className="section-title">About</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              {profile.bio}
            </p>
          </div>
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '32px',
            }}
          >
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Location', value: 'Remote' },
                { label: 'Focus', value: 'Full-Stack Web Development' },
                { label: 'Email', value: profile.email },
              ].map(({ label, value }) => (
                <div key={label}>
                  <dt style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                    {label}
                  </dt>
                  <dd style={{ fontWeight: 500 }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
