import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 غيّر المسار بناءً على اسم الريبو على GitHub
const repoName = 'cryptocraft-ai';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 هذا مهم جداً لـ GitHub Pages
});
