import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  sourcemap: true,
  clean: true,
  format: ["esm"],
  dts: {
    resolve: true,
  },
  external: ["dotenv", "fs", "path", "https", "http", "agentkeepalive", "@elizaos/core"],
});
