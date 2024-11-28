import { defineNuxtPlugin } from '#app';
import collapse from '@/directives/collapse';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('collapse', collapse);
});