import styles from './page.module.css';

const team = [
  {
    name: 'Алибек Жаксыбеков',
    role: 'Основатель & Python-разработчик',
    bio: '5 лет в Python и Django. Учился в IITU, работал в казахстанских IT-компаниях.',
    avatar: '👨‍💻',
    tags: ['Python', 'Django', 'API'],
  },
  {
    name: 'Санем Бекова',
    role: 'Фронтенд & Дизайн',
    bio: 'Специалист по React и UI/UX. Создаёт курсы по веб-дизайну и клиентской разработке.',
    avatar: '👩‍🎨',
    tags: ['React', 'Figma', 'CSS'],
  },
  {
    name: 'Дамир Сейткали',
    role: 'Кибербезопасность',
    bio: 'Сертифицированный специалист по защите информации. Ведёт курсы по этичному хакингу.',
    avatar: '🔐',
    tags: ['Linux', 'CTF', 'OWASP'],
  },
];

const timeline = [
  { year: '2023', title: 'Запуск платформы', desc: 'Опубликовали первые 3 курса по Python и веб-разработке.' },
  { year: '2024', title: 'Рост сообщества', desc: 'Собрали 500+ студентов, добавили курсы по SQL и кибербезопасности.' },
  { year: '2025', title: 'Новый уровень', desc: 'Запустили продвинутые курсы, расширили команду до 5 преподавателей.' },
];

const values = [
  { icon: '🎯', title: 'Практика прежде всего', desc: 'Каждый урок заканчивается реальным заданием. Мы не верим в пассивное обучение.' },
  { icon: '🌍', title: 'Доступность', desc: 'Весь контент на русском и казахском языке, без платных барьеров.' },
  { icon: '🤝', title: 'Сообщество', desc: 'Учёба вместе эффективнее. У нас есть активный чат поддержки.' },
  { icon: '📈', title: 'Результат', desc: 'Цель — ваш оффер. Помогаем собрать портфолио и подготовиться к интервью.' },
];

export const metadata = { title: 'О нас' };

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className="grid-bg" />
        <div className="container">
          <div className="label">О платформе</div>
          <h1>Наша миссия</h1>
          <p className={styles.headerText}>
            CodePath — образовательная платформа из Казахстана. Мы верим, что качественное
            IT-образование должно быть доступным, практичным и на родном языке.
          </p>
        </div>
      </div>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="label">Принципы</div>
            <h2>Во что мы верим</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className="section-heading">
            <div className="label">Команда</div>
            <h2>Кто преподаёт</h2>
            <p>Практикующие разработчики с опытом в казахстанских и международных компаниях.</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map(t => (
              <div key={t.name} className={`card ${styles.teamCard}`}>
                <div className={styles.teamAvatar}>{t.avatar}</div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{t.name}</h3>
                  <p className={styles.teamRole}>{t.role}</p>
                  <p className={styles.teamBio}>{t.bio}</p>
                  <div className={styles.teamTags}>
                    {t.tags.map(tag => (
                      <span key={tag} className="tag tag-green">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="section-heading">
            <div className="label">История</div>
            <h2>Наш путь</h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={item.year} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <span className={styles.timelineYear}>{item.year}</span>
                </div>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot} />
                  {i < timeline.length - 1 && <div className={styles.timelineTrack} />}
                </div>
                <div className={styles.timelineRight}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
