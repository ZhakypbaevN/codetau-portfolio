<template>
  <section class="intro">
    <div class="landing-wrapper">
      <div class="intro-inner">
        <h2 class="intro-title">
          Превратите идеи в жизнь <br>
          с помощью <br>
          уникальных IT-решений.
        </h2>

        <p class="intro-subtitle">Мы создаем сайты, сложные системы и мобильные приложения, которые соответствуют уникальным требованиям вашего бизнеса</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.intro {
  width: 100%;
  min-height: calc(100vh + 80px);
  background-color: #D7D3EA;

  &-inner {
    padding: 280px 0;
  }

  &-title {
    max-width: 1000px;
    
    font-size: 48px;
    font-weight: 600;
    line-height: 80px;
    color: var(--primary-color);
    letter-spacing: 1.4%;

    margin-bottom: 28px;
  }

  &-subtitle {
    max-width: 820px;
    font-size: 20px;
  }
}
</style>
