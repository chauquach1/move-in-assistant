// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(accordion|alert|autocomplete|button|calendar|card|checkbox|chip|date-input|date-picker|drawer|dropdown|form|input|link|listbox|menu|modal|navbar|number-input|radio|scroll-shadow|select|skeleton|spinner|toggle|toast|divider|ripple|popover).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};