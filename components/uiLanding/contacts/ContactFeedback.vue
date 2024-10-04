<template>
  <div class="landing-block">
    <div class="landing-wrapper">
      <h2 class="contactsFeedback-title landing-title mini">{{ $t('contacts.feedback.title') }}</h2>

      <div class="contactsFeedback-inner">
        <form class="contactsFeedback-form"></form>

        <div class="contactsFeedback-contacts">
          <div class="contactsFeedback-contacts-top">
            <div class="contactsFeedback-contacts-links">
              <a class="contactsFeedback-contacts-link" to="/">т. <span>+7 (705) 809-49-69</span></a>
              <a class="contactsFeedback-contacts-link" to="/">e. <span>info.codetau@gmail.com</span></a>
              <a class="contactsFeedback-contacts-link" to="/">{{ $t('contacts.address') }}</a>
            </div>
            <div class="contactsFeedback-workTime">
              <h4 class="contactsFeedback-workTime-title">{{ $t('contacts.workTime') }}</h4>

              <div class="contactsFeedback-workTime-days">
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.mo') }}</h4></div>
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.tu') }}</h4></div>
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.we') }}</h4></div>
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.th') }}</h4></div>
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.fr') }}</h4></div>
              </div>
            </div>
          </div>
          <div class="contactsFeedback-contacts-map"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.contactsFeedback {
  &-title {
    margin-bottom: 1em;
  }

  &-inner {
    display: grid;
    grid-template-columns: 52rem 1fr;
    grid-gap: 6.8rem;
  }

  &-contacts {
    padding-top: 2.2rem;

    &-top {
      display: flex;
      justify-content: space-between;

      margin-bottom: 4.2rem;
    }

    &-links {
      max-width: 42rem;
    }

    &-link {
      display: block;
      margin-bottom: 1.25em;

      & span {
        color: var(--blue-light-color);
      }
    }
  }

  &-workTime {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
      color: var(--gray-color);
      font-size: 1.6rem;
      font-weight: 400;
      font-family: var(--secondary-font);
      
      margin-bottom: .75em;
      position: relative;

      &::before,
      &::after {
        content: '';

        display: block;
        width: 7.5rem;
        height: 1rem;

        position: absolute;
        bottom: 0;
        z-index: 1;
      }

      &::before {
        left: -8.9rem;

        border-top: .1rem solid var(--primary-color-op20);
        border-left: .1rem solid var(--primary-color-op20);
        border-top-left-radius: 2rem;
      }

      &::after {
        right: -8.9rem;

        border-top: .1rem solid var(--primary-color-op20);
        border-right: .1rem solid var(--primary-color-op20);
        border-top-right-radius: 2rem;
      }
    }

    &-days {
      display: flex;
      grid-gap: 1.5rem;

      &-item {
        height: 6rem;
        width: 6rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: .4rem;
        background-color: var(--gray-color-op10);

        & h4 {
          color: var(--gray-color-op40);
          font-size: 2rem;
        }
      }

      &-item:first-child,
      &-item:last-child {
        background-color: var(--perple-light-color);

        & h4 {
          color: var(--white-color);
        }
      }
    }
  }
}
</style>
