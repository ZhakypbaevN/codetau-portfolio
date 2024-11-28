<template>
  <section class="designFeatures landing-block">
    <div class="landing-wrapper">
      <h2 class="designFeatures-title landing-title mini">
        {{ $t('services.designDevelopment.technologies.titleFirst') }}<br />
        {{ $t('services.designDevelopment.technologies.titleSecond') }}
      </h2>

      <div class="designFeatures-tags">
        <Tag
          v-for="tagItem of technologiesList"
          :key="tagItem"
          :name="tagItem"
          type="fill"
          size="big"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const technologiesList = [
    'Figma',
    'Photoshop',
    'Illustrator',
    'Брендинг | Ребрендинг',
    'Айдентика',
    'Типографика',
    'Колористика',
    'Адаптивный веб-дизайн',
    'UI-Kit',
    'Анализ ЦА',
    'Гипотезы',
    'Анимация',
    'Исследования',
    'Композиция',
    'Конкурентный анализ',
    'Вайрфреймы',
    'Аудит юзабилити',
    'Приложения',
    'Веб-сайты',
    'Лендинги',
    'Прототипы',
    'Гайдлайны'
  ];
</script>

<style lang="scss" scoped>
.designFeatures {
  &-title {
    margin-bottom: 6rem;
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 2.4rem 1.8rem;
  }

  // Adaptation
  @media (max-width: 1200px) {
    &-title {
      margin-bottom: 5rem;
    }

    &-tags {
      grid-gap: 2.2rem 1.6rem;
    }
  }

  @media (max-width: 992px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-tags {
      grid-gap: 2.2rem 1.6rem;
    }
  }

  @media (max-width: 768px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-tags {
      grid-gap: 2rem 1.4rem;
    }
  }

  @media (max-width: 576px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-tags {
      grid-gap: 1.8rem 1.2rem;
    }
  }

  @media (max-width: 380px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-tags {
      grid-gap: 1.4rem 1rem;
    }
  }
}
</style>
