import './globals.css';

export const metadata = {
  title: {
    default: 'CodePath — Платформа обучения программированию',
    template: '%s | CodePath',
  },
  description:
    'Изучай программирование с нуля: Python, JavaScript, веб-разработка и кибербезопасность. Структурированные курсы на русском языке.',
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
