/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': "#151b40",
        'secondary': "#f2c063",
        'tertiary': "#bf6e26",
        'quaternary': "#400d01",
        'quinternary': "#0b1426",
        'white': "#fff",
        'black': "#000"
      },
      backgroundImage: {
        'leaves' : "url('src/lib/img/foglie.jpg')"
      }
    },
  },
  plugins: [],
}

