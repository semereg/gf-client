const { FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin, UglifyJSPlugin } = require("fuse-box");
const { src, task } = require('fuse-box/sparky');

let fuse, app, vendor, isProduction = false;

task("config", () => {
  fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    hash: isProduction,
    sourceMaps: !isProduction,
    plugins: [
      [SassPlugin(), CSSPlugin()],
      CSSPlugin(),
      WebIndexPlugin({path: "."}),
      isProduction && UglifyJSPlugin()
    ]
  });

  // vendor should come first
  vendor = fuse.bundle("vendor")
    .instructions("~ index.ts");

  // out main bundle
  app = fuse.bundle("app")
    .instructions(`!> [index.ts]`);

  if (!isProduction) {
    fuse.dev();
  }
});

// development task "node fuse""
task("default", ["config"], () => {
  vendor.hmr().watch();
  app.watch();
  return fuse.run();
});

// Dist task "node fuse dist"
task("dist", ["clean", "config"], () => {
  return fuse.run();
});

task("clean", () => {
  isProduction = true;
  return src("dist/").clean("dist/");
});

task("test", ["config"], () => {
  return app.test();
});
