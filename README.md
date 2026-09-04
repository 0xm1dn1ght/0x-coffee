# 0x Coffee — лендинг

Тестовый проект №1. Одностраничный лендинг вымышленного бренда: кофе-подписка
для программистов с доставкой по России. Стиль — **«VFD-панель»**: почти чёрный
фон, тёплый бирюзовый цвет индикатора со свечением, янтарные акценты,
моноширинный шрифт, светящиеся табло и «датчики».

Цель страницы: чтобы человек, зашедший впервые — даже не программист —
заинтересовался и захотел попробовать этот кофе.

## Стек

|                      |                                                                        |
| -------------------- | ---------------------------------------------------------------------- |
| **Astro 5**          | статический генератор, нулевой JS по умолчанию                         |
| **TypeScript**       | `strict`, типизированные данные в `src/data/`                          |
| **Tailwind CSS v4**  | через `@tailwindcss/vite`, токены в `src/styles/global.css` (`@theme`) |
| **@astrojs/sitemap** | `sitemap-index.xml` на сборке                                          |
| **View Transitions** | `<ClientRouter />` (мягкие переходы, если добавятся страницы)          |
| **Prettier**         | + плагины `astro` и `tailwindcss`                                      |

Графика — **инлайновый SVG/CSS**, без фотографий (осознанное решение: держим
«ноль сторонних запросов» и не зависим от подбора фото). `astro:assets` из
плана убран вместе с фото.

## Запуск

```
npm install
npm run dev        # http://localhost:4321
```

Прочие команды:

```
npm run build      # прод-сборка в dist/
npm run preview     # локальный предпросмотр dist/
npm run check       # проверка типов Astro
npm run format      # Prettier
```

Нужен Node 18+ (у тебя стоит 24).

## Структура

```
src/
  data/            site.ts, roasts.ts  — весь контент и типы
  styles/          global.css          — Tailwind v4 + токены палитры + reveal
  lib/             reveal.ts           — scroll-анимация (учёт view transitions)
  components/
    CoffeeMark.astro   — SVG-графика: пролив воронки + зёрна по обжаркам
    Readout.astro      — светящееся табло (температура, цена)
    RoastGauge.astro   — сегментный датчик степени обжарки
    Panel.astro        — рамка секции
    Nav / Hero / FreshnessStrip / Roasts / HowItWorks / Voices / Pricing / SiteFooter
  layouts/Base.astro   — <head>, SEO, OG, JSON-LD, CSP, ClientRouter
  pages/index.astro    — сборка секций
public/
  _headers             — security-заголовки (Netlify / Cloudflare Pages)
  favicon.svg, robots.txt
```

Весь текст и данные (обжарки, шаги, отзывы, цена, контакты) — в `src/data/`.
Менять контент там, а не в разметке.

## Контент

- **3 обжарки**: `null` (светлая), `segfault` (средняя), `deadlock` (тёмная).
- **Локализация под РФ**: 1490 ₽ / 250 г (≈ 16–18 чашек), бесплатная доставка
  от 3500 ₽, оплата «Мир» и СБП, доставка СДЭК и Почтой (1–4 дня), курьер по
  Москве и Петербургу за сутки, контакты — Telegram и VK.
- Ссылки соцсетей и оплаты сейчас заглушки (`href="#"`) — заменить в `site.ts`.

## Безопасность

- `Content-Security-Policy` мета-тегом в `Base.astro` и заголовком в `_headers`:
  `default-src 'self'`, внешние запросы запрещены. `'unsafe-inline'` для
  style/script нужен из-за инлайновых стилей Astro и скрипта view transitions —
  **в проде затянуть до nonce/hash** (Astro поддерживает
  `experimental.csp` / вынос стилей: `build.inlineStylesheets: 'never'`).
- `_headers`: `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`,
  `Permissions-Policy`, `HSTS`, COOP/CORP.
- GitHub Pages не читает `_headers` (только HTTPS + мета-CSP). Для полноценных
  заголовков — Cloudflare Pages или Netlify (оба читают `_headers`, бесплатны
  для статики).

## Дальше

1. Прогнать `npm run dev`, посмотреть вживую, поправить отступы/типографику.
2. Заменить заглушки ссылок в `src/data/site.ts`.
3. Определиться с шрифтом (сейчас системный моноширинный; можно подключить
   self-hosted, без Google Fonts).
4. Затянуть CSP до hash/nonce перед деплоем.
5. Деплой на Cloudflare Pages / Netlify (`npm run build`, каталог `dist/`).
