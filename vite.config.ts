import { defineConfig } from 'vite';
import { resolve } from 'path'
import babel from 'vite-plugin-babel';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'SqWebComponents',
            fileName: 'sq-web-components', 
            formats: ['es']           
        }
    }
})