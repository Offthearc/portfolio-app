import { projects, type Project } from '../data/portfolio'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'border-color 0.2s',
      }}
    >
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{project.title}</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, flexGrow: 1 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: 'rgba(124,106,247,0.12)',
              color: 'var(--color-accent)',
              padding: '3px 10px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.url || project.repo) && (
        <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              Live ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              Repo ↗
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
