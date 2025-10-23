// build.mjs
// Usage: node build.mjs
// Output: ./playable.js (single JS you will host on CDN)

import { build } from "esbuild";

await build({
  entryPoints: ["./bundle-cocos.js"],
  bundle: true,
  format: "iife",
  minify: true,
  outfile: "playable.js",
  target: ["es2018"],
  loader: { ".json": "json" },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  // If your Cocos build uses dynamic import inside engine addons,
  // you may need to mark some modules external. Uncomment if needed:
  // external: ["fs", "path"],
});

console.log("✅ Built playable.js");