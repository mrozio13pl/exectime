import { minify } from 'rollup-plugin-esbuild';
import { dts } from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.mjs',
            format: 'es'
        },
        plugins: [
            minify()
        ]
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.cjs',
            format: 'cjs'
        },
        plugins: [
            minify()
        ]
    },
    {
        input: './src/types.d.ts',
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'es'
            },
            {
                file: 'dist/index.d.mts',
                format: 'es'
            },
            {
                file: 'dist/index.d.cts',
                format: 'cjs'
            },
        ],
        plugins: [
            dts()
        ],
    },
];