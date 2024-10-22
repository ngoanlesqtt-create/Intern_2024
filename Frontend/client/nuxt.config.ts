// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@element-plus/nuxt", "@vee-validate/nuxt"],
  veeValidate:{
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  plugins: [
    "~/plugins/pinia.js", // Đăng ký plugin Pinia
  ],
  app: {
    head: {
      title: "Project",
      meta: [{ name: "description", content: "everything about my project" }],
    },
  },
});
