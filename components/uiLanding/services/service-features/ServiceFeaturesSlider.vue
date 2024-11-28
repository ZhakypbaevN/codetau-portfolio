<template>
  <section :class="`landing-block serviceFeatures ${theme}`">
    <div class="landing-wrapper">
      <div :class="`serviceFeatures-inner landing-notesBG ${theme}`">

        <SelectionText
          class="serviceFeatures-title landing-title"
          :title="$t('services.webDevelopment.features.title')"
          :startIdx="27"
          :endIdx="38"
        />

        <Comment
          class="serviceFeatures-titles-comment first"
          :title="$t('comments.focus_on_user_experience')"
          theme="dark"
        />
        <Comment
          class="serviceFeatures-titles-comment second"
          :title="$t('comments.customizable_and_flexible_solutions')"
        />

        <div class="serviceFeatures-slider slider">
          <div :class="`serviceFeatures-slider-control slider-control ${theme}`">
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

          <div class="serviceFeatures-slider-inner">
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
              class="serviceFeatures-slider-list"
            >
              <SwiperSlide
                v-for="num in 4"
                v-bind:key="num"
                class="serviceFeatures-slider-listItem"
              >
                <ServiceFeatureItem
                  :theme="theme"
                  :num="num"
                />
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
  import ServiceFeatureItem from '@/components/uiLanding/services/service-features/ServiceFeatureItem.vue';

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

.serviceFeatures {
  &-title {
    max-width: 110rem;
    padding: 0 2.6rem;
  }

  &-titles-comment {
    position: absolute;
    z-index: 2;

    &.first {
      top: 12%;
      left: 68%;
      transform: translate(-88%, -32%);
    }

    &.second {
      top: 24%;
      left: 78%;
      transform: translate(-76%, -22%);
    }
  }

  &-inner {
    align-items: start;
    padding-top: 8rem;
    padding-bottom: 6rem;
    margin-bottom: 0 !important;
  }
  
  &-slider {
    &-inner {
      margin: 0 -12rem;
      padding: 0 12rem;
    }

    &-control {
      display: flex;
      justify-content: end;
    }

    &-list {
      margin-bottom: 4.8rem;
    }

    &-listItem {
      min-width: 46rem;
      width: 46rem;
    }
  }


  // Adaptation
  @media (max-width: 1600px) {
    &-title {
      max-width: 110rem;
      padding: 0 2rem;
    }

    &-titles-comment {
      &.first {
        top: 10%;
        left: 68%;
        transform: translate(-90%, -32%);
      }

      &.second {
        top: 14%;
        left: 78%;
        transform: translate(-86%, -22%);
      }
    }

    &-inner {
      padding-top: 7rem;
      padding-bottom: 5rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 4.8rem;
      }

      &-listItem {
        min-width: 46rem;
        width: 46rem;
      }
    }
  }

  @media (max-width: 1400px) {
    &-title {
      max-width: 100%;
      padding: 0;
    }

    &-titles-comment {
      &.first {
        top: 10%;
        left: 68%;
        transform: translate(-90%, -32%);
      }

      &.second {
        top: 14%;
        left: 78%;
        transform: translate(-86%, -22%);
      }
    }

    &-inner {
      padding-top: 6rem;
      padding-bottom: 4rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 4.2rem;
      }

      &-listItem {
        min-width: 44rem;
        width: 44rem;
      }
    }
  }

  @media (max-width: 1200px) {
    &-titles-comment {
      &.first {
        top: 0%;
        left: 50%;
        transform: translate(-100%, -50%);
      }

      &.second {
        top: 6%;
        left: 68%;
        transform: translate(-94%, -32%);
      }
    }

    &-inner {
      padding-top: 5rem;
      padding-bottom: 3rem;
    }
    
    &-slider {
      &-list {
        margin-bottom: 4rem;
      }

      &-listItem {
        min-width: 42rem;
        width: 42rem;
      }
    }
  }

  @media (max-width: 992px) {
    &-titles-comment {
      &.first {
        top: 0%;
        left: 50%;
        transform: translate(-100%, -50%);
      }

      &.second {
        top: 6%;
        left: 68%;
        transform: translate(-94%, -32%);
      }
    }

    &-inner {
      padding-top: 4rem;
      padding-bottom: 3rem;
    }
    
    &-slider {
      &-inner {
        margin: 0 -12rem;
        padding: 0 12rem;
      }

      &-list {
        margin-bottom: 3rem;
      }

      &-listItem {
        min-width: 40rem;
        width: 40rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-titles-comment {
      &.first {
        top: -2%;
        left: 40%;
        transform: translate(-108%, -60%);
      }

      &.second {
        top: 4%;
        left: 62%;
        transform: translate(-96%, -38%);
      }
    }

    &-inner {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    
    &-slider {
      &-inner {
        margin: 0 -12rem;
        padding: 0 12rem;
      }

      &-list {
        margin-bottom: 2.6rem;
      }

      &-listItem {
        min-width: 38rem;
        width: 38rem;
      }
    }
  }

  @media (max-width: 576px) {
    &-titles-comment {
      &.first {
        top: -2%;
        left: 34%;
        transform: translate(-108%, -66%);
      }

      &.second {
        top: 2%;
        left: 58%;
        transform: translate(-98%, -42%);
      }
    }

    &-inner {
      padding-top: 2rem;
      padding-bottom: 3rem;
    }
    
    &-slider {
      &-inner {
        margin: 0 -12rem;
        padding: 0 12rem;
      }

      &-list {
        margin-bottom: 2.4rem;
      }

      &-listItem {
        min-width: 30rem;
        width: 30rem;
      }
    }
  }

  @media (max-width: 380px) {
    &-titles-comment {
      &.first {
        top: -2%;
        left: 16%;
        transform: translate(-108%, -84%);
      }

      &.second {
        top: 0%;
        left: 50%;
        transform: translate(-100%, -50%);
      }
    }

    &-inner {
      padding-top: 2rem;
      padding-bottom: 3rem;
    }
    
    &-slider {
      &-inner {
        margin: 0 -12rem;
        padding: 0 12rem;
      }

      &-list {
        margin-bottom: 2.4rem;
      }

      &-listItem {
        min-width: 26rem;
        width: 26rem;
      }
    }
  }
}
</style>
