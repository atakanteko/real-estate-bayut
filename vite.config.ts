import react from '@vitejs/plugin-react'
import path from "path";
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: `${path.resolve(__dirname, "./assets/")}`,
      localization: `${path.resolve(__dirname, "./localization/")}`,
      services: `${path.resolve(__dirname, "./services/")}`,
      constants: `${path.resolve(__dirname, "./constants/")}`,
      types: `${path.resolve(__dirname, "./types/")}`,
      httpClient: `${path.resolve(__dirname, "./httpClient/")}`,
      store: `${path.resolve(__dirname, "./store/")}`,
      features: `${path.resolve(__dirname, "./features/")}`,
      utils: `${path.resolve(__dirname, "./utils/")}`,
      hooks: `${path.resolve(__dirname, "./hooks/")}`,
      components: `${path.resolve(__dirname, "./components/")}`,
      style: `${path.resolve(__dirname, "./style/")}`,
      routes: `${path.resolve(__dirname, "./routes/")}`,
      pages: `${path.resolve(__dirname, "./pages/")}`,
      mock: `${path.resolve(__dirname, "./mock/")}`,
    },
  },
})
