import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
//如果类型报错 需要安pnpm i @types/node -D
import path from 'path';
import autoprefixer from 'autoprefixer';
import windi from 'vite-plugin-windicss';
import viteEslint from 'vite-plugin-eslint';

//用normalizePath解决windows下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components']
      }
    }),
    windi(),
    viteEslint()
  ],
  css: {
    modules: {
      //local表示类名  name表示当前文件名
      generateScopedName: '[name]_[local]__[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        //additionalData的内容会再每个scss文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
});
