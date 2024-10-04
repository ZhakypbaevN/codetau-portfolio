<template>
  <section class="landing-block services">
    <div class="landing-wrapper">
      <div class="services-inner">
        <div class="landing-notesBG">
          <div class="services-subtitle">
            <h4 class="services-subtitle-content">{{ $t('services.ourServices') }}</h4>
          </div>

          <h2 class="services-title landing-title center mini">{{ $t('services.ourServicesTitle') }}</h2>
        </div>
        
        <div class="services-cards">
          <div
            v-for="service of servicesList"
            :key="service.title"
            class="services-cards-card"
          >
            <div class="services-cards-card-preview bg-cover" :style="{backgroundImage: `url(${service.img})`}">
              <div class="services-cards-card-techList">
                <p
                  v-for="tech of service.techList"
                  :key="tech"
                  class="services-cards-card-techList-item"
                >
                  {{ tech }}
                </p>
              </div>
            </div>

            <h3 class="services-cards-card-title">{{ service.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const { t } = useI18n()

  const servicesList = [
    {
      title: t('services.web'),
      img: '/assets/img/services/service-1.jpg',
      techList: ['Vue.js', 'React.js', 'PHP', 'Python', 'Figma']
    },
    {
      title: t('services.design'),
      img: '/assets/img/services/service-2.jpg',
      techList: ['Figma', 'Photoshop', 'Illustrator']
    },
    {
      title: t('services.mobile'),
      img: '/assets/img/services/service-3.jpg',
      techList: ['Flutter', 'Dart', 'AppStore', 'Google Play']
    }
  ];
</script>

<style lang="scss" scoped>
.services {
  padding-top: 20rem;

  &-title {
    max-width: 100rem;
    margin-bottom: 0;
  }

  &-subtitle {
    position: absolute;
    top: -2.4rem;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';

      height: 4px;
      width: calc(100% + 8rem);

      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);

      background-color: var(--white-color);
    }
    
    &-content {
      height: 4.8rem;
      display: inline-flex;
      align-items: center;
  
      padding: 1rem;
      border-radius: .8rem;
      background-color: #9D58FF;
  
      color: var(--white-color);
      font-size: 1.8rem;
      font-weight: 400;
      text-transform: capitalize;

      position: relative;
      z-index: 2;
      transform: rotate(-7.7deg);
    }
  }

  &-cards {
    display: grid;
    align-items: stretch;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.8rem;

    &-card {
      padding: 1.4rem;
      padding-bottom: 2.4rem;
      
      border-radius: 2.8rem;
      background-color: var(--white-color);
      box-shadow: 0 .2rem 2rem 0 rgba(black, .07);

      &-preview {
        padding-bottom: 60%;
        border-radius: 1.4rem;
        
        position: relative;
        margin-bottom: 2rem;
      }

      &-techList {
        position: absolute;
        left: 0;
        bottom: 1.4rem;
        z-index: 2;

        display: flex;
        flex-wrap: wrap;
        grid-gap: 1rem 1.2rem;

        padding: 0 2.4rem;
        
        &-item {
          padding: .12em .5em;
          
          color: var(--white-color);
          
          border-radius: 5rem;
          background-color: rgba(white, .2);
          backdrop-filter: blur(10px);
        }
      }

      &-title {
        font-size: 2.4rem;
        text-transform: uppercase;
      }
    }
  }
}
</style>
