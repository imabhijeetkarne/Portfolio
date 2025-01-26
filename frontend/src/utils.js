// Function to get the full URL for an asset in the public folder
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

// Base URL for the backend
export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Function to generate full API endpoint URLs
export const getApiUrl = (endpoint) => {
  return `${BASE_URL}${endpoint}`;
};
