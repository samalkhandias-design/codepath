'use client';

import { useState } from 'react';
import styles from './page.module.css';

const FAQ = [
  {
    q: 'Нужен ли опыт программирования?',
    a: 'Нет! Большинство наших курсов рассчитаны на полных новичков. Мы начинаем с самых основ.',
  },
  {
    q: 'Курсы платные?',
    a: 'На данный момент весь контент платформы бесплатен. В будущем появятся расширенные платные курсы с персональной обратной связью.',
  },
  {
    q: 'На каком языке ведутся курсы?',
    a: 'Все материалы на русском языке. Частично доступны на казахском языке.',
  },
  {
    q: 'Как получить сертификат?',
    a: 'После завершения курса и выполнения финального проекта вы получаете сертификат на электронную почту.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'general', message: '' });
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(null);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className="grid-bg" />
        <div className="container">
          <div className="label">Связь</div>
          <h1>Контакты</h1>
          <p>Есть вопрос о курсах или хочешь предложить сотрудничество? Напиши нам!</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>

            {/* Form */}
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>Написать сообщение</h2>

              {sent ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✅</span>
                  <h3>Сообщение отправлено!</h3>
                  <p>Мы ответим в течение 24 часов на указанный email.</p>
                  <button className="btn-ghost" onClick={() => { setSent(false); setForm({ name:'',email:'',topic:'general',message:'' }); }}>
                    Написать ещё
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>Имя</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Тема</label>
                    <select name="topic" value={form.topic} onChange={handleChange} className={styles.input}>
                      <option value="general">Общий вопрос</option>
                      <option value="course">Вопрос по курсу</option>
                      <option value="collab">Сотрудничество</option>
                      <option value="bug">Сообщить об ошибке</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Сообщение</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Опишите ваш вопрос или предложение..."
                      required
                      rows={5}
                      className={`${styles.input} ${styles.textarea}`}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Отправить сообщение →
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              {/* Contact info */}
              <div className={`card ${styles.infoCard}`}>
                <h3 className={styles.infoTitle}>Где нас найти</h3>
                <div className={styles.contacts}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>✉️</span>
                    <div>
                      <div className={styles.contactLabel}>Email</div>
                      <a href="mailto:hello@codepath.kz">hello@codepath.kz</a>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>✈️</span>
                    <div>
                      <div className={styles.contactLabel}>Telegram</div>
                      <a href="https://t.me/codepath_kz" target="_blank" rel="noopener noreferrer">@codepath_kz</a>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>💻</span>
                    <div>
                      <div className={styles.contactLabel}>GitHub</div>
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github.com/codepath-kz</a>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📍</span>
                    <div>
                      <div className={styles.contactLabel}>Локация</div>
                      <span style={{ color: 'var(--text-2)', fontSize: 14 }}>Казахстан 🇰🇿</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time badge */}
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                Среднее время ответа — <strong>до 24 часов</strong>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className={styles.faqWrap}>
            <div className="section-heading" style={{ marginTop: 64 }}>
              <div className="label">FAQ</div>
              <h2>Частые вопросы</h2>
            </div>
            <div className={styles.faq}>
              {FAQ.map((item, i) => (
                <div key={i} className={`${styles.faqItem} ${open === i ? styles.faqOpen : ''}`}>
                  <button className={styles.faqQ} onClick={() => setOpen(open === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className={styles.faqArrow}>{open === i ? '−' : '+'}</span>
                  </button>
                  {open === i && (
                    <div className={styles.faqA}>{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
