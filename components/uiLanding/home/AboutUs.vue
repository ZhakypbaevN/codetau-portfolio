<template>
  <section class="landing-block aboutUs">
    <div class="landing-wrapper">
      <div class="aboutUs-inner">
        <div class="aboutUs-titles">
          <h2 class="aboutUs-title landing-title mini">{{ $t('home.aboutUs.title') }}</h2>
          <p class="aboutUs-description" v-html="$t('home.aboutUs.description')" />
        </div>

        <div class="aboutUs-numbers">
          <div
            v-for="num of numbersList"
            :key="num.title"
            class="aboutUs-numbers-item"
          >
            <h1 class="aboutUs-numbers-item-title">{{ num.title }}</h1>
            <p class="aboutUs-numbers-item-subtitle">{{ num.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const { t } = useI18n()

  const numbersList = [
    {
      title: '12+',
      subtitle: t('aboutUs.numbersItem1')
    },
    {
      title: '20+',
      subtitle: t('aboutUs.numbersItem2')
    },
    {
      title: '5+ лет',
      subtitle: t('aboutUs.numbersItem3')
    }
  ]
</script>

<style lang="scss" scoped>
.aboutUs {
  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-titles {
    max-width: 76rem;
  }

  &-title {
    margin-bottom: 2.8rem;
  }

  &-numbers {
    max-width: 50rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    grid-gap: 4.8rem 8.8rem;

    &-item {
      &-title {
        font-size: 4.2rem;
        font-weight: 700;
        white-space: nowrap;
        margin-bottom: .6rem;
      }

      &-subtitle {
        white-space: nowrap;
      }

      &:last-child {
        grid-column: 2/3;
      }
    }
  }
}
</style>
