import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  achievements,
  awards,
  experiences,
  interests,
  patents,
  products,
  profile,
  profiles,
  projects,
  publications,
  videos,
} from "./data/portfolioData";

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function App() {
  const [domainFilter, setDomainFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [submitState, setSubmitState] = useState("");
  const [brokenPatentImages, setBrokenPatentImages] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [lightbox, setLightbox] = useState<{ src: string; alt?: string } | null>(null);

  useEffect(() => {
    document.title = "Simar Singh Rayat | Research Portfolio";
  }, []);

  const domains = useMemo(() => ["All", ...new Set(publications.map((item) => item.domain))], []);
  const years = useMemo(() => ["All", ...new Set(publications.map((item) => String(item.year)))], []);
  const types = ["All", "Journal", "Conference"];

  const filteredPublications = useMemo(() => {
    return publications.filter((item) => {
      const byDomain = domainFilter === "All" || item.domain === domainFilter;
      const byYear = yearFilter === "All" || String(item.year) === yearFilter;
      const byType = typeFilter === "All" || item.type === typeFilter;
      return byDomain && byYear && byType;
    });
  }, [domainFilter, typeFilter, yearFilter]);

  const validateAndSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<ContactForm> = {};

    if (form.name.trim().length < 2) nextErrors.name = "Please add your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email.";
    if (form.message.trim().length < 20) nextErrors.message = "Please provide more context in at least 20 characters.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("Please review the highlighted fields.");
      return;
    }

    setSubmitState("Message validated. Connect this form to your email backend before deployment.");
    setForm({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-white">
            Simar Singh Rayat
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#research" className="hover:text-blue-300">Publications</a>
            <a href="#experience" className="hover:text-blue-300">Experience</a>
            <a href="#projects" className="hover:text-blue-300">Projects</a>
            <a href="#patents" className="hover:text-blue-300">Patents</a>
            <a href="#awards" className="hover:text-blue-300">Awards</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="relative min-h-[94vh] overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.24),transparent_36%),radial-gradient(circle_at_86%_15%,rgba(56,189,248,0.14),transparent_36%),linear-gradient(180deg,#070b14_0%,#05070d_100%)]" />
          <motion.div
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute left-1/3 top-1/3 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute right-14 top-20 h-52 w-52 rounded-full bg-blue-600/15 blur-3xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_42%,transparent_85%)]" />

          <div className="relative mx-auto flex min-h-[94vh] max-w-7xl items-center px-6 py-20">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.18em] text-blue-200">Research Portfolio</p>
              <h1 className="mt-4 font-['Space_Grotesk'] text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
                Computer Science Engineering Student, Researcher, AI Enthusiast, Cybersecurity Researcher,
                Software Developer, and Technology Innovator.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300">{profile.summary}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  ["Research", "#research"],
                  ["Publications", "#research"],
                  ["Projects", "#projects"],
                  ["Resume", "https://drive.google.com/file/d/14IF45T0RJ6hEPe-ophgaOqt7NS2XMwTc/view"],
                  ["Contact", "#contact"],
                  ["GitHub", "https://github.com/SIMARSINGHRAYAT"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-blue-300/50 hover:bg-blue-500/10"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <motion.section {...reveal} id="research" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Research and Publications</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Verified publication records connected to Google Scholar, IEEE author profile, and indexed venues.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              aria-label="Filter by domain"
              className="rounded-lg border border-white/15 bg-[#0a1020] px-3 py-2 text-sm"
            >
              {domains.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              aria-label="Filter by year"
              className="rounded-lg border border-white/15 bg-[#0a1020] px-3 py-2 text-sm"
            >
              {years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              aria-label="Filter by type"
              className="rounded-lg border border-white/15 bg-[#0a1020] px-3 py-2 text-sm"
            >
              {types.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            {filteredPublications.map((paper, index) => (
              <article key={paper.title} className={`p-6 ${index !== 0 ? "border-t border-white/10" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="max-w-4xl text-lg font-semibold text-white">{paper.title}</h3>
                  <p className="text-xs uppercase tracking-[0.12em] text-blue-200">
                    {paper.type} | {paper.year}
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">{paper.venue}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{paper.abstract}</p>
                <p className="mt-3 text-xs text-slate-400">Co-authors: {paper.coAuthors}</p>
                <p className="mt-1 text-xs text-slate-400">Indexing: {paper.indexing.join(", ")}</p>
                <p className="mt-1 text-xs text-slate-400">Keywords: {paper.keywords.join(", ")}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {paper.links.map((item) => (
                    <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">
                      {item.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Lightbox modal for full-image view */}
        {lightbox ? (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={() => setLightbox(null)}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-md shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        ) : null}

        <motion.section {...reveal} id="experience" className="border-y border-white/10 bg-[#080d18]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Professional Experience</h2>
            <div className="mt-10 space-y-9 border-l border-blue-300/35 pl-6">
              {experiences.map((item) => (
                <article key={item.role} className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-blue-300" />
                  <p className="text-xs uppercase tracking-[0.14em] text-blue-200">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-slate-300">{item.org}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {item.highlights.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal} id="projects" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Projects</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Research-aligned software engineering work with deployment-focused methodology and measurable outcomes.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.objective}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-blue-200">Architecture</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="rounded border border-white/20 px-2 py-1">Ingestion</span>
                  <span>{"->"}</span>
                  <span className="rounded border border-white/20 px-2 py-1">Retrieval</span>
                  <span>{"->"}</span>
                  <span className="rounded border border-white/20 px-2 py-1">Reasoning</span>
                  <span>{"->"}</span>
                  <span className="rounded border border-white/20 px-2 py-1">API</span>
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Screenshots and implementation details can be reviewed through linked repositories and demos.
                </p>
                <p className="mt-4 text-sm text-slate-300">Methodology: {project.methodology.join(" ")}</p>
                <p className="mt-2 text-sm text-slate-300">Outcomes: {project.outcomes.join(" ")}</p>
                <p className="mt-2 text-sm text-slate-400">Challenges solved: {project.challenges.join(" ")}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md border border-white/15 px-2 py-1 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.repo} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-blue-300 hover:underline">
                  Open GitHub Repository
                </a>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} id="patents" className="border-y border-white/10 bg-[#080d18]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Patents and Innovations</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Granted design registrations displayed with certificate previews and filing metadata.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {patents.map((patent) => (
                <article key={patent.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  {!brokenPatentImages[patent.id] ? (
                    <img
                      src={patent.image}
                      alt={patent.imageAlt}
                      loading="lazy"
                      className="h-72 w-full cursor-pointer object-cover object-top"
                      onClick={() => setLightbox({ src: patent.image, alt: patent.imageAlt })}
                      onError={() => setBrokenPatentImages((prev) => ({ ...prev, [patent.id]: true }))}
                    />
                  ) : (
                    <div className="flex h-72 items-center justify-center border-b border-white/10 bg-[#0b1120] px-6 text-center text-sm text-slate-400">
                      Patent image not found. Add {patent.image} to show the granted certificate preview.
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">{patent.title}</h3>
                      <span className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                        {patent.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">{patent.summary}</p>
                    <p className="mt-3 text-xs text-slate-400">{patent.id}</p>
                    <p className="text-xs text-slate-400">Filed: {patent.filing}</p>
                    <p className="text-xs text-slate-400">Issued: {patent.issuedOn}</p>
                    <p className="text-xs text-slate-400">Use case: {patent.application}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal} id="awards" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Achievements and Awards</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {achievements.map((item: any) => (
                  <li key={item.text ?? item} className="flex items-start gap-3">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.imageAlt ?? item.text}
                        className="h-12 w-12 flex-shrink-0 cursor-pointer rounded-md object-cover"
                        onClick={() => setLightbox({ src: item.image!, alt: item.imageAlt ?? item.text })}
                      />
                    ) : null}
                    <span>- {item.text ?? item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold text-white">Awards</h3>
              <div className="mt-4 space-y-4">
                {awards.map((award) => (
                  <div key={award.title} className="border-l border-blue-300/40 pl-4">
                    <p className="text-sm font-medium text-white">{award.title}</p>
                    <p className="text-xs text-slate-400">
                      {award.issuer} | {award.year}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">{award.note}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </motion.section>

        <motion.section {...reveal} className="border-y border-white/10 bg-[#080d18]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Products and Software</h2>
            <div className="mt-6 space-y-4">
              {products.map((item, index) => (
                <article key={item.name} className={`py-4 ${index !== 0 ? "border-t border-white/10" : ""}`}>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">{item.notes}</p>
                  <p className="mt-2 text-xs text-slate-400">
                    {item.platform} | {item.release} | {item.compatibility}
                  </p>
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-blue-300 hover:underline">
                    Open Platform Profile
                  </a>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal} className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Research Interests</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest) => (
              <div key={interest} className="rounded-lg border border-white/10 px-4 py-3 text-sm text-slate-200">
                {interest}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} className="border-y border-white/10 bg-[#080d18]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Academic Profiles and Presence</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {profiles.map((item) => (
                <article key={item.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <h3 className="text-base font-semibold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-blue-300 hover:underline">
                    Visit Profile
                  </a>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal} className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Technical Content</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {videos.map((video) => (
              <article key={video.title} className="rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-blue-200">{video.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{video.title}</h3>
                <a href={video.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-blue-300 hover:underline">
                  Open YouTube Channel
                </a>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} id="contact" className="border-t border-white/10 bg-[#080d18]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">Contact</h2>
              <p className="mt-3 text-slate-300">
                Open to research collaborations, internships, software development projects, publications,
                conference opportunities, and technical discussions.
              </p>
              <div className="mt-6 space-y-2 text-sm text-slate-300">
                <p>
                  Email: <a href="mailto:rayatsimar@gmail.com" className="text-blue-300 hover:underline">rayatsimar@gmail.com</a>
                </p>
                <p>
                  LinkedIn: <a href="https://www.linkedin.com/in/simarsinghrayat" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">simarsinghrayat</a>
                </p>
                <p>
                  GitHub: <a href="https://github.com/SIMARSINGHRAYAT" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">SIMARSINGHRAYAT</a>
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/14IF45T0RJ6hEPe-ophgaOqt7NS2XMwTc/view"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-lg border border-blue-300/50 bg-blue-500/15 px-4 py-2.5 text-sm font-medium text-blue-100 hover:bg-blue-500/25"
              >
                Download Resume
              </a>
            </div>

            <form onSubmit={validateAndSubmit} noValidate className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <label htmlFor="name" className="text-sm text-slate-200">Full Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="mt-2 w-full rounded-lg border border-white/15 bg-[#0b1120] px-3 py-2 text-sm outline-none ring-blue-400/30 focus:ring"
              />
              {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name}</p>}

              <label htmlFor="email" className="mt-4 block text-sm text-slate-200">Email Address</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="mt-2 w-full rounded-lg border border-white/15 bg-[#0b1120] px-3 py-2 text-sm outline-none ring-blue-400/30 focus:ring"
              />
              {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email}</p>}

              <label htmlFor="message" className="mt-4 block text-sm text-slate-200">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="mt-2 w-full rounded-lg border border-white/15 bg-[#0b1120] px-3 py-2 text-sm outline-none ring-blue-400/30 focus:ring"
              />
              {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message}</p>}

              <button
                type="submit"
                className="mt-5 rounded-lg border border-blue-300/40 bg-blue-500/20 px-4 py-2.5 text-sm font-medium text-blue-100 hover:bg-blue-500/30"
              >
                Submit Inquiry
              </button>
              {submitState && <p className="mt-3 text-sm text-slate-300">{submitState}</p>}
            </form>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
