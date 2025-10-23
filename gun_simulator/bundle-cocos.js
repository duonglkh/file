// bundle-cocos.js — bản cho layout có web-mobile/src/*
import SETTINGS from "./web-mobile/src/settings.json" assert { type: "json" };
window._CCSettings = SETTINGS;

// Thứ tự giống index.html của Cocos
import "./web-mobile/src/system.bundle.js";
import "./web-mobile/src/polyfills.bundle.js";

// Bootstrap
import "./web-mobile/index.js";

// Nếu Console báo thiếu engine, thêm dòng sau trước index.js:
// import "./web-mobile/cocos-js/cc.js";
