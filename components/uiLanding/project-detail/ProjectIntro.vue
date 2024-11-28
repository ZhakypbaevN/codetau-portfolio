<template>
<section class="projectDetailIntro landing-block">
  <div class="projectDetailIntro-titles">
    <h4 class="projectDetailIntro-titles-year">/ {{ data.year }}</h4>
    <div class="projectDetailIntro-titles-main">
      <h2 class="projectDetailIntro-titles-name">{{ data.name }}</h2>
      <p class="projectDetailIntro-titles-description">{{ data.introDescription }}</p>
    </div>
  </div>

  <div class="projectDetailIntro-tags">
    <div class="projectDetailIntro-tagsBlock">
      <h3 class="projectDetailIntro-tagsBlock-title">Клиент</h3>

      <p class="projectDetailIntro-tagsBlock-text">{{ data.client }}</p>
    </div>

    <div class="projectDetailIntro-tagsBlock">
      <h3 class="projectDetailIntro-tagsBlock-title">Тип работы</h3>

      <div class="projectDetailIntro-tagsBlock-categories">
        <Tag
          v-for="tagItem of data.workTypes"
          :key="tagItem"
          :name="tagItem"
        />
      </div>
    </div>

    <div class="projectDetailIntro-tagsBlock">
      <h3 class="projectDetailIntro-tagsBlock-title">Роль команды</h3>

      <div class="projectDetailIntro-tagsBlock-categories">
        <Tag
          v-for="tagItem of data.role"
          :key="tagItem"
          :name="tagItem"
        />
      </div>
    </div>

    <div class="projectDetailIntro-tagsBlock">
      <h3 class="projectDetailIntro-tagsBlock-title">Использованные технологии</h3>

      <div class="projectDetailIntro-tagsBlock-categories">
        <Tag
          v-for="tagItem of data.technologies"
          :key="tagItem"
          :name="tagItem"
        />
      </div>
    </div>
  </div>

  <div class="projectDetailIntro-previewList">
    <div class="projectDetailIntro-previewList-preview bg-cover" :style="{backgroundImage: `url(${data.introPhotos[0]})`}"></div>
    <div class="projectDetailIntro-previewList-preview bg-cover" :style="{backgroundImage: `url(${data.introPhotos[1]})`}"></div>
    <div class="projectDetailIntro-previewList-preview bg-cover" :style="{backgroundImage: `url(${data.introPhotos[2]})`}"></div>
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
.projectDetailIntro {
  padding-top: 0px !important;
  &-titles {
    margin-bottom: 12rem;

    &-year {
      color: var(--primary-color-op40);
      font-size: 1.8rem;

      margin-bottom: 1rem;
    }

    &-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-gap: 4rem;
    }

    &-name {
      display: inline-block;

      font-size: 5.2rem;
      font-weight: 600;
      line-height: 1.4;
    }

    &-description {
      max-width: 58rem;

      font-size: 1.6rem;
      text-align: right;
    }
  }
  
  &-tags {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--gray-light-color);
    
    padding-top: 1.4rem;
    margin-bottom: 2.8rem;

    &Block {
      padding: 1.6rem 3rem 4rem;
      border-right: 1px solid var(--gray-light-color);

      &-title {
        color: var(--gray-dark-color);
        font-size: 1.8rem;
        margin-bottom: 1.6rem;
      }

      &-text {
        color: var(--gray-color);
        font-size: 1.6rem;
        font-family: var(--secondary-font);
      }

      &-categories {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 1rem 1.2rem;
      }
    }

    &Block:first-child {
      padding-left: 0;
    }

    &Block:last-child {
      padding-right: 0;
      border-right: none;
    }
  }
  
  &-previewList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.4rem;

    &-preview {
      border-radius: 3rem;
      padding-bottom: 83%;
    }

    &-preview:last-child {
      grid-column: 3/5;
      padding-bottom: 40%;
    }
  }


  // Adaptation
  @media (max-width: 1600px) {
    &-titles {
      margin-bottom: 10rem;

      &-year {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      &-main {
        grid-gap: 4rem;
      }

      &-name {
        font-size: 4.6rem;
      }

      &-description {
        max-width: 54rem;
      }
    }
    
    &-tags {
      grid-template-columns: repeat(4, 1fr);
      
      padding-top: 1.4rem;
      margin-bottom: 2.8rem;

      &Block {
        padding: 1.6rem 3rem 4rem;

        &-title {
          margin-bottom: 1.6rem;
        }

        &-categories {
          grid-gap: 1rem 1.2rem;
        }
      }
    }
    
    &-previewList {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2.4rem;

      &-preview {
        border-radius: 3rem;
      }

      &-preview:last-child {
        grid-column: 3/5;
      }
    }
  }

  @media (max-width: 1400px) {
    &-titles {
      margin-bottom: 8rem;

      &-year {
        font-size: 1.8rem;
        margin-bottom: .8rem;
      }

      &-main {
        grid-gap: 4rem;
      }

      &-name {
        font-size: 4.2rem;
      }

      &-description {
        max-width: 42rem;
      }
    }
    
    &-tags {
      grid-template-columns: repeat(4, 1fr);
      
      padding-top: 1.2rem;
      margin-bottom: 2.6rem;

      &Block {
        padding: 1.4rem 2rem 3.8rem;

        &-title {
          margin-bottom: 1.6rem;
        }

        &-categories {
          grid-gap: .8rem 1rem;
        }
      }
    }
    
    &-previewList {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2.2rem;

      &-preview {
        border-radius: 2.8rem;
      }

      &-preview:last-child {
        grid-column: 3/5;
      }
    }
  }

  @media (max-width: 1200px) {
    &-titles {
      margin-bottom: 7rem;

      &-year {
        font-size: 1.8rem;
        margin-bottom: .6rem;
      }

      &-main {
        grid-gap: 3.2rem;
      }

      &-name {
        font-size: 3.8rem;
      }

      &-description {
        max-width: 38rem;
      }
    }
    
    &-tags {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.4rem 0;
      
      padding-top: 1.2rem;
      margin-bottom: 2.6rem;

      &Block {
        padding: 1.4rem 2rem 2.8rem;

        &-title {
          margin-bottom: 1.6rem;
        }

        &-categories {
          grid-gap: .8rem 1rem;
        }
      }

      &Block:nth-child(1),
      &Block:nth-child(2) {
        position: relative;

        &::after {
          content: '';

          display: block;
          width: calc(100% - 1rem);
          height: 0;

          position: absolute;
          left: 50%;
          bottom: -.7rem;
          transform: translateX(-50%);
          border-bottom: 1px solid var(--gray-light-color);
        }
      }

      &Block:nth-child(2) {
        padding-right: 0;
        border-right: none;
      }

      &Block:nth-child(3) {
        padding-left: 0;
      }
    }
    
    &-previewList {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2rem;

      &-preview {
        border-radius: 2.6rem;
      }

      &-preview:last-child {
        grid-column: 3/5;
      }
    }
  }

  @media (max-width: 992px) {
    &-titles {
      margin-bottom: 6rem;

      &-year {
        font-size: 1.6rem;
        margin-bottom: .6rem;
      }

      &-main {
        display: block;
      }

      &-name {
        font-size: 3.6rem;
        margin-bottom: 3rem;
      }

      &-description {
        max-width: 100%;
        text-align: left;
      }
    }
    
    &-tags {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.4rem 0;
      
      padding-top: 1.2rem;
      margin-bottom: 2.6rem;

      &Block {
        padding: 1.4rem 2rem 2.8rem;

        &-title {
          margin-bottom: 1.6rem;
        }

        &-categories {
          grid-gap: .8rem 1rem;
        }
      }

      &Block:nth-child(1),
      &Block:nth-child(2) {
        &::after {
          width: calc(100% - 1rem);
          bottom: -.7rem;
        }
      }
    }
    
    &-previewList {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;

      &-preview {
        border-radius: 2.4rem;
      }

      &-preview:last-child {
        grid-column: 1/3;
      }
    }
  }

  @media (max-width: 768px) {
    &-titles {
      margin-bottom: 5rem;

      &-year {
        margin-bottom: .8rem;
      }

      &-name {
        font-size: 3rem;
        margin-bottom: 2.4rem;
      }

      &-description {
        max-width: 100%;
        text-align: left;
      }
    }
    
    &-tags {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.2rem 0;
      
      padding-top: 1rem;
      margin-bottom: 2.4rem;

      &Block {
        padding: 1.2rem 1.6rem 2.4rem;

        &-title {
          margin-bottom: 1.6rem;
        }

        &-categories {
          grid-gap: .6rem .8rem;
        }
      }

      &Block:nth-child(1),
      &Block:nth-child(2) {
        &::after {
          width: calc(100% - 1rem);
          bottom: -.6rem;
        }
      }
    }
    
    &-previewList {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.8rem;

      &-preview {
        border-radius: 2.2rem;
      }

      &-preview:last-child {
        grid-column: 1/3;
      }
    }
  }

  @media (max-width: 576px) {
    &-titles {
      margin-bottom: 4rem;

      &-year {
        font-size: 1.4rem;
      }

      &-name {
        font-size: 2.6rem;
        margin-bottom: 2rem;
      }
    }
    
    &-tags {
      display: block;
      
      padding-top: 0px;
      margin-bottom: 2.2rem;

      border: none;

      &Block {
        padding: 2rem 0 !important;
        border-right: none;
        border-top: 1px solid var(--gray-light-color);

        &::after {
          display: none !important;
        }

        &-title {
          margin-bottom: 1.6rem;
        }

        &-categories {
          grid-gap: .4rem .6rem;
        }
      }
    }
    
    &-previewList {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.4rem;

      &-preview {
        border-radius: 2rem;
      }
    }
  }

  @media (max-width: 380px) {
    &-titles {
      margin-bottom: 3.6rem;

      &-name {
        font-size: 2.2rem;
        margin-bottom: 1.6rem;
      }
    }
    
    &-tags {
      margin-bottom: 2.2rem;

      border: none;

      &Block {
        padding: 1.8rem 0 !important;

        &-title {
          margin-bottom: 1.4rem;
        }

        &-categories {
          grid-gap: .4rem .6rem;
        }
      }
    }
  }
}
</style>
