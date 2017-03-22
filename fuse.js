const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
    homeDir: 'src/',
    sourcemaps: true,
    outFile: './dist/app.js',
    plugins: [
        [
            fsbx.SassPlugin({outputStyle: 'compressed'}),
            fsbx.CSSPlugin({})
        ],
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({useDefault: false})
    ]
});

fuseBox.devServer('>app/app.ts', {
    port: 4446,
    httpServer: false
});