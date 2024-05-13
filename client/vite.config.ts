import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: /.(jsx|tsx)$/,
      babel: {
        plugins: [
          "babel-plugin-macros",
          ["babel-plugin-styled-components", { displayName: true }],
        ],
        babelrc: false,
        configFile: false,
      },
    }),
  ],
});
