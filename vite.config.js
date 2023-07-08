import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     // process: "process/browser",
  //     find: "stream",
  //     replacement: `stream-browserify`,
  //     // stream: "stream-browserify",
  //     // zlib: "browserify-zlib",
  //     // util: "util",
  //   },
  // },
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "./lib-cov/fluent-ffmpeg": "./lib/fluent-ffmpeg",
  //   },
  // },
  // define: {
  //   "process.env.FLUENTFFMPEG_COV": undefined,
  // },
  // define: {
  //   // "process.env.FLUENTFFMPEG_COV": false,
  //   // FLUENTFFMPEG_COV: false,
  //   // "import.meta.env.FLUENTFFMPEG_COV": false,
  //   "process.env.FLUENTFFMPEG_COV": "0",
  //   FLUENTFFMPEG_COV: "0",
  //   "import.meta.env.FLUENTFFMPEG_COV": "0",
  // },
});
