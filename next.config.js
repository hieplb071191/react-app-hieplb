/** @type {import('next').NextConfig} */
require('dotenv').config;

const nextConfig = {
	// output: 'export',
	reactStrictMode: true,
	env: {
		GOOGLE_ID: process.env.GOOGLE_ID,
		BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
		GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Cross-Origin-Opener-Policy',
						value: 'same-origin-allow-popups', // "same-origin-allow-popups"
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
