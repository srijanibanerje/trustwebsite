import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   preview: {
      allowedHosts: ['https://trustwebsite-l1ir.onrender.com/'], // ✅ add your Render domain here
    },
})
