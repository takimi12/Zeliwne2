/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['grzejniki2.ergotree.pl'],
  },
};

module.exports = {
  webpack(config) {
    // Pobierz istniejącą regułę obsługującą importy SVG
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test && rule.test.test && rule.test.test('.svg'),
    );

    config.module.rules.push(
      // Ponownie zastosuj istniejącą regułę, ale tylko dla importów SVG kończących się na ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Konwertuj wszystkie inne importy *.svg na komponenty Reacta
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // wyklucz, jeśli *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    // Zmodyfikuj regułę ładowania plików, aby ignorować *.svg, ponieważ już to obsługujemy.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
