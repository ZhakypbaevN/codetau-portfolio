<template>
  <section class="landing-block services">
    <div class="landing-wrapper" id="services">
      <div class="services-inner">
        <div class="landing-notesBG">
          <Cursor class="services-titles-cursor" />

          <Comment
            class="services-titles-comment first"
            :title="$t('comments.our_services')"
            closed
          />
          <Comment
            class="services-titles-comment second"
            :title="$t('comments.from_idea_to_realization')"
          />

          <div class="services-subtitle">
            <h4 class="services-subtitle-content">{{ $t('services.ourServices') }}</h4>
          </div>

          <h2 class="services-title landing-title center mini">{{ $t('services.ourServicesTitle') }}</h2>
        </div>
        
        <div class="services-cards">
          <NuxtLink
            v-for="service of servicesList"
            :key="service.title"
            class="services-cards-card"
            :to="service.link"
          >
            <div class="services-cards-card-preview">
              <div class="services-cards-card-preview-arrow">
                <SvgIcon
                  classMainName="services-cards-card-preview-arrow-icon"
                  name="chevron-top-right"
                />
              </div>

              <div class="services-cards-card-preview-img bg-cover" :style="{backgroundImage: `url(${service.img})`}"></div>
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
          </NuxtLink>
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
      techList: ['Vue.js', 'React.js', 'PHP', 'Python', 'Figma'],
      link: '/services/webDevelopment'
    },
    {
      title: t('services.design'),
      img: '/assets/img/services/service-2.jpg',
      techList: ['Figma', 'Photoshop', 'Illustrator'],
      link: '/services/design'
    },
    {
      title: t('services.mobile'),
      img: '/assets/img/services/service-3.jpg',
      techList: ['Flutter', 'Dart', 'AppStore', 'Google Play'],
      link: '/services/mobileDevelopment'
    }
  ];
</script>

<style lang="scss">
.services {
  padding-top: 20rem;

  &-titles {
    &-cursor {
      position: absolute;
      bottom: 14rem;
      left: 20%;
      z-index: 5;
      transform: translateX(-80%);
    }

    &-comment {
      position: absolute;
      z-index: 2;

      &.first {
        top: 15%;
        left: 10%;
        transform: translate(-85%, -90%);
      }

      &.second {
        top: 66%;
        left: 80%;
        transform: translate(-34%, -94%);
      }
    }
  }

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
      position: relative;
      top: 0;
      right: 0;
      z-index: 1;

      padding: 1.4rem;
      padding-bottom: 2.4rem;
      
      border-radius: 2.8rem;
      background-color: var(--white-color);
      box-shadow: 0 .2rem 2rem 0 rgba(black, .07);

      transition: all .4s ease-out;

      &:hover {
        transform: scale(1.008);
        box-shadow: 0 8px 25px var(--accent-color-op10), 0 0 15px var(--accent-color-op10);

        & .services-cards-card {
          &-preview {
            &-img {
              transform: scale(1.2);
              transition: all 8s ease-out;
            }

            &-arrow {
              top: 1.2rem;
              right: 1.2rem;
              opacity: 1;

              transition: right .8s ease-in-out,
                top .8s ease-in-out,
                opacity .3s ease-in-out;
            }
          }
  
          &-techList {
            &-item {
              color: var(--white-color);
            }
          }
  
          &-title {
            color: var(--blue-light-v2-color);
          }
        }
      }

      &-preview {
        overflow: hidden;
        border-radius: 1.4rem;
        
        position: relative;
        padding-bottom: 60%;
        margin-bottom: 2rem;

        &-img {
          height: 100%;
          width: 100%;

          position: absolute;
          left: 0;
          top: 0;
          transform: scale(1);
          z-index: 1;

          border-radius: inherit;

          transition: all 1s ease-out;
        }

        &-arrow {
          height: 4.6rem;
          width: 4.6rem;

          display: flex;
          align-items: center;
          justify-content: center;

          position: absolute;
          top: 3rem;
          right: 3rem;
          z-index: 2;

          opacity: 0;

          border-radius: 50%;
          background-color: var(--white-color-op90);

          transition: all 1s linear;

          &:hover {
            background-color: var(--white-color);
          }

          &-icon svg {
            width: 2.8rem;
            height: 2.8rem;

            fill: var(--accent-color-op60);
          }
        }
      }

      &-techList {
        position: absolute;
        left: 0;
        bottom: 1.4rem;
        z-index: 2;

        display: flex;
        flex-wrap: wrap-reverse;
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

        transition: all .3s ease-in-out;
      }
    }
  }


  // Adaptation
  @media (max-width: 1600px) {
    padding-top: 18rem;

    &-titles {
      &-cursor {
        bottom: 14rem;
        left: 20%;
        transform: translateX(-80%);
      }

      &-comment {
        &.first {
          top: 15%;
          left: 10%;
          transform: translate(-85%, -90%);
        }

        &.second {
          top: 68%;
          left: 80%;
          transform: translate(-32%, -94%);
        }
      }
    }

    &-title {
      max-width: 100rem;
    }

    &-subtitle {
      top: -2.4rem;
      left: 50%;
      transform: translateX(-50%);

      &::before {
        height: 4px;
        width: calc(100% + 8rem);
      }
      
      &-content {
        height: 4.8rem;
    
        padding: 1rem;
        border-radius: .8rem;
    
        font-size: 1.8rem;
        transform: rotate(-7.7deg);
      }
    }

    &-cards {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2.8rem;

      &-card {
        padding: 1.4rem;
        padding-bottom: 2.4rem;
        border-radius: 2.8rem;

        &-preview {
          border-radius: 1.4rem;
          margin-bottom: 2rem;
        }

        &-techList {
          bottom: 1.2rem;
          grid-gap: 1rem 1.2rem;
          padding: 0 1.2rem;
          
          &-item {
            padding: .12em .5em;
            border-radius: 5rem;
          }
        }

        &-title {
          font-size: 2.2rem;
        }
      }
    }
  }

  @media (max-width: 1400px) {
    padding-top: 16rem;

    &-titles {
      &-cursor {
        bottom: 14rem;
        left: 20%;
        transform: translateX(-80%);
      }

      &-comment {
        &.first {
          top: 15%;
          left: 10%;
          transform: translate(-85%, -90%);
        }

        &.second {
          top: 68%;
          left: 80%;
          transform: translate(-32%, -94%);
        }
      }
    }

    &-title {
      max-width: 90rem;
    }

    &-subtitle {
      top: -2.4rem;
      left: 50%;
      transform: translateX(-50%);

      &::before {
        height: 4px;
        width: calc(100% + 8rem);
      }
      
      &-content {
        height: 4.8rem;
    
        padding: 1rem;
        border-radius: .8rem;
    
        font-size: 1.8rem;
        transform: rotate(-7.7deg);
      }
    }

    &-cards {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2.2rem;

      &-card {
        padding: 1.2rem;
        padding-bottom: 2.2rem;
        border-radius: 2.8rem;

        &-preview {
          border-radius: 1.4rem;
          margin-bottom: 2rem;
        }

        &-techList {
          bottom: 1.2rem;
          grid-gap: 1rem 1.2rem;
          padding: 0 1.2rem;
          
          &-item {
            padding: .1em .5em;
            border-radius: 4rem;
          }
        }

        &-title {
          font-size: 1.9rem;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding-top: 16rem;

    & .landing-notesBG {
      min-height: 24rem;
    }

    &-titles {
      &-cursor {
        bottom: 14rem;
        left: 20%;
        transform: translateX(-80%);
      }

      &-comment {
        &.first {
          top: 15%;
          left: 10%;
          transform: translate(-85%, -90%);
        }

        &.second {
          top: 68%;
          left: 80%;
          transform: translate(-32%, -94%);
        }
      }
    }

    &-title {
      max-width: 90rem;
    }

    &-subtitle {
      top: -2.4rem;
      left: 50%;
      transform: translateX(-50%);

      &::before {
        height: 4px;
        width: calc(100% + 8rem);
      }
      
      &-content {
        height: 4.8rem;
    
        padding: 1rem;
        border-radius: .8rem;
    
        font-size: 1.8rem;
        transform: rotate(-7.7deg);
      }
    }

    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.4rem 2.2rem;

      &-card {
        padding: 1.2rem;
        padding-bottom: 2.2rem;
        border-radius: 2.8rem;

        &-preview {
          border-radius: 1.4rem;
          margin-bottom: 2rem;
        }

        &-techList {
          bottom: 1.2rem;
          grid-gap: 1rem 1.2rem;
          padding: 0 1.2rem;
          
          &-item {
            padding: .1em .5em;
            border-radius: 4rem;
          }
        }

        &-title {
          font-size: 2rem;
        }
      }


      &-card:last-child {
        grid-column: 2/3;
      }
    }
  }

  @media (max-width: 992px) {
    padding-top: 14rem;

    & .landing-notesBG {
      min-height: 18rem;
    }

    &-titles {
      &-cursor {
        bottom: 14rem;
        left: 20%;
        transform: translateX(-80%);
      }

      &-comment {
        &.first {
          top: 1rem;
          left: 10%;
          transform: translateX(-90%);
        }

        &.second {
          top: auto;
          bottom: 2.4rem;
          left: 70%;
          transform: translateX(-30%);
        }
      }
    }

    &-title {
      max-width: 90rem;
    }

    &-subtitle {
      top: -2.4rem;
      left: 50%;
      transform: translateX(-50%);

      &::before {
        height: 4px;
        width: calc(100% + 8rem);
      }
      
      &-content {
        height: 4rem;
    
        padding: .8rem 1rem;
        border-radius: .8rem;
    
        font-size: 1.6rem;
        transform: rotate(-7.7deg);
      }
    }

    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.4rem 2.2rem;

      &-card {
        padding: 1.2rem;
        padding-bottom: 1.8rem;
        border-radius: 2.6rem;

        &-preview {
          border-radius: 1.4rem;
          margin-bottom: 2rem;
        }

        &-techList {
          bottom: 1rem;
          grid-gap: .8rem 1rem;
          padding: 0 1rem;
          
          &-item {
            padding: .08em .4em;
          }
        }

        &-title {
          font-size: 1.8rem;
        }
      }


      &-card:last-child {
        grid-column: 2/3;
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 12rem;

    & .landing-notesBG {
      min-height: 16rem;
    }

    &-titles {
      &-cursor {
        bottom: 14rem;
        left: 20%;
        transform: translateX(-80%);
      }

      &-comment {
        &.first {
          top: 1rem;
          left: 10%;
          transform: translateX(-90%);
        }

        &.second {
          top: auto;
          bottom: 1rem;
          left: 60%;
          transform: translateX(-40%);
        }
      }
    }

    &-title {
      max-width: 90rem;
    }

    &-subtitle {
      top: -1.7rem;
      left: 50%;
      transform: translateX(-50%);

      &::before {
        height: 4px;
        width: calc(100% + 8rem);
      }
      
      &-content {
        height: 3.4rem;
    
        padding: .7rem .9rem;
        border-radius: .5rem;
    
        font-size: 1.5rem;
        transform: rotate(-7deg);
      }
    }

    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.2rem 2rem;

      &-card {
        padding: .8rem;
        padding-bottom: 1.5rem;
        border-radius: 2.4rem;

        &-preview {
          border-radius: 1.4rem;
          margin-bottom: 1.8rem;
        }

        &-techList {
          bottom: .8rem;
          grid-gap: .6rem .8rem;
          padding: 0 .8rem;
          
          &-item {
            font-size: 1.4rem;
          }
        }

        &-title {
          font-size: 1.6rem;
        }
      }


      &-card:last-child {
        grid-column: 2/3;
      }
    }
  }

  @media (max-width: 576px) {
    padding-top: 10rem;

    & .landing-notesBG {
      min-height: 14rem;
    }

    &-titles {
      &-cursor {
        bottom: 14rem;
        left: 20%;
        transform: translateX(-80%);
      }

      &-comment {
        &.first {
          top: 1rem;
          left: 10%;
          transform: translateX(-90%);
        }

        &.second {
          top: auto;
          bottom: .2rem;
          left: 52%;
          transform: translateX(-48%);
        }
      }
    }

    &-subtitle {
      top: -1.7rem;
      left: 50%;
      transform: translateX(-50%);

      &::before {
        height: 4px;
        width: calc(100% + 8rem);
      }
      
      &-content {
        height: 3rem;
    
        padding: .6rem .8rem;
        border-radius: .5rem;
    
        font-size: 1.3rem;
        transform: rotate(-7deg);
      }
    }

    &-cards {
      grid-template-columns: 1fr;
      grid-gap: 2.2rem 2rem;

      &-card {
        padding: 1.2rem;
        padding-bottom: 1.4rem;
        border-radius: 2.4rem;

        &-preview {
          border-radius: 1.4rem;
          margin-bottom: 1.8rem;
        }

        &-techList {
          bottom: .8rem;
          grid-gap: .6rem .8rem;
          padding: 0 .8rem;
          
          &-item {
            font-size: 1.4rem;
          }
        }

        &-title {
          font-size: 1.6rem;
        }
      }


      &-card:last-child {
        grid-column: auto;
      }
    }
  }
}
</style>
