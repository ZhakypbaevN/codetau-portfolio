<template>
  <section class="designIntro landing-block">
    <div class="landing-wrapper">
      <div class="designIntro-titles">
        <h2 class="designIntro-titles-title landing-title mini">{{ $t('services.designDevelopment.intro.title') }}</h2>
        <p class="designIntro-titles-description landing-description">{{ $t('services.designDevelopment.intro.description') }}</p>
      </div>

      <div class="designIntro-sliderBlock">
        <Swiper
          :slidesPerView="'auto'"
          class="designIntro-slider"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false
          }"
          :speed="10000"
          :loop="true"
          :spaceBetween="0"
          :modules="[Autoplay]"
        >
          <SwiperSlide
            v-for="(photo) in introPhotos"
            :key="photo"
            class="designIntro-slider-item"
          >
            <div
              class="designIntro-slider-itemInner bg-cover"
              :style="{backgroundImage: `url(${photo})`}"
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';

  import 'swiper/css';
  import 'swiper/css/autoplay';

  const introPhotos = [
    '/assets/img/services/design-slider/photo-1.jpg',
    '/assets/img/services/design-slider/photo-2.jpg',
    '/assets/img/services/design-slider/photo-3.jpg',
    '/assets/img/services/design-slider/photo-4.jpg',
    '/assets/img/services/design-slider/photo-5.jpg',
    '/assets/img/services/design-slider/photo-6.jpg',
    '/assets/img/services/design-slider/photo-7.jpg',
    '/assets/img/services/design-slider/photo-8.jpg',
    '/assets/img/services/design-slider/photo-9.jpg',
    '/assets/img/services/design-slider/photo-10.jpg',
    '/assets/img/services/design-slider/photo-11.jpg',
    '/assets/img/services/design-slider/photo-12.jpg',
    '/assets/img/services/design-slider/photo-13.jpg',
    '/assets/img/services/design-slider/photo-14.jpg',
    '/assets/img/services/design-slider/photo-15.jpg',
  ]
</script>

<style lang="scss">
.designIntro {
  padding-top: 0 !important;
  &-titles {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 62rem;
    grid-gap: 2.6rem;

    margin-bottom: 6rem;

    * {
      margin-bottom: 0px;
    }
  }

  &-slider {
    max-width: 1200rem;
    position: relative;
    left: -10rem;

    &-item {
      width: min-content !important;
      padding: 0 1.8rem;
    }

    &-itemInner {
      width: 30rem;
      padding-bottom: 130%;
      border-radius: 3rem;
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    &-titles {
      grid-template-columns: 1fr 42rem;
      grid-gap: 2.8rem;

      margin-bottom: 6rem;
    }


    &-slider {
      &-item {
        padding: 0 1.5rem;
      }

      &-itemInner {
        width: 28rem;
        border-radius: 2.8rem;
      }
    }
  }

  @media (max-width: 1200px) {
    &-titles {
      grid-template-columns: 1fr 34rem;
      grid-gap: 2.8rem;

      margin-bottom: 6rem;
    }

    &-slider {
      &-item {
        padding: 0 1.5rem;
      }

      &-itemInner {
        width: 26rem;
        border-radius: 2.6rem;
      }
    }
  }

  @media (min-width: 993px) {
    &-titles-title {
      margin-bottom: 0px !important;
    }
  }

  @media (max-width: 992px) {
    &-titles {
      display: block;
      margin-bottom: 4.8rem;

      &-title {
        margin-bottom: 2rem;
      }
    }

    &-slider {
      &-item {
        padding: 0 1.2rem;
      }

      &-itemInner {
        width: 24rem;
        border-radius: 2.4rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-titles {
      display: block;
      margin-bottom: 4.4rem;

      &-title {
        margin-bottom: 2rem;
      }
    }

    &-slider {
      &-item {
        padding: 0 1.1rem;
      }

      &-itemInner {
        width: 22rem;
        border-radius: 2.2rem;
      }
    }
  }

  @media (max-width: 576px) {
    &-titles {
      margin-bottom: 4.2rem;

      &-title {
        margin-bottom: 1.4rem;
      }
    }
    
    &-slider {
      &-item {
        padding: 0 1rem;
      }

      &-itemInner {
        width: 18rem;
        border-radius: 1.8rem;
      }
    }
  }

  @media (max-width: 380px) {
    &-slider {
      &-item {
        padding: 0 .8rem;
      }

      &-itemInner {
        width: 16rem;
        border-radius: 1.6rem;
      }
    }
  }
}
</style>
