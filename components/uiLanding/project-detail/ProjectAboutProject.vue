<template>
<section class="projectAboutProject landing-block">
  <div class="projectAboutProject-preview">
    <div class="projectAboutProject-preview-photo bg-cover" :style="{backgroundImage: `url(${data.aboutProject.photo_1})`}"></div>
    <h2 class="projectAboutProject-preview-title landing-title mini">{{ data.aboutProject.title }}</h2>
  </div>

  <div class="projectAboutProject-content">
    <div class="projectAboutProject-content-titles">
      <h4 class="projectAboutProject-content-title">Немного о {{ data.name }}</h4>
      <p class="projectAboutProject-content-description">{{ data.aboutProject.description }}</p>
    </div>

    <div class="projectAboutProject-content-previewSolo bg-cover" :style="{backgroundImage: `url(${data.aboutProject.photo_2})`}"></div>

    <div class="projectAboutProject-content-previewsDouble">
      <div class="projectAboutProject-content-previewsDouble-photo bg-cover" :style="{backgroundImage: `url(${data.aboutProject.photo_3})`}"></div>
      <div class="projectAboutProject-content-previewsDouble-photo bg-cover" :style="{backgroundImage: `url(${data.aboutProject.photo_4})`}"></div>
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>
  interface IProps {
    data: any
  }

  defineProps<IProps>()
</script>

<style lang="scss">
.projectAboutProject {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5.6rem;

  &-preview {
    &-photo {
      border-radius: 3rem;

      padding-bottom: 58%;
      margin-bottom: 4.4rem;
    }

    &-title {
      margin-bottom: 0 !important;
    }
  }

  &-content {
    &-title {
      font-size: 2.6rem;
      font-weight: 600;
      font-family: var(--secondary-font);

      margin-bottom: 1.8rem;
    }

    &-description {
      font-size: 2.2rem;
      color: var(--primary-color-op40);
      font-family: var(--secondary-font);

      margin-bottom: 6rem;
    }

    &-previewSolo {
      border-radius: 3rem;
      padding-bottom: 40%;

      margin-bottom: 2.4rem;
    }
    
    &-previewsDouble {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.4rem;

      &-photo {
        border-radius: 3rem;
        padding-bottom: 90%;
      }
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4.8rem;

    &-title {
      font-size: 2rem;
    }

    &-items {
      grid-gap: 2.2rem;
    }

    &-item {
      grid-gap: 2rem;
      padding-bottom: 1.6rem;

      &-title {
        font-size: 1.8rem;
      }

      &-categories {
        grid-gap: 1rem 1.2rem;
      }
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4.8rem;

    &-title {
      font-size: 2rem;
    }

    &-items {
      grid-gap: 2.2rem;
    }

    &-item {
      grid-gap: 2rem;
      padding-bottom: 1.6rem;

      &-categories {
        grid-gap: 1rem 1.2rem;
      }
    }
  }

  @media (max-width: 992px) {
    display: block;

    &-title {
      font-size: 2rem;
      margin-bottom: 4rem;
    }

    &-items {
      grid-gap: 2.2rem;
    }

    &-item {
      grid-gap: 1.8rem;
      padding-bottom: 1.6rem;

      &-categories {
        grid-gap: .8rem 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-title {
      font-size: 1.8rem;
      margin-bottom: 3.8rem;
    }

    &-items {
      grid-gap: 2rem;
    }

    &-item {
      display: block;
      padding-bottom: 2rem;

      &-title {
        margin-bottom: 1.6rem;
      }

      &-categories {
        justify-content: start;
        grid-gap: .8rem 1rem;
      }

      &-text {
        text-align: left;
      }
    }
  }

  @media (max-width: 576px) {
    &-items {
      grid-gap: 2rem;
    }

    &-item {
      display: block;
      padding-bottom: 2rem;

      &-title {
        margin-bottom: 1.6rem;
      }

      &-categories {
        grid-gap: .8rem 1rem;
      }
    }
  }

  @media (max-width: 380px) {
    &-items {
      grid-gap: 1.8rem;
    }

    &-item {
      display: block;
      padding-bottom: 1.8rem;

      &-categories {
        grid-gap: .6rem .8rem;
      }
    }
  }
}
</style>
