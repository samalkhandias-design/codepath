# CodePath — Платформа обучения программированию

Современный образовательный сайт, созданный на **Next.js 14** (App Router).

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная — герой, возможности, статистика |
| `/courses` | Каталог курсов по уровням |
| `/about` | О платформе, команда, миссия |
| `/contact` | Форма обратной связи |

## Стек

- **Next.js 14** — App Router
- **CSS Variables** — кастомная дизайн-система
- **Google Fonts** — JetBrains Mono + DM Sans
- Без сторонних UI-библиотек

## Запуск

```bash
# 1. Установить зависимости
npm install

# 2. Запустить dev-сервер
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000) в браузере.

## Деплой на Vercel

```bash
npm i -g vercel
vercel
```

## Структура

```
src/
├── app/
│   ├── layout.js        # Общий layout (Navbar + Footer)
│   ├── globals.css      # CSS-переменные и глобальные стили
│   ├── page.js          # Главная страница
│   ├── courses/
│   │   └── page.js      # Каталог курсов
│   ├── about/
│   │   └── page.js      # О нас
│   └── contact/
│       └── page.js      # Контакты
└── components/
    ├── Navbar.js
    └── Footer.js
```

---

Сделано с ❤️ в Казахстане
