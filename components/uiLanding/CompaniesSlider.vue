<template>
  <section class="companies">
    <div class="landing-wrapper">
      <div class="companies-inner">
        <h4 class="companies-title">{{ $t('companiesSliderTitle') }}</h4>

        <div class="companies-slider">
          <Swiper
            :slidesPerView="'auto'"
            class="companies-slider-inner"
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
              v-for="(companyLogo) in companyLogoList"
              :key="companyLogo"
              class="companies-slider-slideItem"
            >
              <div class="companies-slider-item">
                <img :src="companyLogo">
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';

  import 'swiper/css';
  import 'swiper/css/autoplay';

  const companyLogoList = [
    '/assets/icons/companies/company-1.svg',
    '/assets/icons/companies/company-2.svg',
    '/assets/icons/companies/company-3.svg',
    '/assets/icons/companies/company-4.svg',
    '/assets/icons/companies/company-5.svg',
    '/assets/icons/companies/company-6.svg',
    '/assets/icons/companies/company-7.svg',
    '/assets/icons/companies/company-8.svg',
    '/assets/icons/companies/company-9.svg',
    '/assets/icons/companies/company-10.svg',
    '/assets/icons/companies/company-11.svg',
    '/assets/icons/companies/company-12.svg',
    '/assets/icons/companies/company-13.svg',
  ];
</script>

<style lang="scss" scoped>
.companies {
  padding: 2.4rem 0;
  border-top: .1rem solid var(--gray-light-color-op70);
  border-bottom: .1rem solid var(--gray-light-color-op70);

  position: relative;

  &::before {
    content: '';

    display: block;
    
    height: 100%;
    width: 20%;
    
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);

    background: -webkit-linear-gradient(left, white, white 80%, transparent 100%); /* Для старых версий Chrome, Safari, iOS */
    background: -moz-linear-gradient(left, white, white 80%, transparent 100%); /* Для старых версий Firefox */
    background: -o-linear-gradient(left, white, white 80%, transparent 100%); /* Для старых версий Opera */
    background: linear-gradient(to right, white, white 80%, transparent 100%); /* Стандартное определение для современных браузеров */
  }

  &-inner {
    width: 100%;
  
    display: grid;
    align-items: center;
    grid-template-columns: 19.5rem 1fr;
    grid-gap: 8rem;
  }

  &-title {
    font-size: 2.4rem;
    font-weight: 400;
    font-family: var(--secondary-font);
    color: var(--gray-color);

    position: relative;
    z-index: 2;
  }

  &-slider {
    max-width: 200rem;

    &-slideItem {
      width: 29rem;
      padding: 0 5rem;
    }

    &-item {
      width: 24rem;
      height: 7.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      opacity: .4;

      transition: all .6s linear;

      &:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
        opacity: 1;
      }
    }
  }


  // Adaptation
  @media (max-width: 1200px) {
    padding: 2.2rem 0;

    &::before {
      width: 30%;
    }

    &-inner {
      grid-template-columns: 18rem 1fr;
      grid-gap: 8rem;
    }

    &-title {
      font-size: 2.2rem;
    }

    &-slider-item {
      width: 22rem;
      height: 6.875rem;
    }
  }

  @media (max-width: 992px) {
    padding: 2rem 0;

    &-inner {
      grid-template-columns: 16rem 1fr;
      grid-gap: 6rem;
    }

    &-title {
      font-size: 2rem;
    }

    &-slider {
      &-slideItem {
        width: 24rem;
        padding: 0 4rem;
      }

      &-item {
        width: 20rem;
        height: 6.25rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.8rem 0;

    &::before {
      width: 32%;
    }

    &-inner {
      grid-template-columns: 13rem 1fr;
      grid-gap: 6rem;
    }

    &-title {
      font-size: 1.6rem;
    }

    &-slider {
      &-slideItem {
        width: 21.8rem;
        padding: 0 3.8rem;
      }

      &-item {
        width: 18rem;
        height: 5.625rem;
      }
    }
  }

  @media (max-width: 576px) {
    &::before {
      display: none;
    }

    &-inner {
      display: block;
    }

    &-title {
      display: none;
    }

    &-slider {
      &-slideItem {
        width: 19.6rem;
        padding: 0 3.6rem;
      }

      &-item {
        width: 16rem;
        height: 5rem;
      }
    }
  }

  @media (max-width: 380px) {
  }
}
</style>