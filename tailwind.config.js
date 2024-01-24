/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'play-fair': ['"Playfair Display"']
      },
      colors: {
        black: '#202020',
        blue: '#329CFE',
        darkblue: '#0E69BD',
      },
    },
  },
  plugins: [],
}

