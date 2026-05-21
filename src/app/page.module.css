/* ── HERO ── */
.hero {
  position: relative;
  padding: 100px 0 80px;
  overflow: hidden;
  background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,255,136,0.07) 0%, transparent 60%);
}

.heroContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0;
}

.heroTitle {
  margin-top: 12px;
  margin-bottom: 20px;
  color: var(--text);
}

.heroAccent {
  color: var(--accent);
  display: block;
}

.heroSub {
  max-width: 560px;
  font-size: 17px;
  margin-bottom: 32px;
}

.heroBtns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 56px;
}

/* Terminal */
.terminal {
  width: 100%;
  max-width: 600px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 136, 0.08);
  text-align: left;
  font-family: var(--font-mono);
  font-size: 14px;
}

.termBar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: var(--bg-3);
  border-bottom: 1px solid var(--border-2);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.8;
}

.termTitle {
  font-size: 12px;
  color: var(--text-3);
  margin-left: 8px;
}

.termBody {
  padding: 20px 20px;
  line-height: 1.9;
  color: var(--text-2);
}

.kw  { color: #f472b6; }
.fn  { color: var(--blue); }
.str { color: var(--accent); }
.output { color: var(--accent); opacity: 0.9; }

.cursor {
  display: inline-block;
  animation: blink 1s step-end infinite;
}

/* ── STATS ── */
.statsSection {
  background: var(--bg-2);
  border-top: 1px solid var(--border-2);
  border-bottom: 1px solid var(--border-2);
  padding: 40px 0;
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
}

.statItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 24px 16px;
  position: relative;
}
.statItem + .statItem::before {
  content: '';
  position: absolute;
  left: 0;
  top: 20%;
  height: 60%;
  width: 1px;
  background: var(--border-2);
}

.statValue {
  font-family: var(--font-mono);
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}

.statLabel {
  font-size: 13px;
  color: var(--text-3);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── FEATURES ── */
.featuresGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.featureCard {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.featureIcon {
  font-size: 36px;
  margin-bottom: 4px;
}

.featureTitle {
  color: var(--text);
  font-size: 1.15rem;
  margin-top: 4px;
}

.featureDesc {
  font-size: 14px;
  flex: 1;
}

.featureLink {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  font-weight: 600;
  margin-top: 8px;
  transition: gap 0.15s;
  display: inline-block;
}
.featureLink:hover { opacity: 0.8; }

/* ── HOW IT WORKS ── */
.howSection {
  background: var(--bg-2);
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  position: relative;
}

.step {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stepNumber {
  font-family: var(--font-mono);
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent);
  opacity: 0.3;
  line-height: 1;
}

.stepLine {
  display: none;
}

.stepContent h3 {
  color: var(--text);
  margin-bottom: 8px;
}

.stepContent p {
  font-size: 14px;
}

/* ── CTA BANNER ── */
.ctaBanner {
  position: relative;
  padding: 80px 0;
  text-align: center;
  background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,255,136,0.06) 0%, transparent 70%);
  border-top: 1px solid var(--border-2);
  overflow: hidden;
}

.ctaTitle {
  margin-bottom: 12px;
  background: linear-gradient(135deg, var(--text), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ctaText {
  margin-bottom: 32px;
  font-size: 16px;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .statsGrid { grid-template-columns: repeat(2, 1fr); }
  .statItem + .statItem::before { display: none; }
  .featuresGrid { grid-template-columns: 1fr; }
  .steps { grid-template-columns: 1fr; }
  .heroBtns { flex-direction: column; align-items: center; }
}
