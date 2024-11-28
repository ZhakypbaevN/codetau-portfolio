<template>
  <section :class="`landing-block whyChooseUs ${theme}`">
    <div class="landing-wrapper">
      <div :class="`whyChooseUs-inner landing-notesBG ${theme}`">

        <SelectionText
          class="whyChooseUs-title landing-title"
          :title="$t('home.whyChooseUs.title')"
        />

        <Comment
          class="whyChooseUs-titles-comment first"
          :title="$t('comments.what_makes_us_unique')"
          theme="dark"
        />
        <Comment
          class="whyChooseUs-titles-comment second"
          :title="$t('comments.benefits_of_working_with_us')"
        />

        <div class="whyChooseUs-slider slider">
          <div :class="`whyChooseUs-slider-control slider-control ${theme}`">
            <button ref="prevButton" class="slider-control-btn">
              <SvgIcon
                classMainName="slider-control-btn-icon"
                name="slider-arrow-prev"
              />
            </button>

            <button
              ref="nextButton"
              class="slider-control-btn"
            >
              <SvgIcon
                classMainName="slider-control-btn-icon"
                name="slider-arrow-next"
              />
            </button>
          </div>

          <div class="whyChooseUs-slider-inner">
            <Swiper
              :scrollbar="{
                hide: false,
                draggable : true,
                snapOnRelease: true,
                dragSize: 'auto',
                el: sliderScrollbar
              }"
              :navigation="{
                prevEl: prevButton,
                nextEl: nextButton
              }"
              :mousewheel="{
                forceToAxis: true
              }"
              :slidesPerView="'auto'"
              :spaceBetween="30"
              :modules="[Mousewheel, Scrollbar, Navigation]"
              class="whyChooseUs-slider-list"
            >
              <SwiperSlide
                v-for="num in 7"
                v-bind:key="num"
                class="whyChooseUs-slider-listItem"
              >
                <div class="whyChooseUs-slider-listItem-content" :key="num">
                  <h4 class="whyChooseUs-slider-listItem-title">{{ $t(`home.whyChooseUs.features.featureTitle_item${num}`) }}</h4>

                  <p class="whyChooseUs-slider-listItem-description">{{ $t(`home.whyChooseUs.features.featureDescription_item${num}`) }}</p>
                </div>

                <p class="whyChooseUs-slider-listItem-num">{{ `0${num}` }}</p>
              </SwiperSlide>
            </Swiper>
          </div>

          <div ref="sliderScrollbar" :class="`slider-scrollbar ${theme}`"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Scrollbar, Navigation } from 'swiper/modules';

  interface IProps {
    theme?: 'dark' | 'light',
  }

  withDefaults(defineProps<IProps>(), {
    theme: 'dark'
  })

  const sliderScrollbar = ref(null)
  const prevButton = ref(null);
  const nextButton = ref(null);
</script>

<style lang="scss" scoped>
@import 'swiper/css';
@import 'swiper/css/scrollbar';
@import 'swiper/css/navigation';

.whyChooseUs {
  &-title {
    padding: 0 2.6rem;
  }

  &-titles-comment {
    position: absolute;
    z-index: 2;

    &.first {
      top: 14%;
      left: 64%;
      transform: translate(-86%, -36%);
    }

    &.second {
      top: 24%;
      left: 72%;
      transform: translate(-16%, -28%);
    }
  }

  &-inner {
    align-items: start;
    padding-top: 8rem;
    padding-bottom: 6rem;
  }
  
  &-slider {
    &-control {
      display: flex;
      justify-content: end;
    }

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
      grid-gap: 1rem;

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

      &-description {
        color: var(--white-color-op80);
      }
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    &-title {
      padding: 0 2.2rem;
    }

    &-titles-comment {
      &.first {
        top: 14%;
        left: 74%;
        transform: translate(-86%, 26%);
      }

      &.second {
        top: 24%;
        left: 78%;
        transform: translate(-16%, -22%);
      }
    }

    &-inner {
      padding-top: 7rem;
      padding-bottom: 5rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 4.6rem;
      }

      &-listItem {
        min-height: 26rem;
        min-width: 44rem;
        width: 44rem;

        padding: 2.6rem 3.2rem;

        border-radius: 1.8rem;

        &-content {
          padding-left: 2.5rem;

          &::before {
            height: 0.7rem;
            width: 0.7rem;
            border-radius: 1rem;
          }
        }

        &-title {
          font-size: 2rem;
          margin-bottom: .9em;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    &-title {
      padding: 0 1.8rem;
    }

    &-titles-comment {
      &.first {
        top: 14%;
        left: 74%;
        transform: translate(-86%, 26%);
      }

      &.second {
        top: 24%;
        left: 78%;
        transform: translate(-16%, -22%);
      }
    }

    &-inner {
      padding-top: 7rem;
      padding-bottom: 5rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 4.4rem;
      }

      &-listItem {
        min-height: 26rem;
        min-width: 40rem;
        width: 40rem;

        padding: 2.4rem 3rem;

        border-radius: 1.6rem;

        &-content {
          padding-left: 2.2rem;

          &::before {
            height: 0.6rem;
            width: 0.6rem;
          }
        }

        &-title {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media (max-width: 992px) {
    &-title {
      padding: 0 1rem;
    }

    &-titles-comment {
      &.first {
        top: 14%;
        left: 71%;
        transform: translate(-86%, 29%);
      }

      &.second {
        top: 21%;
        left: 76%;
        transform: translate(-79%, -24%);
      }
    }

    &-inner {
      padding-top: 6rem;
      padding-bottom: 4rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 4rem;
      }

      &-listItem {
        min-height: 26rem;
        min-width: 40rem;
        width: 40rem;

        padding: 2.2rem 2.6rem;

        border-radius: 1.4rem;

        &-content {
          padding-left: 2rem;

          &::before {
            height: 0.6rem;
            width: 0.6rem;
          }
        }

        &-title {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    &-title {
      padding: 0 1rem;
    }

    &-titles-comment {
      &.first {
        top: -3.2rem;
        left: 38%;
        transform: translateX(62%);
      }

      &.second {
        top: 1rem;
        left: 55%;
        transform: translateX(-45%);
      }
    }

    &-inner {
      padding-top: 5rem;
      padding-bottom: 3rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 3.6rem;
      }

      &-listItem {
        min-height: 26rem;
        min-width: 40rem;
        width: 40rem;

        padding: 2rem 2.4rem;

        border-radius: 1.4rem;

        &-content {
          padding-left: 2rem;

          &::before {
            height: 0.6rem;
            width: 0.6rem;
          }
        }

        &-title {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media (max-width: 576px) {
    &-title {
      padding: 0;
    }

    &-titles-comment {
      &.first {
        top: -3.2rem;
        left: 32%;
        transform: translateX(68%);
      }

      &.second {
        top: 1rem;
        left: 55%;
        transform: translateX(-45%);
      }
    }

    &-inner {
      padding-top: 4rem;
      padding-bottom: 2.8rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 3.4rem;
      }

      &-listItem {
        min-height: 32rem;
        min-width: 30rem;
        width: 30rem;

        padding: 1.8rem 2rem;

        border-radius: 1.4rem;

        &-content {
          padding-left: 1.8rem;

          &::before {
            height: 0.6rem;
            width: 0.6rem;
          }
        }

        &-title {
          font-size: 1.6rem;
        }
      }
    }
  }

  @media (max-width: 380px) {
    &-title {
      padding: 0;
    }

    &-titles-comment {
      &.first {
        top: -3.2rem;
        left: 32%;
        transform: translateX(68%);
      }

      &.second {
        top: 1rem;
        left: 55%;
        transform: translateX(-45%);
      }
    }

    &-inner {
      padding-top: 4rem;
      padding-bottom: 2.8rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 3rem;
      }

      &-listItem {
        min-height: 38rem;
        min-width: 27rem;
        width: 27rem;

        padding: 1.6rem 1.8rem;

        border-radius: 1.2rem;

        &-content {
          padding-left: 1.6rem;

          &::before {
            height: 0.5rem;
            width: 0.5rem;
          }
        }

        &-title {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
