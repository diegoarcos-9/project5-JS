module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        dm: "'DM mono', monoscape",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
