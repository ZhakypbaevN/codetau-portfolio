<template>
  <section class="webDevelopmentIntro landing-block">
    <div class="landing-wrapper">
      <div class="webDevelopmentIntro-titles">
        <h2 class="webDevelopmentIntro-titles-title landing-title mini">{{ $t('services.webDevelopment.intro.title') }}</h2>
        <p class="webDevelopmentIntro-titles-description landing-description">{{ $t('services.webDevelopment.intro.description') }}</p>
      </div>

      <div class="webDevelopmentIntro-sliders bg-cover" :style="{backgroundImage: `url(${'/assets/img/services/web/bg.jpg'})`}">
        <Swiper
          :slidesPerView="'auto'"
          class="webDevelopmentIntro-sliders-slider"
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
            v-for="(work) in getRandomizedWorkList()"
            :key="work"
            class="webDevelopmentIntro-sliders-slider-item"
          >
            <div class="webDevelopmentIntro-sliders-slider-itemInner">
              <SvgIcon name="api" />
              <h4 class="webDevelopmentIntro-sliders-slider-itemInner-title">{{ work }}</h4>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          :slidesPerView="'auto'"
          class="webDevelopmentIntro-sliders-slider"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }"
          :speed="10000"
          :loop="true"
          :spaceBetween="0"
          :modules="[Autoplay]"
        >
          <SwiperSlide
            v-for="(work) in getRandomizedWorkList()"
            :key="work"
            class="webDevelopmentIntro-sliders-slider-item"
          >
            <div class="webDevelopmentIntro-sliders-slider-itemInner">
              <SvgIcon name="api" />
              <h4 class="webDevelopmentIntro-sliders-slider-itemInner-title">{{ work }}</h4>
            </div>
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

  const getRandomizedWorkList = () => {
    const workList = [
      'Разработка REST API',
      'Интеграция с GraphQL',
      'Работа с WebSocket для реального времени',
      'Использование Swagger для документации',
      'Тестирование API через Postman',
      'Поддержка JSON и XML форматов',
      'Авторизация через OAuth 2.0',
      'Работа с JWT (JSON Web Token)',
      'Создание gRPC-сервисов',
      'Интеграция сторонних сервисов',
      'Автоматизация API-тестов',
      'Документирование через OpenAPI'
    ];

    // Перемешиваем массив с помощью алгоритма Фишера-Йетса
    for (let i = workList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [workList[i], workList[j]] = [workList[j], workList[i]];
    }

    return workList;
  }
</script>

<style lang="scss">
.webDevelopmentIntro {
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

  &-sliders {
    display: flex;
    flex-direction: column;
    grid-gap: 2.4rem;
    overflow: hidden;

    padding: 9.6rem 0;

    border-radius: 3rem;

    &-slider {
      max-width: 200rem;

      &-item {
        width: min-content !important;
        padding: 0 1.5rem;
      }

      &-itemInner {  
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 1rem;

        padding: 2.8rem 4rem;

        border-radius: 1rem;
        background-color: var(--white-color);

        & svg {
          height: 2.8rem;
          width: 2.8rem;
        }

        &-title {
          color: var(--gray-color);
          font-size: 2rem;
          font-family: var(--secondary-font);
          white-space: nowrap;
        }
      }
    }

    &-slider:last-child {
      position: relative;
      left: -15rem;
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    &-titles {
      grid-template-columns: 1fr 42rem;
      grid-gap: 2.8rem;

      margin-bottom: 6rem;
    }

    &-sliders {
      grid-gap: 2.4rem;
      padding: 9.2rem 0;

      border-radius: 2.8rem;

      &-slider {
        max-width: 200rem;

        &-item {
          padding: 0 1.5rem;
        }

        &-itemInner {  
          grid-gap: 1rem;
          padding: 2.8rem 4rem;
          border-radius: 1rem;

          & svg {
            height: 2.8rem;
            width: 2.8rem;
          }

          &-title {
            font-size: 2rem;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    &-titles {
      grid-template-columns: 1fr 34rem;
      grid-gap: 2.8rem;

      margin-bottom: 6rem;
    }

    &-sliders {
      grid-gap: 2.4rem;
      padding: 6rem 0;

      border-radius: 2.6rem;

      &-slider {
        &-item {
          padding: 0 1.5rem;
        }

        &-itemInner {  
          grid-gap: 1rem;
          padding: 2.8rem 4rem;
          border-radius: 1rem;

          & svg {
            height: 2.8rem;
            width: 2.8rem;
          }

          &-title {
            font-size: 2rem;
          }
        }
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

    &-sliders {
      grid-gap: 2.4rem;
      padding: 4.2rem 0;

      border-radius: 2.4rem;

      &-slider {
        max-width: 200rem;

        &-item {
          padding: 0 1.5rem;
        }

        &-itemInner {  
          grid-gap: 1rem;
          padding: 2.2rem 2.8rem;
          border-radius: 1rem;

          & svg {
            height: 2.4rem;
            width: 2.4rem;
          }

          &-title {
            font-size: 1.8rem;
          }
        }
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

    &-sliders {
      grid-gap: 1.4rem;
      padding: 3rem 0;

      border-radius: 2rem;

      &-slider {
        &-item {
          padding: 0 1.2rem;
        }

        &-itemInner {  
          grid-gap: 1rem;
          padding: 1.6rem 2.2rem;
          border-radius: 1rem;

          & svg {
            height: 2rem;
            width: 2rem;
          }

          &-title {
            font-size: 1.8rem;
          }
        }
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
    
    &-sliders {
      grid-gap: 1.4rem;
      padding: 3rem 0;

      border-radius: 1.4rem;

      &-slider {
        &-item {
          padding: 0 1.2rem;
        }

        &-itemInner {  
          grid-gap: 1rem;
          padding: 1.4rem 2rem;
          border-radius: 1rem;

          & svg {
            height: 1.8rem;
            width: 1.8rem;
          }

          &-title {
            font-size: 1.8rem;
          }
        }
      }
    }
  }

  @media (max-width: 380px) {
  }
}
</style>
