<template>
  <h5 :class="`tagItem ${type} ${theme} ${size}`">{{ name }}</h5>
</template>

<script lang="ts" setup>
  interface IProps {
    theme?: 'dark' | 'light',
    type?: 'outlined' | 'fill',
    size?: 'defaultSize' | 'middle' | 'big',
    name: String
  }

  withDefaults(defineProps<IProps>(), {
    type: 'outlined',
    theme: 'light'
  })
</script>

<style lang="scss" scoped>
.tagItem {
  color: var(--gray-color);
  font-size: 1.2rem;
  font-family: var(--secondary-font);
  text-wrap: nowrap;

  &.outlined {
    padding: .3rem .6rem;

    border-radius: .3rem;
    border: 1px solid var(--gray-color-op20);
  }

  &.fill {
    padding: .3rem 1rem .24rem;
    border-radius: 10rem;
    background-color: var(--primary-color-op5);

    &.dark {
      border-radius: .3rem;
      background-color: var(--gray-color-op20);
    }
  }

  &.middle {
    padding: 1rem 2rem;
    border-radius: 10rem;

    font-size: 1.8rem;
  }

  &.big {
    padding: 1.2rem 2.8rem;
    border-radius: 10rem;

    font-size: 1.8rem;
  }

  // Adaptation
  @media (max-width: 992px) {
    &.big {
      padding: 1rem 2.4rem;
      font-size: 1.6rem;
    }

    &.middle {
      padding: .8rem 1.8rem;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    &.big {
      padding: .8rem 2.2rem;
      font-size: 1.6rem;
    }

    &.middle {
      padding: .7rem 1.8rem;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;

    &.outlined {
      padding: .2rem .4rem;

      border-radius: .2rem;
    }

    &.fill {
      padding: .2rem .8rem .2rem;
    }

    &.big {
      padding: .8rem 1.7rem;
      font-size: 1.4rem;
    }

    &.middle {
      padding: .7rem 1.6rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 380px) {
    &.big {
      padding: .7rem 1.4rem;
      font-size: 1.2rem;
    }

    &.middle {
      padding: .6rem 1.4rem;
      font-size: 1.2rem;
    }
  }
}
</style>