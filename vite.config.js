import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 اسم الريبو على GitHub
const repoName = 'cyberchef';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 مهم جداً للنشر على GitHub Pages
});
