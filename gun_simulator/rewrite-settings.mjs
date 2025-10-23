// rewrite-settings.mjs
// Purpose: After Cocos build, rewrite settings.json to use absolute CDN urls
// so that all assets are loaded from your CDN rather than relative paths.
// Usage: node rewrite-settings.mjs "https://cdn.example.com/mygame/v1/"
//
// It will update importBase/nativeBase entries in `build/web-mobile/settings.json`

import fs from "fs";
import path from "path";

const CDN_BASE = (process.argv[2] || "").trim();
if (!CDN_BASE) {
  console.error("❌ Provide CDN_BASE, e.g.: node rewrite-settings.mjs https://cdn.example.com/mygame/v1/");
  process.exit(1);
}

const settingsPath = path.resolve("../build/web-mobile/settings.json");
if (!fs.existsSync(settingsPath)) {
  console.error("❌ settings.json not found at", settingsPath);
  process.exit(1);
}

const raw = fs.readFileSync(settingsPath, "utf8");
const json = JSON.parse(raw);

// Typical keys in Cocos 3.8 settings.json
// Ensure trailing slashes
function join(base, sub) {
  base = base.endsWith("/") ? base : base + "/";
  return base + sub.replace(/^\/+/, "");
}

if (json.importBase) json.importBase = join(CDN_BASE, "assets/import");
if (json.nativeBase) json.nativeBase = join(CDN_BASE, "assets/native");
if (json.server)     json.server     = CDN_BASE.endsWith("/") ? CDN_BASE : (CDN_BASE + "/");

fs.writeFileSync(settingsPath, JSON.stringify(json));
console.log("✅ Rewrote settings.json with CDN_BASE:", CDN_BASE);