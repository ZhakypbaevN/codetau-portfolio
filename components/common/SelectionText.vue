<template>
  <h2 class="selectionText" v-html="titleHtml"></h2>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    title: string;
    startIdx?: number;
    endIdx?: number;
  }

  const props = defineProps<Props>();

  const titleHtml = computed(() => {
    const { title, startIdx, endIdx } = props;

    function insertStringAtIndex(originalString: string, start: number, end: number) {
      return (
        originalString.slice(0, start) +
        `<span class="${endIdx ? 'selectionText-select' : 'full'}"><span class="selectionText-container"><span class="selectionText-corner"></span><span class="selectionText-corner"></span><span class="selectionText-corner"></span><span class="selectionText-corner"></span></span>` +
        originalString.slice(start, end) +
        `</span>` +
        originalString.slice(end)
      );
    }

    return insertStringAtIndex(title, startIdx ?? 0, endIdx ?? title.length);
  });
</script>


<style lang="scss">
.selectionText {
  position: relative;

  & .full .selectionText-container {
    width: calc(100% + 4rem);
    height: calc(100% + 2rem);
  }

  &-select {
    display: inline-block;
    position: relative;
  }

  &-container {
    content: '';

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    display: block;
    width: calc(100% + 1.8rem);
    height: calc(100% + 1.8rem);
    
    border: 2px solid var(--blue-light-v2-color);
  }

  &-corner {
    height: 1.4rem;
    width: 1.4rem;

    border: 2px solid var(--blue-light-v2-color);
    background-color: var(--white-color);

    position: absolute;
  }

  &-corner:nth-child(1) {
    top: -.8rem;
    left: -.8rem;
  }

  &-corner:nth-child(2) {
    top: -.8rem;
    right: -.8rem;
  }

  &-corner:nth-child(3) {
    bottom: -.8rem;
    left: -.8rem;
  }

  &-corner:nth-child(4) {
    bottom: -.8rem;
    right: -.8rem;
  }

  // Adaptation
  @media (max-width: 1400px) {
    & .full .selectionText-container {
      width: calc(100% + 3.2rem);
      height: calc(100% + 1.8rem);
    }

    &-container {
      width: calc(100% + 1.8rem);
      height: calc(100% + 1.2rem);
      
      border-width: 2px;
    }

    &-corner {
      height: 1.4rem;
      width: 1.4rem;

      border-width: 2px;
    }

    &-corner:nth-child(1) {
      top: -.8rem;
      left: -.8rem;
    }

    &-corner:nth-child(2) {
      top: -.8rem;
      right: -.8rem;
    }

    &-corner:nth-child(3) {
      bottom: -.8rem;
      left: -.8rem;
    }

    &-corner:nth-child(4) {
      bottom: -.8rem;
      right: -.8rem;
    }
  }

  @media (max-width: 1200px) {
    & .full .selectionText-container {
      width: calc(100% + 3rem);
      height: calc(100% + 1.8rem);
    }

    &-container {
      width: calc(100% + 1.2rem);
      height: calc(100% + 1.2rem);
      
      border-width: 2px;
    }

    &-corner {
      height: 1.4rem;
      width: 1.4rem;

      border-width: 2px;
    }

    &-corner:nth-child(1) {
      top: -.8rem;
      left: -.8rem;
    }

    &-corner:nth-child(2) {
      top: -.8rem;
      right: -.8rem;
    }

    &-corner:nth-child(3) {
      bottom: -.8rem;
      left: -.8rem;
    }

    &-corner:nth-child(4) {
      bottom: -.8rem;
      right: -.8rem;
    }
  }

  @media (max-width: 992px) {
    & .full .selectionText-container {
      width: calc(100% + 2.8rem);
      height: calc(100% + 1.8rem);
    }

    &-container {
      width: calc(100% + 1.1rem);
      height: calc(100% + 1rem);
      
      border-width: 2px;
    }

    &-corner {
      height: 1.2rem;
      width: 1.2rem;

      border-width: 2px;
    }

    &-corner:nth-child(1) {
      top: -.6rem;
      left: -.6rem;
    }

    &-corner:nth-child(2) {
      top: -.6rem;
      right: -.6rem;
    }

    &-corner:nth-child(3) {
      bottom: -.6rem;
      left: -.6rem;
    }

    &-corner:nth-child(4) {
      bottom: -.6rem;
      right: -.6rem;
    }
  }

  @media (max-width: 768px) {
    & .full .selectionText-container {
      width: calc(100% + 2.8rem);
      height: calc(100% + 1.8rem);
    }

    &-container {
      width: calc(100% + .8rem);
      height: calc(100% + .8rem);
      
      border-width: 1.6px;
    }

    &-corner {
      height: 1rem;
      width: 1rem;

      border-width: 1.6px;
    }

    &-corner:nth-child(1) {
      top: -.5rem;
      left: -.5rem;
    }

    &-corner:nth-child(2) {
      top: -.5rem;
      right: -.5rem;
    }

    &-corner:nth-child(3) {
      bottom: -.5rem;
      left: -.5rem;
    }

    &-corner:nth-child(4) {
      bottom: -.5rem;
      right: -.5rem;
    }
  }

  @media (max-width: 576px) {
    & .full .selectionText-container {
      width: calc(100% + 2.8rem);
      height: calc(100% + 1.6rem);
    }

    &-container {
      width: calc(100% + .6rem);
      height: calc(100% + .6rem);
      
      border-width: 1.6px;
    }

    &-corner {
      height: .8rem;
      width: .8rem;

      border-width: 1.6px;
    }

    &-corner:nth-child(1) {
      top: -.4rem;
      left: -.4rem;
    }

    &-corner:nth-child(2) {
      top: -.4rem;
      right: -.4rem;
    }

    &-corner:nth-child(3) {
      bottom: -.4rem;
      left: -.4rem;
    }

    &-corner:nth-child(4) {
      bottom: -.4rem;
      right: -.4rem;
    }
  }

  @media (max-width: 380px) {
    & .full .selectionText-container {
      width: calc(100% + 2.8rem);
      height: calc(100% + 1.8rem);
    }
  }
}
</style>