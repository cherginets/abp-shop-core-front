import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "ReactTSLib",
      formats: ["es", "umd"],
      fileName: (format) => `react-ts-lib.${format}.js`,
    },
    rollupOptions: {
      external: [
        "next",
        "react",
        "react-dom",
        "styled-components",
        '@emotion/react',
        '@emotion/styled',
        "@mui/material",
        '@mui/icons-material',
      ],
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
