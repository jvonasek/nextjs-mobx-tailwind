module.exports = {
  theme: {
    extend: {
      colors: {
        foreground: 'var(--color-foreground)',
        background: 'var(--color-background)',
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/ui')],
}
