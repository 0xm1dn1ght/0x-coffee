# 0x Coffee

Тестовый проект №1 — одностраничный лендинг вымышленного бренда: кофе-подписка
«от программистов для программистов» с доставкой по России.

- **Живой сайт:** https://0xm1dn1ght.github.io/0x-coffee/
- Автодеплой на GitHub Pages (GitHub Actions) при каждом пуше в `main`.

Стиль — «приборная панель»: почти чёрный фон, бирюзовый индикатор со свечением,
янтарные акценты, моноширинный шрифт, светящиеся табло. Вся графика — инлайновый
SVG/CSS, без фотографий и внешних запросов.

## Стек

Astro 5 · TypeScript (strict) · Tailwind CSS v4 · `@astrojs/sitemap` · Prettier.
В рантайме — ноль стороннего JS и сетевых запросов.

## Разработка

```
npm install
npm run dev       # http://localhost:4321
npm run build     # прод-сборка в dist/
npm run preview   # предпросмотр сборки
npm run check     # проверка типов
npm run format    # Prettier
```

Node 18.20+ / 20.3+ / 22+.

## Структура

```
src/
  data/        site.ts, roasts.ts   — весь контент и типы
  styles/      global.css           — Tailwind v4, палитра, scroll-reveal
  lib/         reveal.ts            — появление секций при скролле
  components/  Nav, Hero, FreshnessStrip, Roasts, HowItWorks, Voices,
               Pricing, Faq, SiteFooter + Panel, Readout, RoastGauge,
               CoffeeMark (SVG: кружка и зёрна)
  layouts/     Base.astro           — <head>, SEO/OG, JSON-LD, CSP
  pages/       index.astro          — сборка секций
public/        _headers (заголовки безопасности), favicon.svg, robots.txt
```

Контент (обжарки, шаги, отзывы, FAQ, цена) правится в `src/data/`, не в разметке.

## Контент

- 3 обжарки: `null` (светлая), `segfault` (средняя), `deadlock` (тёмная).
- Локализация под РФ: 1490 ₽ / 250 г, доставка 299 ₽ (бесплатно от 3500 ₽),
  оплата «Мир» и СБП, СДЭК и Почта, контакты — Telegram и VK.

## Известные TODO

- Ссылки на Telegram/VK в `src/data/site.ts` — заглушки (`#`).
- CSP держит `'unsafe-inline'` для style/script — затянуть до hash/nonce.
- Свой домен вместо `github.io` (тогда обновить `site`/`base` в `astro.config.mjs`).
- `public/_headers` — синтаксис Cloudflare/Netlify, GitHub Pages его не читает.
