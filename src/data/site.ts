export const site = {
  name: '0x Coffee',
  domain: '0xm1dn1ght.github.io/0x-coffee',
  url: 'https://0xm1dn1ght.github.io/0x-coffee',
  tagline: 'Свежая обжарка для тех, кто пишет код',
  description:
    'Кофе от разработчиков для разработчиков: три моносортовых зерна, обжарка в день отправки, доставка по всей России. Выбираете вкус и интервал — дальше приходит само.',
  price: {
    amount: 1490,
    currency: '₽',
    unit: 'пачка 250 г',
    cupsPerBag: '≈ 16–18 чашек',
    shipping: 299,
    freeShippingFrom: 3500,
  },
  payments: ['карта «Мир»', 'СБП'],
  delivery: 'СДЭК и Почта — 1–4 дня по России; по Москве и Петербургу курьер за сутки',
  social: [
    { label: 'Telegram', href: '#' },
    { label: 'VK', href: '#' },
  ],
  nav: [
    { label: 'Зёрна', href: '#roasts' },
    { label: 'Как это работает', href: '#how' },
    { label: 'Отзывы', href: '#voices' },
    { label: 'Цена', href: '#pricing' },
    { label: 'Вопросы', href: '#faq' },
  ],
} as const;

export type Site = typeof site;
