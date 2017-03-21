const { FuseBox, ImageBase64Plugin, SVGPlugin, CSSPlugin, BabelPlugin } = require("fuse-box");


// Create FuseBox Instance
let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    outFile: "./build/out.js",
    plugins: [
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin(),
        ImageBase64Plugin()
    ]
});

fuse.devServer(">index.jsx");