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
        },
        wise: {
          green: '#9FE870'
        },
        remitly: {
          blue: '#3773E8'
        },
        westernunion: {
          yellow: '#FFCC00'
        },
        xoom: {
          purple: '#009CDE'
        },
        ria: {
          red: '#ED1C24'
        }
      },
      transitionDuration: {
        '300': '300ms',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
}
