/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'script': ['"Dancing Script"', 'cursive'],
      },
      colors: {
        'birthday-pink': {
          100: '#FFF0F3',
          200: '#FFCCD5',
          300: '#FFB3C1',
          400: '#FF8FA3',
          500: '#FF758F',
          600: '#FF4D6D',
          700: '#C9184A',
          800: '#A4133C',
          900: '#800F2F',
        },
        'birthday-gold': {
          100: '#FFF8E6',
          200: '#FFEFC3',
          300: '#FFE6A0',
          400: '#FFDD7D',
          500: '#FFD45A',
          600: '#FFC837',
          700: '#FFB814',
          800: '#F0A800',
          900: '#CC9000',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out 1s infinite',
        'float-delay-2': 'float 6s ease-in-out 2s infinite',
        'float-delay-3': 'float 6s ease-in-out 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'confetti-fall': 'confetti-fall 5s ease-in-out forwards',
        'fade-in': 'fade-in 1.5s ease-out forwards',
        'fade-in-delay-1': 'fade-in 1.5s ease-out 0.5s forwards',
        'fade-in-delay-2': 'fade-in 1.5s ease-out 1s forwards',
        'fade-in-delay-3': 'fade-in 1.5s ease-out 1.5s forwards',
        'scale-up': 'scale-up 0.5s ease-out forwards',
        'bounce-light': 'bounce-light 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'confetti-fall': {
          '0%': { transform: 'translateY(-100vh)', opacity: 1 },
          '100%': { transform: 'translateY(100vh)', opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'bounce-light': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};