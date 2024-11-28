<template>
  <main class="landing-main">
    <HeaderLanding />

    <div class="landing-content">
      <div class="landing-wrapper">
        <div class="landing-notesBG page-title">
          <Cursor class="portfolioPage-titles-cursor first" />
          <Cursor class="portfolioPage-titles-cursor second" />

          <Comment
            class="portfolioPage-titles-comment first"
            :title="$t('comments.view_our_projects')"
            closed
          />
          <Comment
            class="portfolioPage-titles-comment second"
            :title="$t('comments.stories_of_our_successful_projects')"
          />

          <SelectionText
            class="portfolioPage-title landing-title solo center"
            :title="$t('portfolio.title')"
            :startIdx="5"
            :endIdx="14"
          />
        </div>

        <div class="portfolioPage-filter">
          <Button
            v-for="filterItem of filterList"
            v-bind:key="filterItem.category"
            :class="`portfolioPage-filter-btn ${filterItem.category == isFilter && 'active'}`"
            :name="filterItem.title"
            :mini="false"
            type="default-dark"
            @click="() => isFilter = filterItem.category"
          />
        </div>

        <TransitionGroup 
          name="fade"
          tag="div" 
          :class="`portfolioPage-cards ${isOpacity && 'opacity'}`"
        >
          <ProjectCard
            v-for="project of isPortfolioItems"
            v-bind:key="project.id"
            theme="light"
            class="portfolioPage-cards-card"
            :data="project"
          />
        </TransitionGroup>
      </div>

      
      <FooterLanding theme="light" />
    </div>
  </main>
</template>

<script lang="ts" setup>
  import HeaderLanding from '@/components/uiLanding/layouts/HeaderLanding.vue';
  import FooterLanding from '@/components/uiLanding/layouts/FooterLanding.vue';

  import ProjectCard from '@/components/uiLanding/projects/ProjectCard.vue';
  import serverData from '@/server-data.json';

  import { ref, watch } from 'vue';

  const { t } = useI18n()

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

<style lang="scss" scoped>
.portfolioPage {
  &-titles {
    &-cursor {
      position: absolute;
      z-index: 5;

      &.first {
        top: 4rem;
        left: 70%;
        transform: translateX(-30%);
      }

      &.second {
        bottom: 10rem;
        left: 20%;
        transform: translateX(-80%);
      }
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
        top: 70%;
        left: 80%;
        transform: translate(-30%, -94%);
      }
    }
  }

  &-filter {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 2.2rem;

    margin-bottom: 3.8rem;
  }

  &-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem 3.2rem;
    opacity: 1;

    margin-bottom: 14rem;
    transition: all 2.4s linear;

    &.opacity {
      opacity: 0;
    }

    &-card {
      width: auto !important;
      min-width: auto !important;
    }
  }


  // Adaptation
  @media (max-width: 1600px) {
    &-cards {
      grid-gap: 3.8rem 2.4rem;
    }
  }

  @media (max-width: 1400px) {
    &-titles {
      &-comment {
        &.first {
          top: 15%;
          left: 10%;
          transform: translate(-85%, -90%);
        }
  
        &.second {
          top: 90%;
          left: 70%;
          transform: translate(-10%, -94%);
        }
      }
    }

    &-cards {
      grid-gap: 3.6rem 2.4rem;
    }
  }

  @media (max-width: 1200px) {
    &-filter {
      grid-gap: 1.8rem;

      margin-bottom: 3.8rem;
    }

    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3.4rem 3.2rem;

      margin-bottom: 14rem;
    }
  }

  @media (max-width: 992px) {
    &-titles {
      &-comment {
        &.first {
          top: 15%;
          left: 10%;
          transform: translate(-85%, -90%);
        }
  
        &.second {
          top: auto;
          left: 66%;
          bottom: -.4rem;
          transform: translateX(-34%);
        }
      }
    }

    &-filter {
      grid-gap: 2.8rem 1.4rem;

      margin-bottom: 3.2rem;
    }

    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.4rem;

      margin-bottom: 10rem;
    }
  }

  @media (max-width: 768px) {
    &-filter {
      grid-gap: 1.2rem;

      margin-bottom: 3.2rem;
    }

    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.6rem 2.2rem;

      margin-bottom: 10rem;
    }
  }

  @media (max-width: 580px) {
    &-cards {
      grid-template-columns: 1fr;
      grid-gap: 3rem;

      margin-bottom: 8rem;
    }
  }

  @media (max-width: 576px) {
    &-titles {
      &-comment {
        &.first {
          top: 15%;
          left: 10%;
          transform: translate(-85%, -90%);
        }
  
        &.second {
          top: auto;
          left: 52%;
          bottom: -.4rem;
          transform: translateX(-48%);
        }
      }
    }

    &-filter {
      grid-gap: 1rem;

      margin-bottom: 3.2rem;
    }

    &-cards {
      grid-template-columns: 1fr;
      grid-gap: 3rem;

      margin-bottom: 6rem;
    }
  }

  @media (max-width: 380px) {
  }
}

/* Анимация fade-in и fade-out */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Сдвиг вниз на 20px */
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0); /* Вернуться в исходное положение */
}
</style>
<style lang="scss">
.portfolioPage-filter-btn {
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
</style>
