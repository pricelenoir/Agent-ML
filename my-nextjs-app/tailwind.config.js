module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
        1: '#ffa500',
        2: '#f8c056',
        },
        grey: {
          1: '#c0c0c0',
          2: '#888',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
