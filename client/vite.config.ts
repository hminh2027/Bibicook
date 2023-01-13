/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";
// https://vitejs.dev/config/
// Load env file based on `mode` in the current working directory.
// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      proxy: {
        "/api": "Enter your backend host with port",
      },
    },
    plugins: [
      react(),

      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
    // resolve: {
    //   alias: [
    //     {
    //       find: "@utils",
    //       replacement: "src/utils",
    //     },
    //     {
    //       find: "@services",
    //       replacement: "src/services",
    //     },
    //     {
    //       find: "@components",
    //       replacement: "src/components",
    //     },
    //   ],
    // },
  });
};
