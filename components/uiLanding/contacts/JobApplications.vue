<template>
  <div class="landing-block">
    <div class="landing-wrapper">
      <h2 class="jobAplication-title landing-title mini" v-html="$t('contacts.jobAplication.title')"></h2>

      <form class="jobAplication-form">
        <div class="jobAplication-form-inputs">
          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.myName') }}</h3>
            _
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.interestedVacancy') }}</h3>
            _
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>

          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.myResume') }}</h3>
            _
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.myPhone') }}</h3>
            _
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>

          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.coverLetter') }}</h3>
            _
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  
</script>

<style lang="scss" scoped>
.jobAplication {
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

  &-form {
    &-inputs {
      display: flex;
      flex-direction: column;
      grid-gap: 2.8rem;
    }

    &-row {
      display: flex;
      align-items: center;
      grid-gap: 2rem;

      &-title {
        font-size: 2.4rem;
        line-height: 1.25;
        letter-spacing: 1.4%;
      }
    }
  }
}
</style>
