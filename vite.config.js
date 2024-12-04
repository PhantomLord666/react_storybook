import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';



export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/Organisms/Accordion/Product01.stories.jsx'),
      name: 'Button',
      formats: ['umd'],
      fileName: (format) => `button.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
        },
     define: {
      "process.env": env,
    },
    plugins: [react()],
    server: {
      host: true, // Permite usar tu IP en lugar de "localhost"
      port: 5173, // El puerto por defecto o el que prefieras
    },
  }
})



