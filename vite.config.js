import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 اسم الريبو على GitHub
const repoName = 'cryptocraft-ai';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 مهم جداً للنشر على GitHub Pages
});
