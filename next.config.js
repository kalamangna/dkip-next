/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ["dkip.sinjaikab.go.id", "placehold.co"],
    unoptimized: true,
  },
}

module.exports = nextConfig
