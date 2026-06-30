# dev.studio — лендинг на Next.js

Лендинг для приёма заказов на разработку сайтов. Next.js 15 (App Router) + TypeScript + Framer Motion, стиль glassmorphism, SEO-метаданные, JSON-LD, sitemap и robots.

## Запуск локально

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Сборка для продакшена

```bash
npm run build
npm run start
```

## Что стоит поправить перед публикацией

- В `app/layout.tsx` замените `https://example.com` на ваш домен (используется в metadataBase, OG, sitemap, robots).
- В `public/` добавьте файл `og-image.png` (1200×630) для превью в соцсетях.
- В `components/Contact.tsx` подключите реальную отправку формы (например, через API-роут `app/api/contact/route.ts` и email-сервис типа Resend, либо через Telegram Bot API).
- В `components/Footer.tsx` и `Header.tsx` обновите контакты и название.
- Тексты услуг, тарифов и портфолио в соответствующих компонентах — замените на свои реальные проекты и цены.
- Деплой удобнее всего на Vercel: `vercel deploy` (автоматически подхватит Next.js).

## Структура

```
app/
  layout.tsx      — метаданные, шрифты, JSON-LD
  page.tsx        — сборка секций
  globals.css     — токены дизайна и glass-стили
  robots.ts       — robots.txt
  sitemap.ts      — sitemap.xml
components/
  Header.tsx      — плавающая стеклянная навигация
  Hero.tsx        — главный экран с анимированным мокапом
  Services.tsx    — услуги
  Process.tsx     — этапы работы
  Portfolio.tsx   — примеры проектов
  WhyMe.tsx       — преимущества
  Pricing.tsx     — тарифы
  Contact.tsx     — форма заявки
  Footer.tsx      — футер
  Reveal.tsx      — анимация появления при скролле
```
