/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['i.ytimg.com', 'broadlabor.sardaritskillshare.com'],
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://broadlabor.sardaritskillshare.com/api/:path*', // your API
            },
        ];
    },

};

export default nextConfig;
