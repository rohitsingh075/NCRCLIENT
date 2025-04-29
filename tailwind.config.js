// tailwind.config.js
export default {
    theme: {
      extend: {
        keyframes: {
          'vertical-scroll': {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(-100%)' },
          },
        },
        animation: {
          'vertical-scroll': 'vertical-scroll 20s linear infinite',
        },
      },
    },
  };
  