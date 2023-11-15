/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    serverRuntimeConfig: {
        mysql: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'food'
        },
    },
}

module.exports = nextConfig
