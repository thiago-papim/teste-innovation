/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imgprodutos.s3.us-east-2.amazonaws.com'],
  },
};

export default nextConfig;
