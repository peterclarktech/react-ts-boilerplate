/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,jsx}"],
  theme: {
    colors: {
      'white': 'white',
      'black': 'black',
      'gray': 'rgb(105 111 117);',
      'gray-light': 'lightgray',
      'gray-dark': 'rgb(54 52 57)',
      'positive': '#5DA955',
      'positive-light': '#7EBD77',
      'positive-dark': 'rgb(49 133 41)',
      'negative': '#CB666B',
      'negative-light': '#E38F93',
      'negative-dark': '#AF3E44',
      'accent': '#A45382',
      'accent-light': '#B8749C',
      'accent-dark': '#8E3268'
    },
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

