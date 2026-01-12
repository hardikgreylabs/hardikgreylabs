import Link from "next/link";
import { profile, summary } from "../data/profile";
import { experiences } from "../data/experience";
import { projects, featuredProjects } from "../data/projects";
import { skills } from "../data/skills";
import { systemDesigns } from "../data/system-designs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">{profile.name}</h1>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
            <a href="#experience" className="text-slate-300 hover:text-white transition">Experience</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
            <a href="#system-design" className="text-slate-300 hover:text-white transition">System Design</a>
            <a href="#skills" className="text-slate-300 hover:text-white transition">Skills</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium mb-4">
            Available for opportunities
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-4">
          {profile.title}
        </p>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          {profile.tagline}
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-4">
            <div className="text-3xl font-bold text-emerald-400">{profile.stats.years}</div>
            <div className="text-slate-400 text-sm">Years Experience</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-4">
            <div className="text-3xl font-bold text-emerald-400">{profile.stats.projects}</div>
            <div className="text-slate-400 text-sm">Projects Delivered</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-4">
            <div className="text-3xl font-bold text-emerald-400">{profile.stats.clients}</div>
            <div className="text-slate-400 text-sm">Happy Clients</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-4">
            <div className="text-3xl font-bold text-emerald-400">{profile.stats.teamSize}</div>
            <div className="text-slate-400 text-sm">Team Members Led</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {summary}
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400">📍</span>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Location</div>
                <div className="text-white">{profile.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400">💼</span>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Current Role</div>
                <div className="text-white">Grey Cell Labs Pvt. Ltd.</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400">🎯</span>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Focus Areas</div>
                <div className="text-white">System Design, Fullstack, Cloud</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400">📧</span>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Email</div>
                <div className="text-white text-sm">{profile.email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <p className="text-emerald-400 font-medium">{exp.company}</p>
                </div>
                <div className="text-slate-400 text-sm mt-2 md:mt-0">
                  {exp.duration}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {exp.achievements.slice(0, 3).map((achievement, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">→</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => featuredProjects.includes(p.id)).map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  ...project.technologies.backend || [],
                  ...project.technologies.frontend || [],
                  ...project.technologies.database || [],
                ].slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.highlights && (
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="text-xs text-emerald-400">
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition"
          >
            View All {projects.length} Projects
          </Link>
        </div>
      </section>

      {/* System Design Section */}
      <section id="system-design" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-4">System Design</h2>
        <p className="text-slate-400 mb-8">
          Architecture decisions and design patterns for scalable systems
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {systemDesigns.map((design) => (
            <div
              key={design.id}
              className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded">
                  {design.difficulty}
                </span>
                <span className="text-slate-500 text-xs">{design.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{design.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{design.description}</p>
              <div className="space-y-2 text-sm">
                {design.metrics && (
                  <div className="grid grid-cols-2 gap-2">
                    {design.metrics.scale && (
                      <div className="text-slate-400">Scale: <span className="text-white">{design.metrics.scale}</span></div>
                    )}
                    {design.metrics.latency && (
                      <div className="text-slate-400">Latency: <span className="text-white">{design.metrics.latency}</span></div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.slice(0, 6).map((category) => (
            <div
              key={category.name}
              className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">
                  {category.level}
                </span>
              </div>
              <div className="space-y-3">
                {category.skills.slice(0, 5).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-500/10 to-slate-800/30 backdrop-blur border border-emerald-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition flex items-center gap-2"
            >
              <span>📧</span> Send Email
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition flex items-center gap-2"
            >
              <span>in</span> LinkedIn
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition flex items-center gap-2"
            >
              <span>⚡</span> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-slate-700/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 {profile.name}. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex gap-4 text-sm">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
              GitHub
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-white transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
