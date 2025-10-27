/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'headless-craft-sb-backend.ddev.site',
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
