/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2c3e50',
        success: '#d4edda',
        error: '#f8d7da',
        successText: '#155724',
        errorText: '#721c24',
      },
    },
  },
  plugins: [],
}
