<template>
<main>
  <HeaderLanding class="projectDetail-header" />

  <div class="landing-wrapper">
    <ProjectIntro :data="isProjectData" />

    <ProjectSubInfo :data="isProjectData" />

    <section class="projectDetailGoast landing-block">
      <h4 class="projectDetailGoast-subtitle">Цель проекта</h4>
      <h2 class="projectDetailGoast-title">
        {{ isProjectData.goast }}
      </h2>
    </section>

    <ProjectAboutProject :data="isProjectData" />

    <section class="projectDetailPreviews-block landing-block">
      <div class="projectDetailPreviews">
        <div class="projectDetailPreviews-preview bg-cover" :style="{backgroundImage: `url(${isProjectData.previews.solo_1})`}"></div>
      </div>

      <div class="projectDetailPreviews double">
        <div class="projectDetailPreviews-preview bg-cover" :style="{backgroundImage: `url(${isProjectData.previews.double[0]})`}"></div>
        <div class="projectDetailPreviews-preview bg-cover" :style="{backgroundImage: `url(${isProjectData.previews.double[1]})`}"></div>
      </div>

      <div class="projectDetailPreviews">
        <div class="projectDetailPreviews-preview bg-cover" :style="{backgroundImage: `url(${isProjectData.previews.solo_2})`}"></div>
      </div>
    </section>
  </div>

  <CompaniesSlider />
  
  <div class="dark-bg">
    <ProjectsSlider />

    <ACallToAction />

    <FooterLanding />
  </div>
</main>
</template>

<script lang="ts" setup>
  import HeaderLanding from '@/components/uiLanding/layouts/HeaderLanding.vue';
  import FooterLanding from '@/components/uiLanding/layouts/FooterLanding.vue';
  
  import ProjectSubInfo from '@/components/uiLanding/project-detail/ProjectSubInfo.vue';
  import ProjectIntro from '@/components/uiLanding/project-detail/ProjectIntro.vue';
  import ProjectAboutProject from '@/components/uiLanding/project-detail/ProjectAboutProject.vue';

  import ACallToAction from '@/components/uiLanding/ACallToAction.vue';
  import CompaniesSlider from '@/components/uiLanding/CompaniesSlider.vue';
  import ProjectsSlider from '@/components/uiLanding/projects/ProjectsSlider.vue';

  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  import serverData from '@/server-data.json';

  const route = useRoute();
  const id = route.params.id;

  const isProjectData = serverData.portfolio.find((project) => project.id === Number(id));
</script>

<style lang="scss">
  .projectDetail {
    &-header {
      margin-bottom: 10rem !important;

      
      // Adaptation
      @media (max-width: 1600px) {
        margin-bottom: 8rem !important;
      }
  
      @media (max-width: 1400px) {
        margin-bottom: 7rem !important;
      }
  
      @media (max-width: 1200px) {
        margin-bottom: 6rem !important;
      }
  
      @media (max-width: 992px) {
        margin-bottom: 5rem !important;
      }
  
      @media (max-width: 768px) {
        margin-bottom: 4rem !important;
      }
  
      @media (max-width: 576px) {
        margin-bottom: 3rem !important;
      }
  
      @media (max-width: 380px) {
      }
    }
  }
  
  .projectDetailGoast {
    display: flex;
    justify-content: space-between;
    grid-gap: 9.2rem;

    &-subtitle {
      color: var(--gray-color-op70);
      font-size: 2.2rem;
      font-weight: 500;
      font-family: var(--secondary-font);
      text-wrap: nowrap;
      
      margin-top: 1.4rem;
    }

    &-title {
      font-size: 4rem;
      font-weight: 400;
      line-height: 1.4;
    }


    // Adaptation
    @media (max-width: 1600px) {
      grid-gap: 8rem;

      &-subtitle {
        font-size: 2.2rem;
        margin-top: 1.4rem;
      }

      &-title {
        font-size: 3.6rem;
      }
    }

    @media (max-width: 1400px) {
      grid-gap: 7rem;

      &-subtitle {
        font-size: 2rem;
        margin-top: 1.4rem;
      }

      &-title {
        font-size: 3.4rem;
      }
    }

    @media (max-width: 1200px) {
      grid-gap: 4.8rem;

      &-subtitle {
        font-size: 1.8rem;
        margin-top: 1.4rem;
      }

      &-title {
        font-size: 2.8rem;
      }
    }

    @media (max-width: 992px) {
      grid-gap: 4.2rem;

      &-subtitle {
        font-size: 1.8rem;
        margin-top: 1.4rem;
      }

      &-title {
        font-size: 2.4rem;
      }
    }

    @media (max-width: 768px) {
      display: block;

      &-subtitle {
        font-size: 1.8rem;
        margin: 0 0 2rem;
      }

      &-title {
        font-size: 2.2rem;
      }
    }

    @media (max-width: 576px) {
      &-subtitle {
        font-size: 1.6rem;
        margin-bottom: 1.8rem;
      }

      &-title {
        font-size: 2rem;
      }
    }

    @media (max-width: 380px) {
      &-subtitle {
        margin-bottom: 1.6rem;
      }

      &-title {
        font-size: 1.8rem;
      }
    }
  }

  .projectDetailPreviews {
    &.double {
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;

      & .projectDetailPreviews-preview {
        padding-bottom: 100%;
      }
    }

    &-block {
      display: flex;
      flex-direction: column;
      grid-gap: 10rem;

      margin-bottom: 7rem;
    }

    &-preview {
      padding-bottom: 50%;
      border-radius: 3rem;
    }


    // Adaptation
    @media (max-width: 1200px) {
      &.double {
        grid-gap: 3rem;
      }

      &-block {
        grid-gap: 8rem;
        margin-bottom: 5rem;
      }

      &-preview {
        border-radius: 2.8rem;
      }
    }

    @media (max-width: 992px) {
      &.double {
        grid-gap: 2.4rem;
      }

      &-block {
        grid-gap: 6rem;
        margin-bottom: 4rem;
      }

      &-preview {
        border-radius: 2.6rem;
      }
    }

    @media (max-width: 768px) {
      &.double {
        grid-gap: 2.2rem;
      }

      &-block {
        grid-gap: 4rem;
        margin-bottom: 3rem;
      }

      &-preview {
        border-radius: 2.4rem;
      }
    }

    @media (max-width: 576px) {
      &.double {
        grid-gap: 2rem;
      }

      &-block {
        grid-gap: 3rem;
        margin-bottom: 2.6rem;
      }

      &-preview {
        border-radius: 1.8rem;
      }
    }

    @media (max-width: 380px) {
      &.double {
        grid-gap: 1.6rem;
      }

      &-block {
        grid-gap: 2.8rem;
        margin-bottom: 2.6rem;
      }

      &-preview {
        border-radius: 1.6rem;
      }
    }
  }
</style>
