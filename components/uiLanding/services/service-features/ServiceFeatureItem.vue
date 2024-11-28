<template>
  <div :class="`serviceFeaturesItem ${theme}`">
    <h4 class="serviceFeaturesItem-title">{{ $t(`services.webDevelopment.features.items.featureTitle_item${num}`) }}</h4>

    <div class="serviceFeaturesItem-content">
      <p class="serviceFeaturesItem-content-description">{{ $t(`services.webDevelopment.features.items.featureDescription_item${num}`) }}</p>
      <p class="serviceFeaturesItem-content-num">{{ `0${num}` }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface IProps {
    theme?: 'dark' | 'light',
    num: number
  }

  withDefaults(defineProps<IProps>(), {
    theme: 'dark'
  })
</script>

<style lang="scss" scoped>
.serviceFeaturesItem {
  min-height: 32.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 2rem;

  padding: 2.8rem 3.4rem;

  border-radius: 2rem;
  border: .1rem solid transparent;

  &.light {
    border-color: var(--gray-color-op30);
    background-color: var(--white-color);

    & .serviceFeaturesItem {
      &-title,
      &-content-description,
      &-content-num {
        color: var(--primary-color);
      }
    }
  }

  &.dark {
    border-color: var(--gray-color-op70);
    background-color: var(--primary-color);

    & .serviceFeaturesItem {
      &-title,
      &-content-description,
      &-content-num {
        color: var(--white-color);
      }
    }
  }

  &-title {
    font-size: 2rem;
    font-weight: 500;
  }

  &-content {
    padding-top: 2rem;

    position: relative;

    &::before {
      content: '';

      display: block;
      height: .1rem;
      width: 3.8rem;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      background-color: var(--primary-color);
    }

    &-description {
      margin-bottom: 3rem;
    }

    &-num {
      height: 4rem;
      width: 4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: var(--white-color);

      background-color: var(--primary-color-op5);
      border-radius: 50%;
    }
  }


  // Adaptation
  @media (max-width: 1600px) {
    min-height: 28.6rem;
    grid-gap: 2rem;

    padding: 2.6rem 3rem;

    border-radius: 2rem;

    &-title {
      font-size: 2rem;
    }

    &-content {
      padding-top: 2rem;

      &-description {
        margin-bottom: 2.6rem;
      }

      &-num {
        height: 3.8rem;
        width: 3.8rem;
      }
    }
  }

  @media (max-width: 1400px) {
    min-height: 26.6rem;
    grid-gap: 2rem;

    padding: 2.4rem 2.8rem;

    border-radius: 1.8rem;

    &-title {
      font-size: 2rem;
    }

    &-content {
      padding-top: 1.8rem;

      &-description {
        margin-bottom: 2.2rem;
      }

      &-num {
        height: 3.6rem;
        width: 3.6rem;

        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 1200px) {
    min-height: 26.6rem;
    grid-gap: 1.8rem;

    padding: 2.2rem 2.4rem;

    border-radius: 1.6rem;

    &-title {
      font-size: 2rem;
    }

    &-content {
      padding-top: 1.6rem;

      &-description {
        margin-bottom: 2rem;
      }

      &-num {
        height: 3.4rem;
        width: 3.4rem;

        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 992px) {
    min-height: 25.6rem;
    grid-gap: 1.6rem;

    padding: 2rem 2.2rem;

    border-radius: 1.4rem;

    &-title {
      font-size: 1.8rem;
    }

    &-content {
      padding-top: 1.4rem;

      &-description {
        margin-bottom: 1.8rem;
      }

      &-num {
        height: 3.2rem;
        width: 3.2rem;

        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 768px) {
    min-height: 28.6rem;
    grid-gap: 1.6rem;

    padding: 2rem 2.2rem;

    border-radius: 1.4rem;

    &-content {
      padding-top: 1.4rem;

      &-description {
        margin-bottom: 1.4rem;
      }

      &-num {
        height: 3rem;
        width: 3rem;

        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 380px) {
    min-height: 28.6rem;
    grid-gap: 1.6rem;

    padding: 1.6rem 1.8rem;

    border-radius: 1.4rem;
  }
}
</style>
