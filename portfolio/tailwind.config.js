/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3498db',
          dark: '#60a5fa',
        },
        secondary: {
          light: '#2c3e50',
          dark: '#9ca3af',
        },
        background: {
          light: '#ffffff',
          dark: '#111827',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
        success: '#d4edda',
        error: '#f8d7da',
        successText: '#155724',
        errorText: '#721c24',
      },
      backgroundColor: {
        light: '#ffffff',
        dark: '#111827',
      },
      textColor: {
        light: '#1f2937',
        dark: '#f3f4f6',
      },
    },
  },
  plugins: [],
}
