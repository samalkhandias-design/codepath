import Link from 'next/link';
import styles from './page.module.css';

/* ── DATA ── */
const features = [
  {
    icon: '🐍',
    title: 'Python с нуля',
    desc: 'От переменных до ООП и веб-скрапинга. Идеально для первого языка.',
    tag: 'Начинающим',
    color: 'tag-green',
  },
  {
    icon: '🌐',
    title: 'Веб-разработка',
    desc: 'HTML, CSS, JavaScript. Создавай настоящие сайты уже с первых уроков.',
    tag: 'Популярно',
    color: 'tag-blue',
  },
  {
    icon: '🔐',
    title: 'Кибербезопасность',
    desc: 'Основы защиты систем, сетей и данных. Этичный хакинг для начинающих.',
    tag: 'Новинка',
    color: 'tag-purple',
  },
  {
    icon: '⚛️',
    title: 'React & Next.js',
    desc: 'Современный фронтенд: компоненты, хуки, роутинг, деплой на Vercel.',
    tag: 'Продвинутым',
    color: 'tag-orange',
  },
];

const stats = [
  { value: '12+',  label: 'Курсов' },
  { value: '200+', label: 'Уроков' },
  { value: '1.5K', label: 'Студентов' },
  { value: '95%',  label: 'Завершают курс' },
];

const steps = [
  { n: '01', title: 'Выбери курс', desc: 'Определи свою цель: сайты, автоматизация, безопасность или мобильные приложения.' },
  { n: '02', title: 'Учись практически', desc: 'Каждый урок — теория + задание. Решаешь реальные задачи, а не просто читаешь.' },
  { n: '03', title: 'Собери портфолио', desc: 'После курса у тебя есть готовые проекты, которые можно показать работодателю.' },
];

export const metadata = {
  title: 'CodePath — Учись программированию',
};

/* ── PAGE ── */
export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="grid-bg" />
        <div className={`container ${styles.heroContent}`}>
          <div className={`label fade-up`}>🚀 Платформа для будущих разработчиков</div>
          <h1 className={`fade-up-1 ${styles.heroTitle}`}>
            Научись программировать.<br />
            <span className={styles.heroAccent}>Построй карьеру в IT.</span>
          </h1>
          <p className={`fade-up-2 ${styles.heroSub}`}>
            Структурированные курсы на русском языке. Python, JavaScript, веб-разработка,
            кибербезопасность — выбери своё направление и начни сегодня.
          </p>
          <div className={`fade-up-3 ${styles.heroBtns}`}>
            <Link href="/courses" className="btn-primary">Смотреть курсы →</Link>
            <Link href="/about"   className="btn-ghost">Узнать больше</Link>
          </div>

          {/* Terminal mockup */}
          <div className={`fade-up-4 ${styles.terminal}`}>
            <div className={styles.termBar}>
              <span className={styles.dot} style={{ background: '#f87171' }} />
              <span className={styles.dot} style={{ background: '#fb923c' }} />
              <span className={styles.dot} style={{ background: '#4ade80' }} />
              <span className={styles.termTitle}>python — main.py</span>
            </div>
            <div className={styles.termBody}>
              <div><span className={styles.kw}>def</span> <span className={styles.fn}>hello_world</span>():</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.fn}>print</span>(<span className={styles.str}>"Привет, будущий разработчик!"</span>)</div>
              <div>&nbsp;</div>
              <div><span className={styles.fn}>hello_world</span>()</div>
              <div>&nbsp;</div>
              <div className={styles.output}>▶ Привет, будущий разработчик!<span className={styles.cursor}>█</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map(s => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="label">Направления</div>
            <h2>Что ты будешь изучать</h2>
            <p>Выбери направление и двигайся от нуля к первой работе в IT.</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map(f => (
              <div key={f.title} className={`card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <span className={`tag ${f.color}`}>{f.tag}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
                <Link href="/courses" className={styles.featureLink}>
                  Смотреть курс →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`section ${styles.howSection}`}>
        <div className="container">
          <div className="section-heading">
            <div className="label">Как это работает</div>
            <h2>Три шага к первой работе</h2>
          </div>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepNumber}>{s.n}</div>
                {i < steps.length - 1 && <div className={styles.stepLine} />}
                <div className={styles.stepContent}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className="grid-bg" />
        <div className="container">
          <h2 className={styles.ctaTitle}>Готов начать?</h2>
          <p className={styles.ctaText}>
            Регистрация не нужна. Просто выбери курс и начни учиться прямо сейчас.
          </p>
          <Link href="/courses" className="btn-primary">
            Перейти к курсам →
          </Link>
        </div>
      </section>
    </>
  );
}
