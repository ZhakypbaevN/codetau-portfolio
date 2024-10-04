<template>
  <section :class="`landing-block aCallToAction ${theme}`">
    <div class="landing-wrapper">
      <div :class="`landing-notesBG ${theme}`">
        <h2 class="aCallToAction-title landing-title center" v-html="$t('aCallToAction.title')"></h2>
        <p class="aCallToAction-description landing-description center">{{ $t('aCallToAction.description') }}</p><br>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  interface IProps {
    theme: 'light' | 'dark'
  }

  withDefaults(defineProps<IProps>(), {
    theme: 'dark'
  })
</script>

<style lang="scss" scoped>
.aCallToAction {
  padding-bottom: 0px !important;
  margin-bottom: 12rem;

  &.light {
    & .aCallToAction-description {
      color: var(--gray-color-op70);
    }
  }

  &-title {
    margin-bottom: .26em;
  }

  &-description {
    max-width: 66rem;

    color: rgba(white, .6);
    margin-bottom: 32px;
  }
}
</style>
