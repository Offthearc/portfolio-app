import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '32px 24px',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        fontSize: '0.85rem',
      }}
    >
      <div className="container">
        <p>
          Built by {profile.name} &mdash; &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
