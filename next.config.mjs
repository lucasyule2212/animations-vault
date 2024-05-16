/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app',
      },
    ],
  },
}

export default nextConfig
