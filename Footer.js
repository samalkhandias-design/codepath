.footer {
  background: var(--bg-2);
  border-top: 1px solid var(--border-2);
  padding-top: 60px;
}

.inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 48px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.sym {
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
}
.name {
  font-family: var(--font-mono);
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
}
.tagline {
  font-size: 14px;
  color: var(--text-3);
  line-height: 1.6;
  max-width: 240px;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.colTitle {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}
.col a {
  font-size: 14px;
  color: var(--text-2);
  text-decoration: none;
  transition: color 0.15s;
}
.col a:hover { color: var(--accent); opacity: 1; }

.bottom {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--text-3);
  font-family: var(--font-mono);
}

.heart { color: #f87171; }
.made { display: flex; align-items: center; gap: 4px; }

@media (max-width: 768px) {
  .inner {
    grid-template-columns: 1fr 1fr;
  }
  .brand { grid-column: 1 / -1; }
  .bottom { flex-direction: column; gap: 6px; text-align: center; }
}
