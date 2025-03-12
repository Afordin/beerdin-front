/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", ...defaultTheme.fontFamily.sans],
				dmSans: ["DMSans", ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				cyanCustom: "#06B6D4",
				skyCustom: "#0EA5E9",
				blueCustom: "#3B82F6",
				indigoCustom: "#6366F1",
				violetCustom: "#8B5CF6",
				purpleCustom: "#A855F7",
				"text-primary": "hsl(var(--text-primary))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					100: "hsl(var(--primary-100))",
					200: "hsl(var(--primary-200))",
					300: "hsl(var(--primary-300))",
					400: "hsl(var(--primary-400))",
					500: "hsl(var(--primary-500))",
					600: "hsl(var(--primary-600))",
					700: "hsl(var(--primary-700))",
					800: "hsl(var(--primary-800))",
					900: "hsl(var(--primary-900))",
				},
				"cs-slate": {
					100: "hsl(var(--cs-slate-100))",
					200: "hsl(var(--cs-slate-200))",
					300: "hsl(var(--cs-slate-300))",
					400: "hsl(var(--cs-slate-400))",
					500: "hsl(var(--cs-slate-500))",
					600: "hsl(var(--cs-slate-600))",
					700: "hsl(var(--cs-slate-700))",
					800: "hsl(var(--cs-slate-800))",
					900: "hsl(var(--cs-slate-900))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
			keyframes: {
				hide: {
					from: { opacity: "1" },
					to: { opacity: "0" },
				},
				slideDownAndFade: {
					from: { opacity: "0", transform: "translateY(-6px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideLeftAndFade: {
					from: { opacity: "0", transform: "translateX(6px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				slideUpAndFade: {
					from: { opacity: "0", transform: "translateY(6px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideRightAndFade: {
					from: { opacity: "0", transform: "translateX(-6px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				accordionOpen: {
					from: { height: "0px" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				accordionClose: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0px" },
				},
				dialogOverlayShow: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				dialogContentShow: {
					from: {
						opacity: "0",
						transform: "translate(-50%, -45%) scale(0.95)",
					},
					to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
				},
				drawerSlideLeftAndFade: {
					from: { opacity: "0", transform: "translateX(100%)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				drawerSlideRightAndFade: {
					from: { opacity: "1", transform: "translateX(0)" },
					to: { opacity: "0", transform: "translateX(100%)" },
				},
			},
			animation: {
				hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideDownAndFade:
					"slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideLeftAndFade:
					"slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRightAndFade:
					"slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
				accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
				dialogOverlayShow:
					"dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				dialogContentShow:
					"dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				drawerSlideLeftAndFade:
					"drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
