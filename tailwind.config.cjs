/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1f2937",
        "secondary-dark": "#374151",
        "sidebar-dark": "#111827",
        "primary-light": "#3b82f6",
        primaryLight: "#3b82f6",
        "secondary-light": "#ffffff",
        "sidebar-light": "#1e3a8a",
        "navbar-light": "#1e40af",
        "navbar-dark": "#1f2937",
      },
    },
  },
  plugins: [],
};
