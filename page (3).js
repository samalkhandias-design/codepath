@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --bg:        #080b10;
  --bg-2:      #0d1117;
  --bg-3:      #111827;
  --surface:   #161d2e;
  --surface-2: #1e2a3e;
  --border:    rgba(0, 255, 136, 0.15);
  --border-2:  rgba(255, 255, 255, 0.07);

  --accent:    #00ff88;
  --accent-dim:#00cc6a;
  --accent-bg: rgba(0, 255, 136, 0.08);
  --purple:    #a78bfa;
  --blue:      #38bdf8;
  --orange:    #fb923c;
  --red:       #f87171;

  --text:      #e2e8f0;
  --text-2:    #94a3b8;
  --text-3:    #475569;

  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
  --font-sans: 'DM Sans', system-ui, sans-serif;

  --radius:    8px;
  --radius-lg: 16px;
  --shadow:    0 4px 24px rgba(0,0,0,0.5);
  --glow:      0 0 24px rgba(0, 255, 136, 0.2);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--surface-2); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent-dim); }

/* ── Selection ── */
::selection {
  background: var(--accent);
  color: var(--bg);
}

/* ── Typography ── */
h1, h2, h3, h4 {
  font-family: var(--font-mono);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h1 { font-size: clamp(2.4rem, 5vw, 4rem); }
h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); }
h3 { font-size: 1.3rem; }

p { color: var(--text-2); line-height: 1.75; }

a { color: var(--accent); text-decoration: none; transition: opacity 0.2s; }
a:hover { opacity: 0.8; }

/* ── Layout utilities ── */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 80px 0;
}

/* ── Accent tag ── */
.label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--border);
  padding: 4px 12px;
  border-radius: 999px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

/* ── Buttons ── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: var(--accent);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  text-decoration: none;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow);
  opacity: 1;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  background: transparent;
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  border: 1px solid var(--border-2);
  border-radius: var(--radius);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  text-decoration: none;
}
.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
  opacity: 1;
}

/* ── Cards ── */
.card {
  background: var(--surface);
  border: 1px solid var(--border-2);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: border-color 0.2s, transform 0.2s;
}
.card:hover {
  border-color: var(--border);
  transform: translateY(-3px);
}

/* ── Decorative grid bg ── */
.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

/* ── Tag badge ── */
.tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
}
.tag-green  { background: rgba(0,255,136,0.1);  color: var(--accent);  border: 1px solid rgba(0,255,136,0.25); }
.tag-purple { background: rgba(167,139,250,0.1); color: var(--purple);  border: 1px solid rgba(167,139,250,0.25); }
.tag-blue   { background: rgba(56,189,248,0.1);  color: var(--blue);    border: 1px solid rgba(56,189,248,0.25); }
.tag-orange { background: rgba(251,146,60,0.1);  color: var(--orange);  border: 1px solid rgba(251,146,60,0.25); }

/* ── Section heading ── */
.section-heading {
  text-align: center;
  margin-bottom: 56px;
}
.section-heading h2 {
  margin-bottom: 12px;
  background: linear-gradient(135deg, var(--text) 40%, var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.section-heading p {
  max-width: 500px;
  margin: 0 auto;
  font-size: 16px;
}

/* ── Divider ── */
.divider {
  border: none;
  border-top: 1px solid var(--border-2);
  margin: 0;
}

/* ── Animations ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 12px rgba(0,255,136,0.2); }
  50%       { box-shadow: 0 0 32px rgba(0,255,136,0.5); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

.fade-up { animation: fadeUp 0.6s ease both; }
.fade-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
.fade-up-2 { animation: fadeUp 0.6s 0.2s ease both; }
.fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
.fade-up-4 { animation: fadeUp 0.6s 0.4s ease both; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .section { padding: 56px 0; }
  .container { padding: 0 16px; }
}
