import resolve from "@rollup/plugin-node-resolve"
import replace from '@rollup/plugin-replace';

export default {
  input: "echarts.js",
  output: {
    file: "echarts.bundle.js",
    format: "iife",
    inlineDynamicImports: true,
    sourcemap: false,
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve(),
  ]
}