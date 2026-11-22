# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Recruiters and engineering hiring teams evaluating Shahnawaz for AI/ML, software engineering, software development, or DevOps roles. (Confirmed)
- Research collaborators and academic or applied-research peers evaluating his publications and methods. (Confirmed; user reports an existing ResearchGate profile.)
- Both audiences arrive with limited time and need to reach proof of skill quickly. (Inferred from the stated hiring and collaboration goals.)

## Product Purpose

A personal portfolio that turns engineering projects, production ML work, and published research into evidence a recruiter or collaborator can act on. Success is interview and collaboration enquiries. (Success inferred from stated audience and purpose; no metrics supplied.)

## Positioning

A research-to-production portfolio: applied AI/ML systems with deployment evidence (edge inference, quantization, low-latency APIs) alongside peer-reviewed/preprint research on pruning and concept drift. (Derived from details.txt content and confirmed audience.)

## Operating Context

- The site is a Vite + React single-page application deployed as a static bundle with SPA rewrites; deep links must keep working.
- Two routes are consumed by a mobile app's OAuth flow as a formality: `/app/attendance-and-labour/privacy-policy` and `/app/attendance-and-labour/terms-and-conditions`. They are reached directly by URL and have no interface buttons. Their content must remain unchanged.
- The site must keep the existing project directory structure.
- `details.txt` is the factual source for biography, skills, projects, experience, research, and education.
- The user will add per-project GitHub repository URLs later; no project-level repository URLs exist in `details.txt` today. A profile URL does exist.
- The user has a ResearchGate profile but has not supplied its URL.
- More papers and collaborative research are expected to be added over time, including during M.Tech study.

## Capabilities and Constraints

- Confirmed contact facts from `details.txt`: name Shahnawaz Alam, email `shahnawaz.alam1024@gmail.com`, phone `+91 9849575681`, LinkedIn and GitHub profile URLs, downloadable resume asset.
- Confirmed project subjects from `details.txt`: Plant Pathology, ResumeForge, AI Research Agent, Medical Q&A LLM, Dr.AI, plus existing MedInsight screen assets.
- Confirmed research from `details.txt`: two 2026 arXiv preprints with IDs `2601.02353` and `2601.08928`.
- Confirmed experience, education, and technical-skill inventory are in `details.txt`.
- Undecided/unknown: exact ResearchGate URL; per-project GitHub repository URLs; exact URLs for any Hugging Face model; whether the Events section should have real content.
- Do not fabricate testimonials, clients, metrics, repository URLs, or publication links beyond the identifiers supplied.
- No analytics, CMS, backend, or authentication belongs in this portfolio.

## Brand Commitments

- Name: Shahnawaz Alam. Voice: technically precise, formal, evidence-led; no hype or inflated claims.
- User requested a professional and aesthetic redesign with a new theme, new fonts, and a more formal colour palette, while keeping the existing directory structure. (Confirmed binding direction.)
- Existing project facts and the two legal pages are preserved. (Confirmed binding constraint.)

## Evidence on Hand

- `details.txt`: resume with summary, skills, five projects, three roles, two research papers, and education.
- `src/assets/photos/`: profile portrait, MedInsight screenshots, Dr.AI screenshot, unused alternate portrait.
- `src/assets/resume (1).pdf`: downloadable resume.
- `public/favicon.png`: current favicon.
- Existing rendered implementation in `src/` as incumbent evidence, not as the replacement visual authority.

## Product Principles

1. Evidence over adjectives: every claim is traceable to a project, paper, role, or supplied asset.
2. Two-audience legibility: engineering depth and research credibility must both be reachable in a few seconds.
3. Production thinking: show deployment constraints, latency, compression, and reproducibility, not just model names.
4. Extensibility: new papers, projects, and repository links must be addable in one obvious place without restructuring pages.
5. Constraint fidelity: preserve factual copy, routes, directory structure, and legal-page content exactly.

## Accessibility & Inclusion

No product-specific accessibility standard was stated. (Inferred default: the delivered web UI should remain keyboard navigable and readable at mobile widths.)
