/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        'xl-vite': '0 0 2em #646cffaa',
        'xl-react': '0 0 2em #61dafbaa',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}

