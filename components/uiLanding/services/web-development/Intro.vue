<template>
  <div class="landing-wrapper">
    <div class="webDevelopmentIntro-titles">
      <h2 class="webDevelopmentIntro-titles-title landing-title mini">{{ $t('services.webDevelopment.intro.title') }}</h2>
      <p class="webDevelopmentIntro-titles-description landing-description">{{ $t('services.webDevelopment.intro.description') }}</p>
    </div>
  </div>

</template>

<script lang="ts" setup>
  import HeaderLanding from '@/components/uiLanding/layouts/HeaderLanding.vue';
</script>

<style lang="scss" scoped>
.webDevelopmentIntro {
  &-titles {
    display: grid;
    grid-template-columns: 1fr 62rem;
    grid-gap: 2.6rem;

    margin-bottom: 6rem;

    * {
      margin-bottom: 0px;
    }
  }
}
</style>
