<template>
  <section :class="`landing-block projectsSlider ${theme}`">
    <div class="landing-wrapper">
      <div :class="`projectsSlider-inner landing-notesBG ${theme}`">

        <div class="projectsSlider-titleBlock">
          <SelectionText
            class="projectsSlider-title landing-title center"
            :title="$t('projects.title')"
            :startIdx="0"
            :endIdx="13"
          />

          <Cursor class="projectsSlider-titleBlock-cursor first" />
          <Cursor class="projectsSlider-titleBlock-cursor second" />
          <Cursor class="projectsSlider-titleBlock-cursor third" />
          <Cursor class="projectsSlider-titleBlock-cursor fourth" />
        </div>

        <div class="projectsSlider-slider slider">
          <div class="projectsSlider-slider-control">
            <div class="projectsSlider-slider-control-filter">
              <Button
                v-for="filterItem of filterList"
                v-bind:key="filterItem.category"
                :class="`projectsSlider-slider-control-filter-btn ${filterItem.category == isFilter && 'active'}`"
                :name="filterItem.title"
                :mini="false"
                @click="() => isFilter = filterItem.category"
              />
            </div>

            <div :class="`projectsSlider-slider-control-arrows slider-control ${theme}`">
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
          </div>

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
            :modules="[Mousewheel, Scrollbar, Navigation]"
            :class="`projectsSlider-slider-list ${isOpacity && 'opacity'}`"
          >
            <SwiperSlide
              v-for="project of isPortfolioItems"
              v-bind:key="project.id"
              class="projectsSlider-slider-listItem"
            >
              <ProjectCard
                :theme="theme"
                :data="project"
              />
            </SwiperSlide>
          </Swiper>

          <div ref="sliderScrollbar" :class="`slider-scrollbar ${theme}`"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import ProjectCard from '@/components/uiLanding/projects/ProjectCard.vue';

  import { ref, onMounted, watch } from 'vue';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Scrollbar, Navigation } from 'swiper/modules';

  import serverData from '@/server-data.json';

  interface IProps {
    theme?: 'dark' | 'light',
  }

  withDefaults(defineProps<IProps>(), {
    theme: 'dark'
  })
  const { t } = useI18n()

  const sliderScrollbar = ref(null)
  const prevButton = ref(null);
  const nextButton = ref(null);
  
  const isFilter = ref<string>('all');
  const isOpacity = ref<boolean>(false);
  const filterList = [
    {
      title: t('projects.filterList.all'),
      category: 'all'
    },
    {
      title: t('projects.filterList.design'),
      category: 'design'
    },
    {
      title: t('projects.filterList.web'),
      category: 'web'
    },
    {
      title: t('projects.filterList.mobile'),
      category: 'mobile'
    }
  ];

  const isPortfolioItems = ref(serverData.portfolio);

  watch(
    () => isFilter.value,
    (newValue) => {
      isOpacity.value = true;
      isPortfolioItems.value = isFilter.value == 'all'
        ? serverData.portfolio
        : serverData.portfolio.filter((project: any) => project.workTypesIDs.includes(isFilter.value));

      setTimeout(() => isOpacity.value = false, 300)
    }
  )
</script>

<style lang="scss">
@import 'swiper/css';
@import 'swiper/css/scrollbar';
@import 'swiper/css/navigation';

.projectsSlider {
  &-inner {
    padding-top: 8rem;
    padding-bottom: 6rem;
    margin-bottom: 0px !important;
  }

  &-titleBlock {
    position: relative;
    max-width: 99.2rem;
    margin-bottom: 6rem;

    &-cursor {
      position: absolute;
      z-index: 2;

      &.first {
        top: -3rem;
        left: 50%;
        transform: translateX(-50%);
      }

      &.second {
        bottom: 0;
        left: 0;
      }

      &.third {
        bottom: 0;
        right: 0;
      }

      &.fourth {
        top: 0;
        left: 90%;
        transform: translateX(-10%);
      }
    }
  }

  &-title {
    margin-bottom: 0px !important;
  }
  
  &-slider {
    &-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      grid-gap: 4rem;

      margin-bottom: 3.8rem;

      &-filter {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 2.2rem;
      }

      &-arrows {
        margin-bottom: 0px;
      }
    }

    &-list {
      opacity: 1;
      margin-bottom: 4.8rem;
      transition: all 1.8s linear;

      &.opacity {
        opacity: 0;
      }
    }

    &-listItem {
      min-width: 50rem;
      width: 50rem;
      padding: 0 1.5rem;

      & .projectItem {
        min-width: auto !important;
        width: auto !important;
        width: -webkit-fill-available !important;
      }
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    &-inner {
      padding-top: 8rem;
      padding-bottom: 6rem;
    }

    &-titleBlock {
      max-width: 99.2rem;
      margin-bottom: 6rem;
    }

    &-slider {
      &-control {
        grid-gap: 3.8rem;
        margin-bottom: 3.6rem;

        &-filter {
          grid-gap: 2.2rem;
        }

        &-arrows {
          margin-bottom: 0px;
        }
      }

      &-list {
        margin-bottom: 4.8rem;
      }

      &-listItem {
        min-width: 50rem;
        width: 50rem;
        padding: 0 1.4rem;
      }
    }
  }

  @media (max-width: 1200px) {
    &-inner {
      padding-top: 7rem;
      padding-bottom: 5rem;
    }

    &-titleBlock {
      max-width: 99.2rem;
      margin-bottom: 5.2rem;

      &-cursor {
        &.first {
          top: -3rem;
        }
      }
    }

    &-slider {
      &-control {
        align-items: end;
        grid-gap: 3.6rem;
        margin-bottom: 3.2rem;

        &-filter {
          grid-gap: 1.2rem;

          &-btn {
            padding: 1.2rem 2.4rem !important;
          }
        }
      }

      &-list {
        margin-bottom: 4.2rem;
      }

      &-listItem {
        min-width: 42rem;
        width: 42rem;
        padding: 0 1.2rem;
      }
    }
  }

  @media (max-width: 992px) {
    &-inner {
      padding-top: 6rem;
      padding-bottom: 4rem;
    }

    &-titleBlock {
      max-width: 99.2rem;
      margin-bottom: 4.6rem;

      &-cursor {
        &.first {
          top: -3rem;
        }
      }
    }

    &-slider {
      &-control {
        grid-gap: 3.2rem;
        margin-bottom: 3rem;

        &-filter {
          grid-gap: 1.2rem;

          &-btn {
            padding: 1rem 2.2rem !important;
          }
        }
      }

      &-list {
        margin-bottom: 3.8rem;
      }

      &-listItem {
        min-width: 38rem;
        width: 38rem;
        padding: 0 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-inner {
      padding-top: 6rem;
      padding-bottom: 4rem;
    }

    &-titleBlock {
      max-width: 99.2rem;
      margin-bottom: 4.2rem;
    }

    &-slider {
      &-control {
        grid-gap: 1.2rem;
        margin-bottom: 2.8rem;

        &-filter {
          grid-gap: .8rem;

          &-btn {
            padding: 1rem 2rem !important;
          }
        }

        &-arrows {
          flex-direction: column;
        }
      }

      &-list {
        margin-bottom: 3.4rem;
      }

      &-listItem {
        min-width: 34rem;
        width: 34rem;
        padding: 0 1.2rem;
      }
    }
  }

  @media (max-width: 576px) {
    &-inner {
      padding-top: 5rem;
      padding-bottom: 3rem;
    }

    &-titleBlock {
      margin-bottom: 4rem;
    }

    &-slider {
      &-control {
        grid-gap: 1rem;
        margin-bottom: 2.4rem;

        &-filter {
          grid-gap: .8rem;

          &-btn {
            padding: 1rem 2rem !important;
          }
        }

        &-arrows {
          flex-direction: column;
        }
      }

      &-list {
        margin-bottom: 3rem;
      }

      &-listItem {
        min-width: 30rem;
        width: 30rem;
        padding: 0 1.2rem;
      }
    }
  }

  @media (max-width: 380px) {
  }
}
</style>

<style lang="scss">
.projectsSlider {
  &.light &-slider-control-filter-btn {
    border-color: var(--primary-color-op15) !important;
    
    & span {
      color: var(--primary-color-op60) !important;
    }

    &:hover,
    &.active {
      border-color: var(--blue-light-color) !important;
      
      & span {
        color: var(--blue-light-color) !important;
      }
    }

    &:hover {
      background-color: var(--accent-color-op5) !important;
    }
  }

  &.dark &-slider-control-filter-btn {
    border-color: var(--white-color-op15) !important;
    
    & span {
      color: var(--white-color-op60) !important;
    }

    &:hover,
    &.active {
      border-color: var(--blue-light-color-op70) !important;
      
      & span {
        color: var(--blue-light-color-op70) !important;
      }
    }

    &:hover {
      background-color: var(--accent-color-op5) !important;
    }

    &.active {
      border-color: var(--blue-light-color) !important;
      
      & span {
        color: var(--blue-light-color) !important;
      }
    }
  }
}
</style>
