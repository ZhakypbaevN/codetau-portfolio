<template>
  <section :class="`landing-block aCallToAction ${theme}`">
    <div class="landing-wrapper">
      <div :class="`landing-notesBG ${theme}`">
        <Cursor class="aCallToAction-cursor first" />
        <Cursor class="aCallToAction-cursor second" />
        <Cursor class="aCallToAction-cursor third" />

        <Comment
          class="aCallToAction-comment first"
          :title="$t('comments.advantages_you_deserve')"
          :theme="theme"
        />
        <Comment
          class="aCallToAction-comment second"
          :title="$t('comments.results_exceeding_expectations')"
          :theme="theme"
          closed
        />

        <SelectionText
          class="aCallToAction-title landing-title center"
          :title="$t('aCallToAction.title')"
          :startIdx="7"
          :endIdx="16"
        />
        <p class="aCallToAction-description landing-description center">{{ $t('aCallToAction.description') }}</p>

        <a href="/assets/docs/portfolio.pdf" target="_blank">
          <Button
            class="aCallToAction-btn"
            :name="$t('aCallToAction.btn')"
            :loading="false"
            :type="theme == 'dark' ? 'default' : 'default-dark'"
          >
            <SvgIcon
              :className="`aCallToAction-btn-icon ${theme}`"
              name="feature"
            />
          </Button>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  interface IProps {
    theme?: 'light' | 'dark'
  }

  withDefaults(defineProps<IProps>(), {
    theme: 'dark'
  })
</script>

<style lang="scss">
.aCallToAction {
  padding-bottom: 0px !important;
  margin-bottom: 12rem;

  &.light .aCallToAction {
    &-description {
      color: var(--gray-color-op70);
    }
  }

  &-cursor {
    position: absolute;
    z-index: 5;

    &.first {
      top: 3rem;
      left: 50%;
      transform: translateX(-50%);
    }

    &.second {
      top: 50%;
      left: 20%;
      transform: translate(-50%, -80%);
    }

    &.third {
      top: 50%;
      left: 70%;
      transform: translate(-50%, -30%);
    }
  }

  &-comment {
    position: absolute;
    z-index: 2;

    &.first {
      top: 65%;
      left: 6%;
      transform: translate(-35%, -94%);
    }

    &.second {
      top: 50%;
      left: 88%;
      transform: translate(-50%, -12%);
    }
  }

  &-title {
    margin-bottom: .26em;
  }

  &-description {
    max-width: 66rem;

    color: rgba(white, .6);
    margin-bottom: 3.2rem;
  }

  &-btn {
    display: flex;
    align-items: center;
    grid-gap: 1rem;

    & svg {
      height: 2.2rem;
      width: 2.2rem;

      stroke: var(--white-color);

      &.light {
        stroke: var(--primary-color);
      }
    }
  }


  // Adaptation
  @media (max-width: 1600px) {
    margin-bottom: 12rem;

    &-cursor {
      &.first {
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
      }

      &.second {
        top: 50%;
        left: 20%;
        transform: translate(-50%, -80%);
      }

      &.third {
        top: 50%;
        left: 70%;
        transform: translate(-50%, -30%);
      }
    }

    &-comment {
      &.first {
        top: 65%;
        left: 2%;
        transform: translate(-35%, -98%);
      }

      &.second {
        top: 50%;
        left: 82%;
        transform: translate(-50%, -18%);
      }
    }

    &-title {
      margin-bottom: .26em;
    }

    &-description {
      max-width: 66rem;
      margin-bottom: 3.2rem;
    }

    &-btn {
      grid-gap: 1rem;

      & svg {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
  }

  @media (max-width: 1400px) {
    margin-bottom: 10rem;

    &-cursor {
      &.first {
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
      }

      &.second {
        top: 50%;
        left: 20%;
        transform: translate(-50%, -80%);
      }

      &.third {
        top: 50%;
        left: 70%;
        transform: translate(-50%, -30%);
      }
    }

    &-comment {
      &.first {
        top: 44%;
        left: 2%;
        transform: translate(-56%, -98%);
      }

      &.second {
        top: 50%;
        left: 82%;
        transform: translate(-50%, -18%);
      }
    }

    &-title {
      margin-bottom: .26em;
    }

    &-description {
      max-width: 66rem;
      margin-bottom: 3.2rem;
    }

    &-btn {
      grid-gap: 1rem;

      & svg {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
  }

  @media (max-width: 1200px) {
    margin-bottom: 8rem;

    &-cursor {
      &.first {
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
      }

      &.second {
        top: 50%;
        left: 20%;
        transform: translate(-50%, -80%);
      }

      &.third {
        top: 50%;
        left: 70%;
        transform: translate(-50%, -30%);
      }
    }

    &-comment {
      &.first {
        top: 80%;
        left: -2rem;
        transform: translateY(-20%);
      }

      &.second {
        top: 80%;
        left: 70%;
        transform: translate(-20%, -30%);
      }
    }

    &-title {
      margin-bottom: .26em;
    }

    &-description {
      max-width: 66rem;
      margin-bottom: 3.2rem;
    }

    &-btn {
      grid-gap: 1rem;

      & svg {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
  }

  @media (max-width: 992px) {
    margin-bottom: 6rem;

    &-cursor {
      &.first {
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
      }

      &.second {
        top: 50%;
        left: 20%;
        transform: translate(-50%, -80%);
      }

      &.third {
        top: 50%;
        left: 70%;
        transform: translate(-50%, -30%);
      }
    }

    &-comment {
      &.first {
        top: 1rem;
        left: 6rem;
        transform: none;
      }

      &.second {
        top: 90%;
        left: 70%;
        transform: translate(-10%, -30%);
      }
    }

    &-title {
      margin-bottom: .2em;
    }

    &-description {
      margin-bottom: 3rem;
    }

    &-btn {
      grid-gap: .8rem;

      & svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    &-cursor {
      &.first {
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
      }

      &.second {
        top: 50%;
        left: 20%;
        transform: translate(-50%, -80%);
      }

      &.third {
        top: 50%;
        left: 70%;
        transform: translate(-50%, -30%);
      }
    }

    &-comment {
      &.first {
        top: .6rem;
        left: 1rem;
        transform: none;
      }

      &.second {
        top: 90%;
        left: 70%;
        transform: translate(-10%, -30%);
      }
    }

    &-title {
      margin-bottom: .2em;
    }

    &-description {
      margin-bottom: 3rem;
    }

    &-btn {
      grid-gap: .8rem;

      & svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  @media (max-width: 576px) {
    margin-bottom: 5rem;

    &-cursor {
      &.first {
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
      }

      &.second {
        top: 50%;
        left: 20%;
        transform: translate(-50%, -80%);
      }

      &.third {
        top: 50%;
        left: 70%;
        transform: translate(-50%, -30%);
      }
    }

    &-comment {
      &.first {
        top: .6rem;
        left: 1rem;
        transform: none;
      }

      &.second {
        top: auto;
        bottom: 0rem;
        left: 56%;
        transform: translateX(-34%);
      }
    }

    &-title {
      margin-bottom: .2em;
    }

    &-description {
      margin-bottom: 3rem;
    }

    &-btn {
      grid-gap: .8rem;

      & svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  @media (max-width: 380px) {
  }
}
</style>
