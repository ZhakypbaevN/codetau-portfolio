<template>
  <section class="companies">
    <div class="landing-wrapper">
      <div class="companies-inner">
        <h4 class="companies-title">{{ $t('companiesSliderTitle') }}</h4>

        <div class="companies-slider">
          <div class="companies-slider-inner">
            <div
              v-for="(companyLogo, idx) in companyLogoList"
              :key="idx"
              class="companies-slider-item"
            >
              <img :src="companyLogo" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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
    
    height: 70px;
    width: 20%;
    
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
    transform: translateY(-50%);

    background: -webkit-linear-gradient(left, white, white 80%, transparent 100%); /* Для старых версий Chrome, Safari, iOS */
    background: -moz-linear-gradient(left, white, white 80%, transparent 100%); /* Для старых версий Firefox */
    background: -o-linear-gradient(left, white, white 80%, transparent 100%); /* Для старых версий Opera */
    background: linear-gradient(to right, white, white 80%, transparent 100%); /* Стандартное определение для современных браузеров */
  }

  &-inner {
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
    &-inner {
      display: flex;
      align-items: center;
      grid-gap: 10rem;

      animation: infinite-scroll 140s linear infinite;
    }

    &-item {
      width: 14rem;
      height: 7.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      opacity: .6;

      transition: all .6s linear;

      &:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
        opacity: 1;
      }
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
</style>