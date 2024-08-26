/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}',
    "./index.html"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 15
      },
      screens: {
        'sm': '640px',
        'md': '868px',
        'lg': '1024px',
        'xl': '1080px',
        '2xl': '1140px',
      },

      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana medium",
        "DanaBold": "Dana DemiBold",
        "Morabbalight": "Morabba light",
        "Morabbamedium": "Morabba medium",
        "MorabbaBold": "Morabba Bold"
      },

      colors: {
        secondColor: "#203656",
        secondTextColor: "#79889e",
        redPrimaryColor: "#fe4f70"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant("child-hover", '& > *:hover')
    }
  ],
}

