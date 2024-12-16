import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import packageJson from "./package.json"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL(".", import.meta.url)),
    },
    extensions: [".js", ".ts"]
  },
  base: "./",
  define: {
    "import.meta.env.PACKAGE_VERSION": JSON.stringify(packageJson.version),
  }
})
