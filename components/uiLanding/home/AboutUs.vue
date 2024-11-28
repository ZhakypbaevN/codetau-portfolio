<template>
  <section class="landing-block aboutUs">
    <div class="landing-wrapper">
      <div class="aboutUs-inner">
        <div class="aboutUs-titles">
          <h2 class="aboutUs-title landing-title mini">{{ $t('home.aboutUs.title') }}</h2>
          <p class="aboutUs-description" v-html="$t('home.aboutUs.description')" />
        </div>

        <div class="aboutUs-numbers">
          <div
            v-for="num of numbersList"
            :key="num.title"
            class="aboutUs-numbers-item"
          >
            <h1 class="aboutUs-numbers-item-title">{{ num.title }}</h1>
            <p class="aboutUs-numbers-item-subtitle">{{ num.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const { t } = useI18n()

  const numbersList = [
    {
      title: '12+',
      subtitle: t('home.aboutUs.numbersItem1')
    },
    {
      title: '20+',
      subtitle: t('home.aboutUs.numbersItem2')
    },
    {
      title: '5+ лет',
      subtitle: t('home.aboutUs.numbersItem3')
    }
  ]
</script>

<style lang="scss" scoped>
.aboutUs {
  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-titles {
    max-width: 76rem;
  }

  &-title {
    margin-bottom: 2.8rem;
  }

  &-numbers {
    max-width: 50rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    grid-gap: 4.8rem 8.8rem;

    &-item {
      &-title {
        font-size: 4.2rem;
        font-weight: 700;
        white-space: nowrap;
        margin-bottom: .6rem;
      }

      &-subtitle {
        white-space: nowrap;
      }

      &:last-child {
        grid-column: 2/3;
      }
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    &-titles {
      max-width: 62rem;
    }

    &-title {
      margin-bottom: 2.8rem;
    }

    &-numbers {
      max-width: 48rem;
      grid-gap: 4.2rem 8rem;

      &-item {
        &-title {
          font-size: 3.8rem;
          margin-bottom: .6rem;
        }

        &:last-child {
          grid-column: 2/3;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    &-inner {
      display: block;
    }

    &-titles {
      max-width: none;
      margin-bottom: 4rem;
    }

    &-title {
      margin-bottom: 2.6rem;
    }

    &-numbers {
      max-width: none;

      display: flex;
      justify-content: space-around;
      grid-gap: 4.2rem 8rem;

      &-item {
        &-title {
          font-size: 3.8rem;
          margin-bottom: .6rem;
        }

        &:last-child {
          grid-column: auto;
        }
      }
    }
  }

  @media (max-width: 992px) {
    &-titles {
      margin-bottom: 3.8rem;
    }

    &-title {
      margin-bottom: 2.4rem;
    }

    &-numbers {
      justify-content: space-between;
      grid-gap: 4.2rem 6rem;

      &-item-title {
        font-size: 3.6rem;
        margin-bottom: .5rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-titles {
      margin-bottom: 3.6rem;
    }

    &-title {
      margin-bottom: 2.2rem;
    }

    &-numbers {
      display: grid;
      grid-template-columns: auto .6fr auto;
      grid-gap: 4.2rem 3rem;

      &-item {
        &-title {
          font-size: 3rem;
          margin-bottom: .5rem;
        }

        &-subtitle {
          white-space: normal;
        }
      }
    }
  }

  @media (max-width: 576px) {
    &-titles {
      margin-bottom: 3.4rem;
    }

    &-title {
      margin-bottom: 2rem;
    }

    &-numbers {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.8rem 3rem;

      &-item {
        &-title {
          font-size: 2.8rem;
          margin-bottom: .5rem;
        }
      }

      &-item:last-child {
        grid-column: 1/3;
      }
    }
  }

  @media (max-width: 380px) {
    &-titles {
      margin-bottom: 3.2rem;
    }

    &-title {
      margin-bottom: 1.8rem;
    }

    &-numbers {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2.4rem 2rem;

      &-item {
        &-title {
          font-size: 2.6rem;
          margin-bottom: .5rem;
        }
      }
    }
  }
}
</style>
