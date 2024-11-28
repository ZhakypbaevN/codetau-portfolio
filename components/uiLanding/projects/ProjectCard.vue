<template>
  <NuxtLink
    :class="`projectItem ${theme}`"
    :to="`/project-detail/${data.id}`"
  >
    <div class="projectItem-preview">
      <div class="projectItem-preview-img bg-cover" :style="{backgroundImage: `url(${data.preview})`}"></div>

      <div class="projectItem-preview-arrow">
        <SvgIcon
          classMainName="projectItem-preview-arrow-icon"
          name="chevron-top-right"
        />
      </div>
    </div>

    <div class="projectItem-categories">
      <Tag
        v-for="(tagItem, idx) of data.workTypes"
        :key="idx"
        :name="tagItem"
        :theme="theme" :type="theme == 'dark' ? 'fill' : 'outlined'"
      />
    </div>

    <h3 class="projectItem-title">{{ data.name }}</h3>
  </NuxtLink>
</template>

<script lang="ts" setup>
  interface IProps {
    theme?: 'dark' | 'light',
    data?: any
  }

  withDefaults(defineProps<IProps>(), {
    theme: 'dark',
    data: {}
  })
</script>

<style lang="scss">
.projectItem {
  min-width: 49rem;
  width: 49rem;
  padding: 1.4rem 1.4rem 2rem;

  overflow: hidden;
  
  border-radius: 2.8rem;
  transition: all .4s ease-out;

  &.light {
    background-color: var(--white-color);
    box-shadow: 0 .2rem 2rem 0 rgba(black, .07);

    &:hover {
      box-shadow: 0 8px 25px var(--accent-color-op10), 0 0 15px var(--accent-color-op10);
      
      & .projectItem {
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

        &-title {
          color: var(--accent-color);
        }
      }
    }
  }

  &.dark {
    background-color: var(--bg-v2-color);

    & .projectItem {
      &-preview {
        &-img {
          border-color: var(--primary-color);
        }

        &-arrow {
          background-color: var(--primary-color-op60);

          &:hover {
            background-color: var(--primary-color);
          }
        }
      }
    }

    &:hover {
      background-color: darken(#1f1f1f, .2);
      box-shadow: 0 8px 25px rgba(#4481FF, .02), 0 0 15px rgba(#4481FF, .02);
      
      & .projectItem {
        &-preview {
          &-img {
            transform: scale(1.2);
            transition: all 8s ease-out;
          }

          &-arrow {
            top: 1.2rem;
            right: 1.2rem;
            opacity: 1;
            background-color: var(--primary-color-op60);

            transition: right .8s ease-in-out,
              top .8s ease-in-out,
              opacity .3s ease-in-out;
          }
        }

        &-title {
          color: var(--accent-color);
        }
      }
    }
  }

  &-preview {
    position: relative;
    overflow: hidden;
    border-radius: 1.4rem;
    
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

  &-categories {
    display: flex;
    grid-gap: .8rem;
    margin-bottom: 1.2rem;
  }

  &-title {
    font-size: 2.2rem;
    font-weight: 600;

    transition: all .3s ease-out;
  }

  // Adaptation
  @media (max-width: 1400px) {
    padding: 1.2rem 1.2rem 1.8rem;
    border-radius: 2.8rem;

    &-preview {
      border-radius: 1.4rem;
      margin-bottom: 2rem;
    }

    &-categories {
      grid-gap: .8rem;
      margin-bottom: 1.2rem;
    }

    &-title {
      font-size: 2.2rem;
      font-weight: 600;
    }
  }

  @media (max-width: 992px) {
    padding: 1rem 1rem 1.6rem;
    border-radius: 2.2rem;

    &-preview {
      border-radius: 1.2rem;
      margin-bottom: 1.8rem;
    }

    &-categories {
      grid-gap: .6rem;
      margin-bottom: 1rem;
    }

    &-title {
      font-size: 2rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 1.6rem;
    border-radius: 2.2rem;

    &-preview {
      border-radius: 1.2rem;
      margin-bottom: 1.8rem;
    }

    &-categories {
      grid-gap: .6rem;
      margin-bottom: 1rem;
    }

    &-title {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  @media (max-width: 576px) {
  }

  @media (max-width: 380px) {
  }
}
</style>
