import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/lib/projects";
import { Recommender } from "@/components/Recommender";
import resume from "@/assets/resume.pdf.asset.json";
import portrait from "@/assets/Professional Office Headshot with Warm Lighting.png";

const title = "Atharva Sanjay Raut — Business Intelligence & Marketing Analytics";
const desc = "Bridging business, technology & marketing through data. BI & analytics professional pursuing an MMS in Marketing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
    ],
  }),
  component: Index,
});

const nav = ["About", "Experience", "Projects", "Skills", "Education", "Leadership", "Contact"];



const skills: Record<string, string[]> = {
  "BI & Visualisation": ["Power BI", "Tableau", "Excel", "Power Query", "DAX", "M Query", "Data Modelling", "LOD Expressions", "Table Calculations", "Dashboard Development", "Data Blending"],
  "Data & Programming": ["SQL", "Python", "Google BigQuery", "Microsoft SQL Server", "Data Validation", "Data Analysis"],
  "Marketing & Business Tech": ["HubSpot", "PowerApps", "PowerPages", "Bubble.io", "Marketing Analytics", "Sales Analytics", "CRM Analytics", "Market Research"],
  "Business & Analytical": ["Requirement Gathering", "Stakeholder Management", "Client Communication", "Business Research", "Market Sizing", "Demand Forecasting", "Problem Solving", "Process Analysis", "Data-driven Decisions"],
};

const Section = ({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl px-6 py-24">
    <p className="text-sm uppercase tracking-[0.2em] text-primary">{kicker}</p>
    <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{title}</h2>
    <div className="mt-12">{children}</div>
  </section>
);

const Chip = ({ t }: { t: string }) => <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">{t}</span>;

function Bars() {
  const v = [40, 65, 52, 80, 70, 92, 60];
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="flex h-24 items-end gap-2">{v.map((h, i) => <div key={i} className="flex-1 rounded-t bg-primary/70" style={{ height: `${h}%` }} />)}</div>
      <p className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">Illustrative sample data — not a client deliverable</p>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const btn = "rounded-full px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5";
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display font-semibold">ASR<span className="text-primary">.</span></a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">{nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-primary">{n}</a>)}</nav>
        </div>
      </header>

      <section id="top" className="glow">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary" />Business Intelligence | Marketing Analytics | MarTech</p>
            <p className="mt-6 text-sm tracking-[0.3em] text-primary">ATHARVA SANJAY RAUT</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">Turning Data Into Decisions. <span className="text-muted-foreground">Connecting Technology With Business.</span></h1>
            <p className="mt-6 max-w-xl text-muted-foreground">I'm a Business Intelligence and Analytics professional with approximately 2 years of experience building data-driven solutions, developing BI dashboards, and translating complex business requirements into actionable insights. Currently pursuing an MMS in Marketing, I'm exploring the intersection of analytics, technology, customer behaviour, and marketing strategy.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={`${btn} bg-primary text-primary-foreground`}>Explore My Work</a>
              <a href="#experience" className={`${btn} border border-border`}>View My Experience</a>
              <a href={resume.url} download="Atharva_Raut_Resume.pdf" target="_blank" rel="noreferrer" className={`${btn} border border-border`}>Download Resume</a>
            </div>
          </div>
          <div className="relative mx-auto w-72 md:w-80">
            <img src={portrait} alt="Atharva Sanjay Raut" className="float aspect-[4/5] w-full rounded-2xl border border-border object-cover" />
            {["Data", "Business", "Technology", "Marketing", "Customers"].map((t, i) => (
              <span key={t} className="absolute rounded-full border border-primary/40 bg-card/90 px-3 py-1 text-xs text-primary backdrop-blur" style={{ top: `${8 + i * 20}%`, [i % 2 ? "right" : "left"]: "-14%" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <Section id="about" kicker="About" title="Beyond Dashboards. Understanding Business.">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-muted-foreground">
            <p>My professional journey began with Mechanical Engineering, but my interest gradually shifted towards technology, data, and business intelligence.</p>
            <p>Over the past two years, I have worked as an Associate Analyst, contributing to multiple analytics projects across different business functions — developing BI solutions, working with international clients, understanding requirements, validating data, and translating complex information into meaningful insights.</p>
            <p>Working closely with stakeholders, I realised that data is valuable only when it helps organisations make better decisions. This motivated me to pursue an MMS in Marketing at Welingkar Institute of Management, Mumbai.</p>
            <p>Today, I aim to combine my technical background with marketing knowledge at the intersection of Business Intelligence, Customer Analytics, Product Analytics, and Marketing Technology.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["2 Years", "BI & Analytics Experience"], ["Engineering", "Mechanical Background"], ["MMS", "Marketing Specialisation"], ["Multiple", "BI & Analytics Projects"]].map(([a, b]) => (
              <div key={a} className="rounded-xl border border-border bg-card p-5"><p className="font-display text-2xl text-primary">{a}</p><p className="mt-1 text-sm text-muted-foreground">{b}</p></div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" kicker="Experience" title="Where Data Met Business Problems.">
        <div className="space-y-10 border-l border-border pl-8">
          <div className="relative"><span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-primary" />
            <h3 className="text-xl font-semibold">Associate Analyst — Business Intelligence & Analytics</h3><p className="text-sm text-primary">~2 years</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-muted-foreground">
              {["Client-facing analytics and BI projects across business functions", "Gathered requirements from international clients and translated them into technical specs", "Built interactive dashboards in Power BI and Tableau", "Worked with SQL, BigQuery, Excel and other sources", "Data validation and troubleshooting to improve reporting accuracy", "Collaborated with internal dev teams to deliver BI solutions", "Ran knowledge-sharing sessions for new joiners", "Explored no-code / low-code platforms for reporting and operations"].map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
          <div className="relative"><span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-primary" />
            <h3 className="text-xl font-semibold">Hitech Group — Business Research & Analytics Intern</h3><p className="text-sm text-primary">Rigid Plastic Packaging</p>
            <p className="mt-4 text-muted-foreground">Industry research and analytics on the impact of crude oil volatility on the packaging industry — resin markets, demand forecasting, Power BI industry dashboards, TAM-SAM-SOM market sizing and company research.</p>
          </div>
        </div>
      </Section>

      <Section id="projects" kicker="Featured Projects" title="Work That Connects Data With Decisions.">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article id={`p${i}`} key={p.name} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50">
              <p className="text-xs uppercase tracking-wider text-primary">{p.tag}</p>
              <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground"><b className="text-foreground">Problem:</b> {p.problem}</p>
              {open === i && (
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <p><b className="text-foreground">Contribution:</b> {p.work}</p>
                  <p><b className="text-foreground">Business value:</b> {p.value}</p>
                  <Bars />
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t} t={t} />)}</div>
              <button onClick={() => setOpen(open === i ? null : i)} className="mt-5 text-sm font-medium text-primary">{open === i ? "Close" : "View Project →"}</button>
            </article>
          ))}
        </div>
        <Recommender onOpen={(i) => { setOpen(i); document.getElementById(`p${i}`)?.scrollIntoView({ behavior: "smooth" }); }} />
      </Section>

      <Section id="skills" kicker="Skills" title="Toolkit.">
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold">{k}</h3><div className="mt-4 flex flex-wrap gap-2">{v.map((t) => <Chip key={t} t={t} />)}</div></div>
          ))}
        </div>
      </Section>

      <Section id="education" kicker="Education" title="From Engineering to Marketing.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6"><p className="text-sm text-primary">2025–2027</p><h3 className="mt-1 text-lg font-semibold">Welingkar Institute of Management, Mumbai</h3><p className="text-muted-foreground">MMS — Marketing</p><div className="mt-4 flex flex-wrap gap-2">{["Marketing Strategy", "Digital Marketing", "Sales Management", "Consumer Behaviour", "MarTech", "Business Analytics"].map((t) => <Chip key={t} t={t} />)}</div></div>
          <div className="rounded-2xl border border-border bg-card p-6"><p className="text-sm text-primary">2018–2022</p><h3 className="mt-1 text-lg font-semibold">Government College of Engineering and Research, Awasari</h3><p className="text-muted-foreground">B.E. — Mechanical Engineering</p></div>
        </div>
      </Section>

      <Section id="leadership" kicker="Leadership" title="Beyond the Workplace.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold">Cultural Secretary</h3><p className="mt-2 text-sm text-muted-foreground">Two years in the department; grew participation in cultural activities from a very low starting level.</p></div>
          <div className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold">Management Committee — Welingkar</h3><p className="mt-2 text-sm text-muted-foreground">Building class connections, GD prep for freshers, and English communication confidence.</p></div>
          <div className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold">Interests</h3><div className="mt-3 flex flex-wrap gap-2">{["Chess", "Piano", "Singing", "Table Tennis", "Swimming"].map((t) => <Chip key={t} t={t} />)}</div></div>
        </div>
      </Section>

      <Section id="contact" kicker="Contact" title="Let's Talk Data & Decisions.">
        <form className="grid max-w-xl gap-4" onSubmit={(e) => { e.preventDefault(); const f = new FormData(e.currentTarget); location.href = `mailto:atharvaraut1600@gmail.com?subject=${encodeURIComponent(`Hello from ${f.get("name")}`)}&body=${encodeURIComponent(String(f.get("msg")))}`; }}>
          <input name="name" required placeholder="Your name" className="rounded-lg border border-border bg-card px-4 py-3" />
          <textarea name="msg" required rows={4} placeholder="Message" className="rounded-lg border border-border bg-card px-4 py-3" />
          <button className={`${btn} w-fit bg-primary text-primary-foreground`}>Send Message</button>
        </form>
      </Section>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© 2026 Atharva Sanjay Raut</footer>
    </main>
  );
}
