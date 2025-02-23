// rollup.config.js
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const url = require("@rollup/plugin-url");
const svgr = require("@svgr/rollup");
const terser = require("@rollup/plugin-terser");
const dts = require("rollup-plugin-dts").default;
// const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
      },
    ],
    external: ["react"],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extract: "index.css",
        modules: true,
        use: ["sass"],
        minimize: true,
      }),
      url(),
      svgr({ icon: true }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist/types",
      format: "esm",
    },
    external: [/\.(css|scss)$/],
    plugins: [dts()],
  },
];
