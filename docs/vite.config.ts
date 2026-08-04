import type { UserConfigExport } from 'vite'
import { resolve } from 'path'
export default (): UserConfigExport => {
  return {
    server: {
      port: 6099
    },
    resolve: {
      alias: {
        isIcon: resolve(__dirname, '../packages/components/_icon/index.ts')
      }
    },
    optimizeDeps: {
      exclude: ['vitepress'],
      include: ['vue', '@vueuse/core']
    }
  }
}
