import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				lightGreen: '#F0FF1C',
				lightBlue: '#1D1D2066',
				darkBlue: '#01010F',
				mediumBlue: '#6939FF',
				deepBlue: '#533EE8',
				textColor: '#92939E',
				darkGreen: '#E4F222',
				cardBg: '#242528',
				primaryColor: '#03010b',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				'blg-dark-100': '#01010E',
				'blg-dark-200': '#020202',
				'blq-gray-50': '#999999',
				'blq-gray-100': '#666666',
				'blq-gray-200': '#F7F7F7',
				'blq-gray-250': '#CDCBD7',
				'blq-gray-300': '#92939E',
				'blq-gray-400': '#242528',
				'blq-purple-100': '#533EE8',
				'blq-yellow-100': '#E4F222',
				"toast-red-100": "#FC2838",
				"toast-green-100": "#00C46C",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				"plg": '14px',
				"slg": '16px',
			},
			fontFamily: {
				'creato': ['Creato Display', 'sans-serif'],
			},
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
