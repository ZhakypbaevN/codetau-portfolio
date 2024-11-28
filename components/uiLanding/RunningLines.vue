<template>
  <section :class="`runningLines ${type}`">
    <div
      v-for="(type, index) in ['left', 'right']"
      :key="type"
      :class="`runningLines-slider ${type} ${theme}`"
    >
      <div class="runningLines-slider-content">
        <div
          v-for="(title, i) in textsList"
          :key="`${title}-${index}-${i}`"
          class="runningLines-slider-title"
        >
          {{ title }}
        </div>
        <div
          v-for="(title, i) in textsList"
          :key="`${title}-duplicate-${index}-${i}`"
          class="runningLines-slider-title"
        >
          {{ title }}
        </div>
      </div>
    </div>

    <div class="runningLines-bg"></div>
  </section>
</template>

<script lang="ts" setup>
interface IProps {
  theme?: 'fill' | 'outline';
  type?: 'fly' | 'static'
}

withDefaults(defineProps<IProps>(), {
  theme: 'fill',
  type: 'fly',
});

const textsList = [
  'Нативные приложения',
  'Веб-разработка',
  'UX/UI дизайн',
  'Оптимизация кода',
  'Современные технологии',
  'Agile методология',
  'Тестирование на всех этапах',
  'API интеграция',
  'Доступность для всех устройств',
  'Разработка на Flutter',
  'Полная кастомизация',
  'Адаптивный дизайн',
  'SEO Оптимизация'
];
</script>

<style lang="scss" scoped>
.runningLines {
  width: 100%;
  height: 14.2rem;
  max-height: 14.2rem;

  position: relative;
  z-index: 2;

  &.fly {
    margin: -7.1rem 0;
  }

  &.static {
    margin: 3rem 0 5rem;
  }

  &-slider {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;

    &-content {
      display: inline-block;
      white-space: nowrap;
    }

    &-title {
      display: inline-block;
      padding: 1.4rem 6rem;
      font-size: 2.2rem;
      font-weight: 500;
      text-transform: uppercase;
      white-space: nowrap;
    }

    &.left {
      transform: rotate(-3deg);
      top: 30%;

      & .runningLines-slider-content {
        animation: infinite-scroll-reverse 140s linear infinite;
      }
    }

    &.right {
      transform: rotate(3deg);
      bottom: 30%;

      & .runningLines-slider-content {
        animation: infinite-scroll 140s linear infinite;
      }
    }

    &.fill {
      background-color: var(--blue-light-color);
      box-shadow: 0 0 2rem 0 rgb(0 0 0 / 10%);

      & .runningLines-slider-title {
        color: var(--white-color);
      }
    }

    &.outline {
      background-color: var(--white-color);
      border-top: 1px solid var(--blue-light-color);
      border-bottom: 1px solid var(--blue-light-color);
      box-shadow: 0 0 1rem 0 rgb(0 0 0 / 8%);

      & .runningLines-slider-title {
        color: var(--blue-light-color);
      }
    }
  }

  &-bg {
    height: 5rem;
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    transform: translateY(-50%);
    background-color: var(--white-color);
  }


  // Adaptation
  @media (max-width: 1400px) {
    height: 12.2rem;
    max-height: 12.2rem;

    &.fly {
      margin: -6.1rem 0;
    }

    &.static {
      margin: 3rem 0 5rem;
    }

    &-slider {
      &-title {
        padding: 1.2rem 5.8rem;
        font-size: 2rem;
      }

      &.left {
        transform: rotate(-3deg);
        top: 30%;
      }

      &.right {
        transform: rotate(3deg);
        bottom: 30%;
      }
    }

    &-bg {
      height: 5rem;
    }
  }

  @media (max-width: 1200px) {
    height: 10.8rem;
    max-height: 10.8rem;

    &.fly {
      margin: -5.4rem 0;
    }

    &.static {
      margin: 2.8rem 0 4.4rem;
    }

    &-slider {
      &-title {
        padding: 1.1rem 5rem;
        font-size: 1.8rem;
      }

      &.left {
        transform: rotate(-3deg);
        top: 30%;
      }

      &.right {
        transform: rotate(3deg);
        bottom: 30%;
      }
    }

    &-bg {
      height: 4rem;
    }
  }

  @media (max-width: 992px) {
    height: 9.8rem;
    max-height: 9.8rem;

    &.fly {
      margin: -4.9rem 0;
    }

    &.static {
      margin: 2.6rem 0 4rem;
    }

    &-slider {
      &-title {
        padding: 1rem 4rem;
        font-size: 1.6rem;
      }

      &.left {
        transform: rotate(-3.6deg);
        top: 30%;
      }

      &.right {
        transform: rotate(3.6deg);
        bottom: 30%;
      }
    }
  }

  @media (max-width: 768px) {
    height: 8.8rem;
    max-height: 8.8rem;

    &.fly {
      margin: -4.4rem 0;
    }

    &.static {
      margin: 2.4rem 0 3.6rem;
    }

    &-slider {
      &-title {
        padding: 1rem 3.4rem;
        font-size: 1.4rem;
      }

      &.left {
        transform: rotate(-4.4deg);
        top: 27.5%;
      }

      &.right {
        transform: rotate(4.4deg);
        bottom: 27.5%;
      }
    }

    &-bg {
      height: 3rem;
    }
  }

  @media (max-width: 576px) {
    height: 7.6rem;
    max-height: 7.6rem;

    &.fly {
      margin: -3.8rem 0;
    }

    &.static {
      margin: 2.2rem 0 3.4rem;
    }

    &-slider {
      &-title {
        padding: .8rem 3rem;
        font-size: 1.2rem;
      }

      &.left {
        transform: rotate(-5.6deg);
        top: 31%;
      }

      &.right {
        transform: rotate(5.6deg);
        bottom: 31%;
      }
    }

    &-bg {
      height: 3rem;
    }
  }

  @media (max-width: 380px) {
    height: 7.6rem;
    max-height: 7.6rem;

    &.fly {
      margin: -3.8rem 0;
    }

    &.static {
      margin: 2.2rem 0 3.4rem;
    }

    &-slider {
      &-title {
        padding: .8rem 3rem;
        font-size: 1.2rem;
      }

      &.left {
        transform: rotate(-6.2deg);
        top: 28%;
      }

      &.right {
        transform: rotate(6.2deg);
        bottom: 30.8%;
      }
    }

    &-bg {
      height: 2.4rem;
    }
  }
}

@keyframes infinite-scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-80%);
  }
}

@keyframes infinite-scroll-reverse {
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>