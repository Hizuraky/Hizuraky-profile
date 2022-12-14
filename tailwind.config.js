/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      objectPosition: {
        header: "-875px 0px"
      },
      animation: {
        "fade-in": "fadeIn 0.25s ease-in-out forwards",
        "fade-out": "fadeOut 0.25s ease-in-out forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      },
      colors: {
        primary: {
          DEFAULT: "#3675FD",
          text: "#1D59D8"
        },
        bg: {
          DEFAULT: "#F2F4F5",
          neumo: "#F0F1F3"
        },
        text: {
          DEFAULT: "#444",
          dark: "#222",
          light: "#888",
          pale: "#aaa"
        },
        dark: {
          text: "#ccc",
          "text-deep": "#aaa",
          bg: "#273445",
          neumo: "#273445",
          primary: "#93b5ff"
        }
      },
      boxShadow: {
        blue: "5px 5px 10px #2858bf, -5px -5px 10px #3a81f4",
        "blue-active": "inset 5px 5px 10px #2858bf, inset -5px -5px 10px #4488f5",
        basic: "5px 5px 10px #dedfe0, -5px -5px 10px #ffffff",
        "basic-inner": "inset 8px 8px 10px #dedfe0, inset -8px -8px 10px #ffffff",
        dark: "5px 5px 10px #171e28, -5px -5px 10px #374a62",
        "dark-inner": "inset 8px 8px 10px #171e28, inset -8px -8px 10px #374a62",
        toggle: "inset 8px 8px 10px #CCCDCF, inset -8px -8px 10px #FFFFFF",
        "toggle-button": "3px 3px 3px #ACACAC, -3px -3px 3px #FFFFFF",
        "toggle-button-inner": "inset 3px 3px 3px #ACACAC, inset -3px -3px 3px #FFFFFF",
        "dark-toggle-button": "2px 2px 2px #4e525d, -2px -2px 2px #98a2b7",
        "dark-toggle-isset": "inset 5px 5px 5px #171e28, inset -5px -5px 5px #374a62",
        "dark-history-circle": "3px 3px 3px #171e28, -3px -3px 3px #374a62",
        "dark-history-circle-inner": "inset 3px 3px 3px #171e28, inset -3px -3px 3px #374a62"
      },
      rotate: {
        "1/4": "90deg",
        "1/2": "180deg",
        "3/4": "270deg"
      }
    }
  },
  plugins: [],
  darkMode: "class"
}
