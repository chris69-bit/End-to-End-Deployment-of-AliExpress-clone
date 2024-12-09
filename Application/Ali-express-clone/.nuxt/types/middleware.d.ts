import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/home/chris/Documents/guide_files/DevOps_Projects/ProjectTwelveofTwenty/Ali-express-clone/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}