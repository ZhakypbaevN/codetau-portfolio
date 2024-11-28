<template>
  <section class="landing-block">
    <div class="landing-wrapper">
      <div class="landing-notesBG mini">
        <Cursor class="projectsBlock-titles-cursor first" />
        <Cursor class="projectsBlock-titles-cursor second" />

        <Comment
          class="projectsBlock-titles-comment first"
          :title="$t('comments.view_our_projects')"
          closed
        />
        <Comment
          class="projectsBlock-titles-comment second"
          :title="$t('comments.stories_of_our_successful_projects')"
        />

        <SelectionText
          class="projectsBlock-title landing-title solo center"
          :title="title"
          :startIdx="startIdx"
          :endIdx="endIdx"
        />
      </div>

      <div class="projectsBlock-cards">
        <ProjectCard
          v-for="project of isPortfolioItems"
          v-bind:key="project.id"
          theme="light"
          class="projectsBlock-cards-card"
          :data="project"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import ProjectCard from '@/components/uiLanding/projects/ProjectCard.vue';
  import serverData from '@/server-data.json';

  import { ref } from 'vue';

  interface IProps {
    filter: 'web'|'mobile'|'design',
    title: string,
    startIdx?: number;
    endIdx?: number;
  }
  const props = defineProps<IProps>()

  const isPortfolioItems = serverData.portfolio.filter((project: any) => project.workTypesIDs.includes(props.filter));
</script>

<style lang="scss" scoped>
.projectsBlock {
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

  &-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem 3.2rem;

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
    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3.4rem 3.2rem;
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

    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    &-cards {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.6rem 2.2rem;
    }
  }

  @media (max-width: 580px) {
    &-cards {
      grid-template-columns: 1fr;
      grid-gap: 3rem;
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
    &-cards {
      grid-template-columns: 1fr;
      grid-gap: 3rem;
    }
  }

  @media (max-width: 380px) {
  }
}
</style>
<style lang="scss">
.projectsBlock-filter-btn {
  border-color: var(--primary-color-op15) !important;
  
  & span {
    color: var(--primary-color-op60) !important;
  }

  &.active {
    border-color: var(--primary-color) !important;
    
    & span {
      color: var(--primary-color) !important;
    }
  }
}
</style>
