import type { UserConfigExport } from 'vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
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
    },
    plugins: [
      {
      name: 'copy-static-files',
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      buildEnd() {
        try {
          // 复制 robots.txt
          copyFileSync(
            resolve(__dirname, './seo/robots.txt'),
            resolve(__dirname, './.vitepress/dist/robots.txt')
          );

          // 复制 sitemap.xml
          copyFileSync(
            resolve(__dirname, './seo/sitemap.xml'),
            resolve(__dirname, './.vitepress/dist/sitemap.xml')
          );

          copyFileSync(
            resolve(__dirname, './seo/sitemap-zh.xml'),
            resolve(__dirname, './.vitepress/dist/sitemap-zh.xml')
          );

          copyFileSync(
            resolve(__dirname, './seo/sitemap-en.xml'),
            resolve(__dirname, './.vitepress/dist/sitemap-en.xml')
          );
          copyFileSync(
            resolve(__dirname, './seo/sitemap-expansion-zh.xml'),
            resolve(__dirname, './.vitepress/dist/sitemap-expansion-zh.xml')
          );
          copyFileSync(
            resolve(__dirname, './seo/sitemap-expansion-en.xml'),
            resolve(__dirname, './.vitepress/dist/sitemap-expansion-en.xml')
          );
          copyFileSync(
            resolve(__dirname, './seo/sitemap-other-en.xml'),
            resolve(__dirname, './.vitepress/dist/sitemap-other-en.xml')
          );
           copyFileSync(
            resolve(__dirname, './seo/sitemap-other-zh.xml'),
            resolve(__dirname, './.vitepress/dist/sitemap-other-zh.xml')
          );
          console.log('Static files copied successfully!');
        } catch (error) {
          console.error('Error copying static files:', error);
        }
      }
    }
    ]
  }
}
