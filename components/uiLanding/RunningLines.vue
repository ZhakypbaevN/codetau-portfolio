<template>
  <section class="runningLines">
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
  theme: 'fill' | 'outline';
}

withDefaults(defineProps<IProps>(), {
  theme: 'fill'
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

  margin: -7rem 0;
  position: relative;
  z-index: 2;

  &-slider {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    box-shadow: 0 0 2rem 0 rgb(0 0 0 / 10%);

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

      & .runningLines-slider-title {
        color: var(--white-color);
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