<template>
  <section class="landing-block projectsSlider">
    <div class="landing-wrapper">
      <div class="projectsSlider-inner landing-notesBG dark">
        <h2 class="projectsSlider-title landing-title center">{{ $t('projects.title') }}</h2><br>

        <div class="projectsSlider-slider slider">
          <div class="projectsSlider-slider-control slider-control">
            <button class="slider-control-btn">
              <SvgIcon
                class="slider-control-btn-icon"
                name="slider-arrow-prev"
                :viewboxWidth="24"
                :viewboxHeight="24"
              />
            </button>

            <button class="slider-control-btn">
              <SvgIcon
                class="slider-control-btn-icon"
                name="slider-arrow-next"
                :viewboxWidth="24"
                :viewboxHeight="24"
              />
            </button>
          </div>

          <div class="projectsSlider-slider-list slider-list">
            <div
              v-for="item in 10"
              :key="item"
              class="projectsSliderItem"
            >
              <div class="projectsSliderItem-preview bg-cover" :style="{backgroundImage: `url(${'/assets/img/services/service-3.jpg'})`}"></div>

              <div class="projectsSliderItem-categories">
                <h5 class="projectsSliderItem-categories-item">UI/UX Дизайн</h5>
                <h5 class="projectsSliderItem-categories-item">Разработка веб-сайта</h5>
                <h5 class="projectsSliderItem-categories-item">Мобильное приложение</h5>
              </div>

              <h3 class="projectsSliderItem-title">Xcmg XuGong Kz - Booking system</h3>
            </div>
          </div>

          <div class="slider-scrollbar">
            <button class="slider-scrollbar-track"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.projectsSliderItem {
  min-width: 49rem;
  width: 49rem;
  padding: 1.4rem 1.4rem 2rem;
  
  border-radius: 2.8rem;
  background-color: var(--gray-dark-color);

  &-preview {
    border-radius: 1.4rem;
    
    padding-bottom: 60%;
    margin-bottom: 2rem;
  }

  &-categories {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1rem;
    margin-bottom: 1.2rem;

    &-item {
      color: var(--gray-color);
      font-size: 1.2rem;
      font-family: var(--secondary-font);

      padding: .3rem .6rem;

      border-radius: .24rem;
      background-color: var(--gray-color-op20);
    }
  }

  &-title {
    font-size: 2.4rem;
    font-weight: 600;
  }
}

.projectsSlider {
  &-title {
    max-width: 99.2rem;
    padding-left: 2.6rem;
  }

  &-inner {
    padding-top: 8rem;
    padding-bottom: 6rem;
  }
  
  &-slider {
    &-list {
      margin-bottom: 4.8rem;
    }

    &-listItem {
      min-height: 28.6rem;
      width: 46rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding: 2.8rem 3.4rem;

      border-radius: 2rem;
      border: .1rem solid var(--gray-color-op70);
      background-color: var(--primary-color);

      &-content {
        padding-left: 2.5rem;
        position: relative;

        &::before {
          content: '';

          display: block;
          height: 0.7rem;
          width: 0.7rem;

          position: absolute;
          top: 1rem;
          left: 0;
          z-index: 1;

          border-radius: 1rem;
          background-color: var(--accent-color);
        }
      }

      &-title {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: .9em;
      }
    }
  }
}
</style>
