const path = require('path')

import pages from './pages.config'


export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist',
        emptyOutDir: true, // rewrite
        rollupOptions: { // for multiple html in dist
            input: {
                ...pages
            }
        },
    },
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': path.resolve('src/js'),
        }
    }
}
