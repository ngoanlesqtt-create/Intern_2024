import { ElButton, ElSelect, ElInput } from "element-plus";
import "element-plus/theme-chalk/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElButton);
  nuxtApp.vueApp.use(ElSelect);
  nuxtApp.vueApp.use(ElInput);
});
