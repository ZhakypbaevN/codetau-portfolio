<template>
  <section class="landing-block whyChooseUs">
    <div class="landing-wrapper">
      <div class="whyChooseUs-inner landing-notesBG dark">
        <h2 class="whyChooseUs-title landing-title">{{ $t('home.whyChooseUs.title') }}</h2><br>

        <div class="whyChooseUs-slider slider">
          <div class="whyChooseUs-slider-control slider-control">
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

          <div class="whyChooseUs-slider-list slider-list">
            <div
              v-for="num in 7"
              class="whyChooseUs-slider-listItem"
            >
              <div class="whyChooseUs-slider-listItem-content">
                <h4 class="whyChooseUs-slider-listItem-title">{{ $t(`home.whyChooseUs.features.featureTitle_item${num}`) }}</h4>

                <p class="whyChooseUs-slider-listItem-description">{{ $t(`home.whyChooseUs.features.featureDescription_item${num}`) }}</p>
              </div>

              <p class="whyChooseUs-slider-listItem-num">{{ `0${num}` }}</p>
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
.whyChooseUs {
  &-title {
    max-width: 12.3em;
    padding-left: 2.6rem;
  }

  &-inner {
    align-items: start;
    padding-top: 8rem;
    padding-bottom: 6rem;
  }
  
  &-slider {
    &-list {
      margin-bottom: 4.8rem;
    }

    &-listItem {
      min-height: 28.6rem;
      min-width: 46rem;
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
