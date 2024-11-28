<template>
  <div :class="classMainName" v-html="iconHtml"></div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import iconsJSON from "@/helpers/icons.json";

  interface Props {
    name: string;
    fill?: string;
    className?: string;
    classMainName?: string;
  }

  const props = defineProps<Props>();

  const iconHtml = computed(() => {
    const { name, fill, className } = props;

    function insertStringAtIndex(originalString: string) {
      let stringToInsert = ' ';
      if (className) stringToInsert += `class="${className}" `;
      if (fill) stringToInsert += `fill="${fill}" `;
      return originalString.slice(0, 4) + stringToInsert + originalString.slice(4);
    }

    return insertStringAtIndex(iconsJSON[name]);
  });
</script>
