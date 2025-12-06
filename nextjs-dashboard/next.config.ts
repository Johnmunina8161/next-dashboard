/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.jsx": ["jsx"],
        "*.tsx": ["tsx"]
      }
    }
  }
};

module.exports = nextConfig;
