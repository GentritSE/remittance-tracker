export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#0F1419'
        },
        card: {
          light: '#F8F9FA',
          dark: '#1C1F26'
        },
        text: {
          light: '#1A1A1A',
          dark: '#E7E9EA'
        },
        accent: {
          light: '#0066FF',
          dark: '#1D9BF0'
        },
        border: {
          light: '#E5E7EB',
          dark: '#2F3336'
        }
      },
      transitionDuration: {
        '300': '300ms',
      }
    }
  },
  plugins: [],
}
