import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(import.meta.dirname,"src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: "src/index.html",
      }
    }
  }
})