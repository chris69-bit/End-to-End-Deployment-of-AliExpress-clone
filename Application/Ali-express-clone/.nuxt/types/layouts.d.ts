import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "main-layout"
declare module "/home/chris/Documents/guide_files/DevOps_Projects/ProjectTwelveofTwenty/Ali-express-clone/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}