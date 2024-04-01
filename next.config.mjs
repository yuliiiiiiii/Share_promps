/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio']
  }
  //to solve the error: hostname "cdn.imagin.studion" is not configured under images in your "next.config.js"
};

export default nextConfig;
