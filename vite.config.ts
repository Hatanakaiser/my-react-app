import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 資産の読み込みパスを相対パスにする（Vercel単体ならなくても動きます）
})