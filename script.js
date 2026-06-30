*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #F5F1E6;
  --ink: #16140F;
  --paper: #FFFFFF;
  --green: #1B7A3D;
  --green-light: #BFE6A8;
  --orange: #E8431C;
  --blue: #1A3FA0;
  --yellow: #F2B705;
  --brown: #6B4226;
  --muted: #6b665c;
  --border: rgba(22,20,15,0.1);
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.65;
  overflow-x: hidden;
}

h1, h2, h3, .nav-logo, .hero-tag, .btn-primary, .btn-ghost, .section-label, .skill-group-title,
.project-year, .banner span, .cert-item strong, .exp-table th, .contact-link {
  font-family: 'Space Grotesk', sans-serif;
}

.fade-in { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.1rem 3rem;
  background: rgba(245,241,230,0.9);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid var(--ink);
}

.nav-logo {
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--green);
  text-decoration: none;
}

.nav-links { display: flex; align-items: center; gap: 1.75rem; list-style: none; }

.nav-links a {
  text-decoration: none;
  color: var(--ink);
  font-size: 0.88rem;
  font-weight: 500;
}

.nav-links a:not(.nav-cta):hover { color: var(--orange); }

.nav-cta {
  background: var(--ink);
  color: var(--bg) !important;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-family: 'Space Grotesk', sans-serif;
}
.nav-cta:hover { background: var(--orange) !important; }

/* ── HERO ── */
#hero {
  padding: 7.5rem 3rem 4rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2.5rem;
  align-items: stretch;
}

.hero-card {
  background: var(--paper);
  border: 3px solid var(--ink);
  border-radius: 18px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;
}

.hero-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.hero-tag {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 0.35rem 0.85rem;
  border-radius: 100px;
}

.hero-sun { width: 38px; height: 38px; color: var(--yellow); animation: spin 16s linear infinite; }
.hero-sun.small { width: 30px; height: 30px; margin-bottom: 0.5rem; }
.hero-sun svg { width: 100%; height: 100%; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

#hero h1 {
  font-size: clamp(3.2rem, 7vw, 5.5rem);
  font-weight: 700;
  color: var(--green);
  line-height: 0.95;
  letter-spacing: -0.01em;
  margin: 1.5rem 0 0.5rem;
}

.hero-role {
  font-size: 1rem;
  color: var(--muted);
  font-weight: 500;
}

.hero-shapes {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 26px;
  display: flex;
}
.shape { flex: 1; height: 100%; }
.shape-yellow { background: var(--yellow); }
.shape-blue { background: var(--blue); }
.shape-orange { background: var(--orange); border-radius: 100% 0 0 0 / 100% 0 0 0; }

.hero-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.75rem;
}

.hero-desc { font-size: 1.02rem; color: var(--ink); line-height: 1.8; }

.hero-cta { display: flex; gap: 0.9rem; flex-wrap: wrap; }

.btn-primary {
  padding: 0.85rem 1.6rem;
  background: var(--green);
  color: #fff;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  border-radius: 100px;
  border: 2px solid var(--ink);
  transition: transform 0.15s ease;
}
.btn-primary:hover { transform: translateY(-2px); }

.btn-ghost {
  padding: 0.85rem 1.6rem;
  border: 2px solid var(--ink);
  color: var(--ink);
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  border-radius: 100px;
  transition: background 0.15s ease, color 0.15s ease;
}
.btn-ghost:hover { background: var(--ink); color: var(--bg); }

/* ── SECTION SHARED ── */
section { padding: 5rem 3rem; }

.section-label {
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--orange);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

h2 {
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 2.5rem;
  color: var(--ink);
}

/* ── ABOUT ── */
.about-section { padding-top: 1rem; }

.about-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 0;
  border: 3px solid var(--ink);
  border-radius: 18px;
  overflow: hidden;
  background: var(--paper);
}

.about-photo {
  background: var(--brown);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  min-height: 320px;
  background-image: linear-gradient(160deg, var(--brown) 0%, #4a2c18 100%);
}

.about-photo-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--yellow);
}

.about-copy { padding: 2.75rem; }

.about-copy p { color: var(--ink); font-size: 0.97rem; line-height: 1.85; margin-bottom: 1.1rem; }
.about-copy p strong { color: var(--green); font-weight: 600; }

.about-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.75rem;
}

.fact {
  border-left: 3px solid var(--orange);
  padding-left: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.fact strong { font-size: 0.82rem; color: var(--ink); font-weight: 700; }
.fact span { font-size: 0.82rem; color: var(--muted); }

/* ── SKILLS ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.25rem;
}

.skill-group {
  background: var(--paper);
  border: 2px solid var(--ink);
  border-radius: 14px;
  padding: 1.5rem;
}

.skill-group-title {
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink);
  font-weight: 700;
  margin-bottom: 1rem;
}

.skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.tag {
  padding: 0.32rem 0.8rem;
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--ink);
  border: 1.5px solid var(--ink);
}
.tag-green { background: var(--green-light); }
.tag-blue { background: #C9D6F2; }
.tag-yellow { background: #FBE3A1; }
.tag-orange { background: #F7C3B0; }

/* ── BANNERS ── */
.banner {
  margin: 0 3rem;
  border-radius: 18px;
  border: 3px solid var(--ink);
  padding: 3.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.banner span {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  background: var(--paper);
  padding: 0.5rem 1.75rem;
  border-radius: 100px;
  border: 2px solid var(--ink);
}

.banner-orange { background: var(--orange); color: #fff; }

.banner-stripes {
  background-image: repeating-linear-gradient(90deg, var(--green) 0 18px, var(--green-light) 18px 36px);
}
.banner-stripes span { color: var(--green); }

/* ── PROJECTS ── */
.projects-section { padding-top: 3rem; }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--paper);
  border: 2.5px solid var(--ink);
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.15s ease;
}
.project-card:hover { transform: translateY(-4px); }

.project-card-dark { background: var(--green); color: #fff; }
.project-card-dark h3, .project-card-dark .project-year { color: #fff; }
.project-card-dark p { color: rgba(255,255,255,0.88); }
.project-card-dark .stack-tag { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.4); color: #fff; }
.project-card-dark .project-spark { color: var(--yellow); }

.project-card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }

.project-year { font-size: 0.8rem; font-weight: 700; color: var(--orange); }

.project-spark { width: 22px; height: 22px; color: var(--orange); }
.project-spark svg { width: 100%; height: 100%; }

.project-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.project-card p { font-size: 0.9rem; line-height: 1.8; margin-bottom: 1.25rem; color: var(--muted); }

.project-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.stack-tag {
  padding: 0.22rem 0.65rem;
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--ink);
}

/* ── EXPERIENCE ── */
.exp-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2.5rem;
  border: 2.5px solid var(--ink);
  border-radius: 14px;
  overflow: hidden;
}

.exp-table thead { background: var(--ink); }
.exp-table th {
  text-align: left;
  color: var(--bg);
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.85rem 1.25rem;
  font-weight: 700;
}

.exp-table td {
  padding: 0.95rem 1.25rem;
  font-size: 0.92rem;
  border-top: 1px solid var(--border);
  background: var(--paper);
}
.exp-table tr:nth-child(even) td { background: #FBF8F0; }

.muted-note { color: var(--muted); font-size: 0.82rem; }

.exp-detail {
  background: var(--green-light);
  border: 2px solid var(--ink);
  border-radius: 14px;
  padding: 2rem 2.25rem;
}
.exp-detail h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; margin-bottom: 0.75rem; }
.exp-detail p { font-size: 0.92rem; line-height: 1.8; color: var(--ink); }

/* ── CERTIFICATIONS ── */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.1rem;
}

.cert-item {
  background: var(--paper);
  border: 2px solid var(--ink);
  border-radius: 14px;
  padding: 1.15rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border-left: 5px solid var(--orange);
}
.cert-item strong { font-family: 'Space Grotesk', sans-serif; font-size: 0.95rem; font-weight: 700; }
.cert-item span { color: var(--muted); font-size: 0.8rem; }

/* ── CONTACT ── */
#contact { padding-bottom: 4rem; }

.contact-card {
  background: var(--blue);
  color: #fff;
  border-radius: 20px;
  border: 3px solid var(--ink);
  padding: 3.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.contact-text h2 { color: #fff; margin-bottom: 0.5rem; }
.contact-text p { color: rgba(255,255,255,0.85); font-size: 0.97rem; }

.contact-links { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.3rem;
  background: #fff;
  color: var(--ink);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 100px;
  border: 2px solid var(--ink);
  transition: background 0.15s ease;
}
.contact-link:hover { background: var(--yellow); }

/* ── FOOTER ── */
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  border-top: 2px solid var(--ink);
  font-size: 0.78rem;
  color: var(--muted);
}

.easter-egg-trigger {
  cursor: default;
  user-select: none;
  opacity: 0.4;
  transition: opacity 0.2s, color 0.2s;
  font-size: 1rem;
}
.easter-egg-trigger:hover { opacity: 1; color: var(--orange); cursor: pointer; }

/* ── TTT MODAL ── */
.ttt-overlay {
  position: fixed; inset: 0;
  background: rgba(22,20,15,0.6);
  backdrop-filter: blur(6px);
  z-index: 200;
  display: flex; align-items: center; justify-content: center;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.ttt-modal {
  background: var(--paper);
  border: 3px solid var(--ink);
  border-radius: 16px;
  padding: 2.5rem;
  width: 340px;
  position: relative;
  animation: slideUp 0.25s ease;
}
@keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

.ttt-close {
  position: absolute; top: 1rem; right: 1rem;
  background: none; border: none; color: var(--muted);
  font-size: 0.9rem; cursor: pointer; transition: color 0.2s;
}
.ttt-close:hover { color: var(--ink); }

.ttt-header { margin-bottom: 1.25rem; }
.ttt-eyebrow {
  font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--orange); display: block; margin-bottom: 0.3rem; font-weight: 700;
}
.ttt-modal h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 700; }

.ttt-status { font-size: 0.82rem; color: var(--muted); margin-bottom: 1.25rem; min-height: 1.2em; }

.ttt-board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 1.5rem; }
.ttt-cell {
  aspect-ratio: 1; background: var(--bg);
  border: 2px solid var(--ink); border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; font-weight: 700;
  cursor: pointer; transition: background 0.15s; color: var(--ink);
}
.ttt-cell:hover:not(.taken) { background: var(--green-light); }
.ttt-cell.taken { cursor: default; }
.ttt-cell.x-mark { color: var(--green); }
.ttt-cell.o-mark { color: var(--orange); }
.ttt-cell.win-cell { background: var(--yellow); }

.ttt-reset {
  width: 100%; padding: 0.65rem;
  background: var(--ink); border: 2px solid var(--ink); color: var(--bg);
  font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 700;
  border-radius: 100px; cursor: pointer; transition: opacity 0.2s;
}
.ttt-reset:hover { opacity: 0.85; }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  #hero { grid-template-columns: 1fr; }
  .about-card { grid-template-columns: 1fr; }
  .about-photo { min-height: 160px; align-items: center; }
}

@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { gap: 0.85rem; }
  .nav-links a { font-size: 0.72rem; }
  #hero { padding: 6rem 1.5rem 3rem; }
  section { padding: 3.5rem 1.5rem; }
  .banner { margin: 0 1.5rem; }
  .about-copy { padding: 1.75rem; }
  .contact-card { padding: 2rem; flex-direction: column; align-items: flex-start; }
  footer { padding: 1.25rem 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }
}
