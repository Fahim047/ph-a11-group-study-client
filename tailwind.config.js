/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#60a5fa',
					DEFAULT: '#3b82f6',
					dark: '#2563eb',
				},
				secondary: {
					light: '#d1d5db',
					DEFAULT: '#6b7280',
					dark: '#4b5563',
				},
				accent: '#facc15',
			},
		},
	},
	plugins: [daisyui],
};
