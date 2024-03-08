import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: '@components',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url)
        )
      },
      {
        find: '@modules',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url)
        )
      },
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./src/pages', import.meta.url))
      },
      {
        find: '@resources',
        replacement: fileURLToPath(new URL('./src/resources', import.meta.url))
      },
      {
        find: '@styles',
        replacement: fileURLToPath(new URL('./src/styles', import.meta.url))
      },
      {
        find: '@types',
        replacement: fileURLToPath(new URL('./src/types', import.meta.url))
      },
      {
        find: '@utils',
        replacement: fileURLToPath(new URL('./src/utils', import.meta.url))
      }
    ]
  }
})
