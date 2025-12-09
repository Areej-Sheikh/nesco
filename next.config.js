/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Disable Turbopack and force Webpack
  experimental: {
    turbo: {
      rules: {}, // disable Turbopack features
      resolveAlias: {}, 
    },
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  webpack: (config) => {
    return config; // force Webpack bundler
  },

  async rewrites() {
    return [
      {
        source: "/api/stock-data",
        destination: "https://www.nesco.in/nesco_stock/nesco.php",
      },
      {
        source: "/api/chart-data",
        destination: "https://www.nesco.in/nesco_stock/nesco.php",
      },
      {
        source: "/api/historical-quote",
        destination: "https://www.nesco.in/nesco_stock/nesco.php",
      },
    ];
  },
};

module.exports = nextConfig;
