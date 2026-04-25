import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative base makes the site work on GitHub Pages even if the repo name changes.
  base: "./",
  plugins: [react()],
});
