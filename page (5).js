'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const COURSES = [
  {
    id: 1,
    icon: '🐍',
    title: 'Python: Полный курс',
    desc: 'От Hello World до создания веб-приложений. Разберёшь синтаксис, ООП, работу с файлами и базами данных.',
    level: 'С нуля',
    levelColor: 'tag-green',
    lessons: 42,
    hours: 18,
    tags: ['Python', 'ООП', 'Файлы'],
    cat: 'python',
  },
  {
    id: 2,
    icon: '🌐',
    title: 'HTML & CSS: Основы',
    desc: 'Создавай красивые адаптивные страницы с нуля. Флексбоксы, гриды, анимации и мобильная верстка.',
    level: 'С нуля',
    levelColor: 'tag-green',
    lessons: 28,
    hours: 10,
    tags: ['HTML', 'CSS', 'Flexbox'],
    cat: 'web',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'JavaScript: Интерактивный веб',
    desc: 'DOM, события, fetch, промисы и ES6+. После курса сможешь делать живые интерактивные страницы.',
    level: 'Начинающий',
    levelColor: 'tag-blue',
    lessons: 38,
    hours: 16,
    tags: ['JavaScript', 'DOM', 'Async'],
    cat: 'web',
  },
  {
    id: 4,
    icon: '⚛️',
    title: 'React: Компонентный подход',
    desc: 'Компоненты, пропсы, хуки, маршрутизация. Соберёшь полноценное SPA-приложение.',
    level: 'Средний',
    levelColor: 'tag-orange',
    lessons: 35,
    hours: 15,
    tags: ['React', 'Hooks', 'SPA'],
    cat: 'react',
  },
  {
    id: 5,
    icon: '🗄️',
    title: 'Базы данных: SQL & PostgreSQL',
    desc: 'Реляционные БД с нуля. SELECT, JOIN, индексы, транзакции, нормализация и работа с PostgreSQL.',
    level: 'Начинающий',
    levelColor: 'tag-blue',
    lessons: 24,
    hours: 10,
    tags: ['SQL', 'PostgreSQL', 'БД'],
    cat: 'backend',
  },
  {
    id: 6,
    icon: '🔐',
    title: 'Кибербезопасность: Введение',
    desc: 'Основы защиты систем и сетей. Этичный хакинг, OWASP Top 10, социальная инженерия, CTF-задания.',
    level: 'С нуля',
    levelColor: 'tag-green',
    lessons: 20,
    hours: 9,
    tags: ['Linux', 'Сети', 'CTF'],
    cat: 'security',
  },
  {
    id: 7,
    icon: '🚀',
    title: 'Next.js: Полный стек',
    desc: 'App Router, серверные компоненты, API Routes, Prisma, деплой на Vercel. Профессиональный уровень.',
    level: 'Продвинутый',
    levelColor: 'tag-purple',
    lessons: 40,
    hours: 20,
    tags: ['Next.js', 'TypeScript', 'Vercel'],
    cat: 'react',
  },
  {
    id: 8,
    icon: '🐧',
    title: 'Linux & Bash для разработчиков',
    desc: 'Командная строка, файловая система, права, скрипты на Bash, SSH и работа с удалённым сервером.',
    level: 'Начинающий',
    levelColor: 'tag-blue',
    lessons: 18,
    hours: 7,
    tags: ['Linux', 'Bash', 'CLI'],
    cat: 'backend',
  },
];

const CATS = [
  { id: 'all',      label: 'Все курсы' },
  { id: 'python',   label: 'Python' },
  { id: 'web',      label: 'Веб' },
  { id: 'react',    label: 'React / Next.js' },
  { id: 'backend',  label: 'Backend & БД' },
  { id: 'security', label: 'Безопасность' },
];

export default function CoursesPage() {
  const [cat, setCat] = useState('all');

  const filtered = cat === 'all' ? COURSES : COURSES.filter(c => c.cat === cat);

  return (
    <>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className="grid-bg" />
        <div className="container">
          <div className="label">Каталог</div>
          <h1>Курсы</h1>
          <p>Выбери направление и начни учиться. Все курсы ведутся на русском языке.</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.tabs}>
            {CATS.map(c => (
              <button
                key={c.id}
                className={`${styles.tab} ${cat === c.id ? styles.tabActive : ''}`}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {filtered.map(course => (
              <div key={course.id} className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{course.icon}</span>
                  <span className={`tag ${course.levelColor}`}>{course.level}</span>
                </div>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.cardDesc}>{course.desc}</p>

                <div className={styles.cardTags}>
                  {course.tags.map(t => (
                    <span key={t} className={`tag tag-green`}>{t}</span>
                  ))}
                </div>

                <div className={styles.cardMeta}>
                  <span>📖 {course.lessons} уроков</span>
                  <span>⏱ {course.hours} часов</span>
                </div>

                <Link href="/contact" className="btn-primary" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                  Записаться
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.empty}>Курсы скоро появятся!</div>
          )}
        </div>
      </section>
    </>
  );
}
