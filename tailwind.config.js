
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': {'min':'300px', 'max': '639px'},  // Phones (up to 639px)
      'md': {'min': '640px', 'max': '1023px'},  // Tablets and smaller desktops (640px to 1023px)
      'lg': {'min': '1024px', 'max': '1279px'}, // Larger desktops (1024px to 1279px)
      'xl': {'min': '1280px'}, // XL screens (1280px and above)
    },
  },
  
  presets: [keepPreset],
};
