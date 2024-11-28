<template>
  <section class="mobileTechnologies landing-block">
    <div class="landing-wrapper">
      <h2 class="mobileTechnologies-title landing-title mini">
        {{ $t('services.mobileDevelopment.technologies.titleFirst') }}<br />
        {{ $t('services.mobileDevelopment.technologies.titleSecond') }}
      </h2>

      <div class="mobileTechnologies-items">
        <div
          v-for="(categoryOfTechnology) of technologiesList"
          :key="categoryOfTechnology.title"
          class="mobileTechnologies-item"
        >
          <h3 class="mobileTechnologies-item-title">{{ categoryOfTechnology.title }}</h3>

          <div class="mobileTechnologies-item-tags">
            <Tag
              v-for="tagItem of categoryOfTechnology.technologies"
              :key="tagItem"
              :name="tagItem"
              type="fill"
              size="middle"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const technologiesList = [
    {
      title: 'Кросс-платформа',
      technologies: [
        'Flutter',
        'Dart',
        'Firebase',
        'REST API',
        'GraphQL',
        'SQLite',
        'JSON',
        'CI/CD'
      ]
    },
    {
      title: 'База данных',
      technologies: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'SQLite',
        'Firebase',
        'Redis',
        'Elasticsearch',
        'Cassandra'
      ]
    }
  ];
</script>

<style lang="scss" scoped>
.mobileTechnologies {
  &-title {
    margin-bottom: 6rem;
  }

  &-items {
    display: flex;
    flex-direction: column;
    grid-gap: 4rem;
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 4rem;

    padding-bottom: 3.4rem;
    border-bottom: 1px solid var(--gray-light-color);

    &-title {
      color: var(--gray-color);
      font-size: 2.8rem;
      font-weight: 600;
      text-wrap: nowrap;
    }

    &-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: end;
      grid-gap: 2rem;
    }
  }

  // Adaptation
  @media (max-width: 1200px) {
    &-title {
      margin-bottom: 5rem;
    }

    &-items {
      grid-gap: 3.8rem;
    }

    &-item {
      grid-gap: 3rem;
      padding-bottom: 3.2rem;

      &-title {
        font-size: 2.6rem;
      }

      &-tags {
        grid-gap: 1.8rem;
      }
    }
  }

  @media (max-width: 992px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-items {
      grid-gap: 3.6rem;
    }

    &-item {
      flex-direction: column;
      align-items: flex-start;
      grid-gap: 2.8rem;
      padding-bottom: 3rem;

      &-title {
        font-size: 2.4rem;
      }

      &-tags {
        justify-content: start;
        grid-gap: 1.6rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-items {
      grid-gap: 3.4rem;
    }

    &-item {
      grid-gap: 2.6rem;
      padding-bottom: 2.8rem;

      &-title {
        font-size: 2.2rem;
      }

      &-tags {
        grid-gap: 1.4rem;
      }
    }
  }

  @media (max-width: 576px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-items {
      grid-gap: 3.2rem;
    }

    &-item {
      grid-gap: 2.4rem;
      padding-bottom: 2.6rem;

      &-title {
        font-size: 2rem;
      }

      &-tags {
        grid-gap: 1.2rem;
      }
    }
  }

  @media (max-width: 380px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-items {
      grid-gap: 3rem;
    }

    &-item {
      grid-gap: 2.2rem;
      padding-bottom: 2.4rem;

      &-title {
        font-size: 1.8rem;
      }

      &-tags {
        grid-gap: 1rem;
      }
    }
  }
}
</style>
