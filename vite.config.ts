import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      external: ['firebase-admin'],
    }
  },
  ssr: {
    external: ['firebase-admin'],
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    nitro({
      // @ts-ignore
      externals: {
        external: [
          'firebase-admin',
          'google-auth-library',
          'gaxios',
          'gtoken',
          'google-p12-pem'
        ],
      },
    }),
  ]
})  
