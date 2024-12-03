// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en", // Définit la langue en français
      },
      title: "Florian Budniewski",
      meta: [
        {
          name: "Florian Buniewski's",
          content:
            "Welcome to Florian Budniewski's Frontend Developper Portfolio. Learn more about my education, my career, my skills, or my projects !",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, // Remplacez par votre fichier si nécessaire
      ],
    },
  },
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/image",
    "nuxt-viewport",
  ],
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },

    defaultBreakpoints: {
      desktop: "lg",
      mobile: "xs",
      tablet: "md",
    },

    fallbackBreakpoint: "lg",
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
