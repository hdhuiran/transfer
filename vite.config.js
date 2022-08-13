import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 添加后缀识别
  resolve: {
    extensions: [".vue", ".js"],
  },
});
