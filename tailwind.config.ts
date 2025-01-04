/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        "slow-spin": "slow-spin 20s linear infinite",
        "slow-pulse": "slow-pulse 4s ease-in-out infinite",
        "slow-rotate": "slow-rotate 30s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "slow-spin": {
          "from": {
            transform: "rotate(0deg)",
          },
          "to": {
            transform: "rotate(360deg)",
          },
        },
        "slow-pulse": {
          "0%, 100%": {
            opacity: "0.2",
          },
          "50%": {
            opacity: "0.3",
          },
        },
        "slow-rotate": {
          "from": {
            transform: "rotate(0deg)",
          },
          "to": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
}

