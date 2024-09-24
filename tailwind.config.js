/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom text shadow definitions
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',  // Small shadow
        'default': '2px 2px 3px rgba(0, 0, 0, 0.5)',  // Default shadow
        'lg': '3px 3px 5px rgba(0, 0, 0, 0.6)',  // Larger shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
