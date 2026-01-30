import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
import { name, version } from './packages/components/package.json'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  /**
   * @see define https://cn.vitejs.dev/config/shared-options.html#define
   * @description 修改默认配置
   */
  return {
    define: {
      isDev: process.env.NODE_ENV !== 'production'
    },
    /**
     * 插件配置
     *
     * @see plugins https://cn.vitejs.dev/config/shared-options.html#plugins
     * @description 插件配置 插件是一个函数或者是一个包含 { apply } 的对象。
     */
    plugins: [
      /**
       * @see vite-plugin-vue https://github.com/vitejs/vite-plugin-vue
       * @description vue 插件
       */
      vue(),
      /**
       * @see vite-plugin-dts https://github.com/qmhc/vite-plugin-dts
       * @skipDiagnostics 是否跳过类型诊断
       * @staticImport 是否将动态引入转换为静态
       * @outputDir 可以指定一个数组来输出到多个目录中
       * @insertTypesEntry 是否生成类型声明入口
       * @cleanVueFileName 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
       * @copyDtsFiles 是否将源码里的 .d.ts 文件复制到 outputDir
       * @include 手动设置包含路径的 glob
       * @afterBuild 构建后回调钩子
       * @description vite 插件，用于打包类型声明文件
       */
      dts({
        skipDiagnostics: true,
        // todo 如果丢失了声明文件 打开下面两行
        // skipDiagnostics: false,
        // afterDiagnostic: diagnostics => {
        //   console.log(diagnostics)
        // },
        staticImport: true,
        outputDir: ['./dist/lib', './dist/es'],
        insertTypesEntry: true,
        cleanVueFileName: true,
        copyDtsFiles: true,
        include: ['./packages/components/**/*.ts', './packages/components/**/*.tsx', './packages/components/**/*.d.ts'],
        exclude: ['./packages/components/**/*.vue'],
        afterBuild: (): void => {
          move()
        }
      })
    ],
    /**
     * @see 构建选项 https://cn.vitejs.dev/config/build-options.html
     * @target 这是指 支持原生 ES 模块、原生 ESM 动态导入
     * @minify 压缩代码
     * @chunkSizeWarningLimit 打包的组件超过 2kb 警告提示
     * @reportCompressedSize 启用 gzip 压缩大小报告
     * @emptyOutDir 是否清空输出目录
     * @outDir 指定输出路径
     * @lib.name 包名
     * @lib.entry 打包入口
     * @description 构建配置项
     */
    build: {
      target: 'modules',
      minify: true,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: true,
      emptyOutDir: false,
      outDir: resolve(__dirname, './dist'),
      lib: {
        name: 'dkPlus',
        entry: resolve(__dirname, 'packages/components/index.ts')
      },
      rollupOptions: {
        /**
         * @see external https://rollupjs.org/guide/en/#external
         * @name 包名字
         * @format 包的格式
         * @see output.format https://rollupjs.org/guide/en/#outputformat
         * @exports 指定导出的方式
         * @see output.exports https://rollupjs.org/guide/en/#outputexports
         * @sourcemap 是否生成 sourcemap
         * @see output.outputsourcemap https://rollupjs.org/guide/en/#outputsourcemap
         * @dir 指定输出目录
         * @see output.outputdir https://rollupjs.org/guide/en/#outputdir
         * @entryFileNames 指定入口文件名
         * @see output.outputentryfilenames https://rollupjs.org/guide/en/#outputentryfilenames
         * @chunkFileNames 指定块文件名
         * @see output.outputchunkfilenames https://rollupjs.org/guide/en/#outputchunkfilenames
         * @assetFileNames 指定资源文件名
         * @see output.outputassetfilenames https://rollupjs.org/guide/en/#outputassetfilenames
         * @manualChunks 手动指定块
         * @see output.outputmanualchunks https://rollupjs.org/guide/en/#outputmanualchunks
         * @inlineDynamicImports 是否内联动态导入
         * @see output.outputinlinedynamicimports https://rollupjs.org/guide/en/#outputinlinedynamicimports
         * @globals 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
         * @namespaceToStringTag 为命名空间提供 toStringTag
         *  @see output.outputnamespacetostringtag https://rollupjs.org/guide/en/#outputnamespacetostringtag
         * @description 外部化处理那些你不想打包进库的依赖
         */
        external: ['vue'],
        output: [
          {
            name: 'dkPlus',
            format: 'umd',
            exports: 'named',
            sourcemap: false,
            dir: 'dist/dkPlus',
            entryFileNames: 'index.umd.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            manualChunks: undefined,
            inlineDynamicImports: false,
            globals: {
              vue: 'Vue'
            },
            namespaceToStringTag: true
          },
          {
            format: 'es',
            exports: 'named',
            dir: 'dist/es',
            sourcemap: false,
            entryFileNames: 'index.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            inlineDynamicImports: false,
            manualChunks: undefined,
            preserveModules: true,
            namespaceToStringTag: true
          },
          {
            format: 'cjs',
            exports: 'named',
            dir: 'dist/lib',
            sourcemap: false,
            entryFileNames: 'index.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            inlineDynamicImports: false,
            manualChunks: undefined,
            preserveModules: true,
            namespaceToStringTag: true
          }
        ]
      }
    }
  }
}

/** 打包结束之后将一些静态文件进行移入 */
const move = (): void => {
  const files = [
    { input: './README.md', outDir: 'dist/README.md' },
    { input: './packages/components/package.json', outDir: 'dist/package.json' },
    { input: './LICENSE', outDir: 'dist/LICENSE' }
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.input, item.outDir) // 同步拷贝文件
  })

  console.warn('\n' + `${name} ${version} 版本打包成功🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇` + '\n')
}
