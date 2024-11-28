<template>
<section class="projectDetailSubInfos landing-block">
  <h4 class="projectDetailSubInfos-title">{{ data.subInfo.title }}</h4>

  <div class="projectDetailSubInfos-items">
    <div class="projectDetailSubInfos-item">
      <h4 class="projectDetailSubInfos-item-title">Год выполнения</h4>
      <p class="projectDetailSubInfos-item-text">{{ data.year }}</p>
    </div>

    <div class="projectDetailSubInfos-item">
      <h4 class="projectDetailSubInfos-item-title">Тип проекта</h4>
      <p class="projectDetailSubInfos-item-text">{{ data.subInfo.projectType }}</p>
    </div>

    <div class="projectDetailSubInfos-item">
      <h4 class="projectDetailSubInfos-item-title">Отрасль</h4>
      <div class="projectDetailSubInfos-item-categories">
        <Tag
          v-for="tagItem of data.subInfo.industry"
          :key="tagItem"
          :name="tagItem"
        />
      </div>
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
.projectDetailSubInfos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4.8rem;

  &-title {
    color: var(--primary-color-op40);
    font-size: 2.2rem;
    font-family: var(--secondary-font);
    line-height: 1.7;
  }

  &-items {
    display: flex;
    flex-direction: column;
    grid-gap: 2.2rem;

    & .projectDetailSubInfos-item:last-child {
      padding-bottom: 0 !important;
      border-bottom: none;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 2rem;

    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--gray-light-color);

    &-title {
      color: var(--gray-dark-color);
      font-size: 1.8rem;
      text-wrap: nowrap;
    }

    &-text {
      color: var(--gray-color);
      font-size: 1.6rem;
      text-align: right;
      font-family: var(--secondary-font);
    }

    &-categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: end;
      grid-gap: 1rem 1.2rem;
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
