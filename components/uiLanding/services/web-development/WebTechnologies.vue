<template>
  <section class="webTechnologies landing-block">
    <div class="landing-wrapper">
      <h2 class="webTechnologies-title landing-title mini">
        {{ $t('services.webDevelopment.technologies.titleFirst') }}<br />
        {{ $t('services.webDevelopment.technologies.titleSecond') }}
      </h2>

      <div class="webTechnologies-items">
        <div
          v-for="(categoryOfTechnology, idx) of technologiesList"
          :key="categoryOfTechnology.title"
          class="webTechnologies-item"
        >
          <h4 class="webTechnologies-item-num">{{ `0${idx + 1}.` }}</h4>

          <div class="webTechnologies-item-mainInfo">
            <div class="webTechnologies-item-tags">
              <Tag
                v-for="tagItem of categoryOfTechnology.technologies"
                :key="tagItem"
                :name="tagItem"
                type="fill"
              />
            </div>

            <h3 class="webTechnologies-item-title">{{ categoryOfTechnology.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const technologiesList = [
    {
      title: 'FrontEnd Разработка',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue.js',
        'React',
        'TypeScript',
        'Sass',
        'Vite',
        'Nuxt.js'
      ]
    },
    {
      title: 'BackEnd Разработка',
      technologies: [
        'PHP',
        'Laravel',
        'Python',
        'Django',
        'Flask',
        'NestJS',
        'Fast API'
      ]
    },
    {
      title: 'Базы Данных',
      technologies: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'SQLite',
        'Firebase',
        'GraphQL'
      ]
    },
    {
      title: 'Методологии И Процессы',
      technologies: [
        'Agile',
        'Scrum',
        'CI/CD',
        'TDD',
        'BDD',
        'Lean Development',
        'Extreme Programming (XP)',
      ]
    },
    {
      title: 'Дизайн И Прототипирование',
      technologies: [
        'Figma',
        'Photoshop',
        'Illustrator',
        'Брендинг | Ребрендинг',
        'Айдентика',
        'Адаптивный веб-дизайн',
        'UI-Kit',
        'Анимация',
      ]
    },
    {
      title: 'Инструменты DevOps',
      technologies: [
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
        'GitLab CI/CD',
        'Terraform',
        'Ansible',
      ]
    },
    {
      title: 'Управление Версиями И Командная Работа',
      technologies: [
        'Git',
        'GitHub',
        'GitLab',
        'Bitbucket',
        'JIRA',
        'Trello',
        'Notion',
      ]
    },
    {
      title: 'Тестирование И Отладка',
      technologies: [
        'Cypress',
        'Jest',
        'Mocha',
        'Chai',
        'Postman',
      ]
    }
  ];
</script>

<style lang="scss" scoped>
.webTechnologies {
  &-title {
    margin-bottom: 6rem;
  }

  &-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    & .webTechnologies {
      &-item:nth-child(1),
      &-item:nth-child(5) {
        padding-left: 0;
      }

      &-item:nth-child(8),
      &-item:nth-child(4) {
        border-right: none;
        padding-right: 0;
      }

      &-item:nth-child(5),
      &-item:nth-child(6),
      &-item:nth-child(7),
      &-item:nth-child(8) {
        padding-top: 2rem;
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }

  &-item {
    min-height: 20rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-gap: 1rem;

    padding: 0 2rem 2rem 2rem;
    border-bottom: 1px solid var(--gray-light-color);
    border-right: 1px solid var(--gray-light-color);

    &-num {
      font-size: 1.6rem;
      font-family: var(--secondary-font);
    }

    &-mainInfo {
      display: flex;
      flex-direction: column;
      align-items: end;
    }

    &-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: end;
      grid-gap: 1rem 1.2rem;
      margin-bottom: 3.2rem;
    }

    &-title {
      max-width: 25.8rem;

      color: var(--gray-dark-color);
      font-size: 2rem;
      font-weight: 500;
      text-align: right;
    }
  }

  // Adaptation
  @media (max-width: 1200px) {
    &-title {
      margin-bottom: 5rem;
    }

    &-items {
      grid-template-columns: repeat(4, 1fr);

      & .webTechnologies {
        &-item:nth-child(1),
        &-item:nth-child(5) {
          padding-left: 0;
        }

        &-item:nth-child(8),
        &-item:nth-child(4) {
          border-right: none;
          padding-right: 0;
        }

        &-item:nth-child(5),
        &-item:nth-child(6),
        &-item:nth-child(7),
        &-item:nth-child(8) {
          padding-top: 1.8rem;
          padding-bottom: 0;
          border-bottom: none;
        }
      }
    }

    &-item {
      min-height: 1.9rem;
      padding: 0 1.8rem 1.8rem 1.8rem;

      &-num {
        font-size: 1.6rem;
      }

      &-tags {
        grid-gap: 1rem 1.2rem;
        margin-bottom: 3rem;
      }

      &-title {
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 992px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-items {
      grid-template-columns: repeat(3, 1fr);

      & .webTechnologies {
        &-item:nth-child(1n) {
          padding: 0 1.6rem 1.6rem 1.6rem;
          border-bottom: 1px solid var(--gray-light-color);
          border-right: 1px solid var(--gray-light-color);
        }
        
        &-item:nth-child(1),
        &-item:nth-child(4),
        &-item:nth-child(7) {
          padding-left: 0;
        }

        &-item:nth-child(3),
        &-item:nth-child(6) {
          border-right: none;
          padding-right: 0;
        }

        &-item:nth-child(4),
        &-item:nth-child(5),
        &-item:nth-child(6),
        &-item:nth-child(7),
        &-item:nth-child(8) {
          padding-top: 1.6rem;
        }

        &-item:nth-child(7),
        &-item:nth-child(8) {
          border-bottom: none;
          padding-bottom: 0;
        }
      }
    }

    &-item {
      min-height: 1.9rem;

      &-num {
        font-size: 1.6rem;
      }

      &-tags {
        grid-gap: 1rem 1.2rem;
        margin-bottom: 2.8rem;
      }

      &-title {
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-items {
      grid-template-columns: repeat(2, 1fr);

      & .webTechnologies {
        &-item:nth-child(1n) {
          padding: 0 1.4rem 1.4rem 1.4rem;
          border-bottom: 1px solid var(--gray-light-color);
          border-right: 1px solid var(--gray-light-color);
        }
        
        &-item:nth-child(2n + 1) {
          padding-left: 0;
        }

        &-item:nth-child(2n + 2) {
          border-right: none;
          padding-right: 0;
        }

        &-item:nth-child(3),
        &-item:nth-child(4),
        &-item:nth-child(5),
        &-item:nth-child(6),
        &-item:nth-child(7),
        &-item:nth-child(8) {
          padding-top: 1.4rem;
        }

        &-item:nth-child(7),
        &-item:nth-child(8) {
          border-bottom: none;
          padding-bottom: 0;
        }
      }
    }

    &-item {
      &-num {
        font-size: 1.6rem;
      }

      &-tags {
        grid-gap: 1rem 1.2rem;
        margin-bottom: 2.6rem;
      }

      &-title {
        max-width: 80%;
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 576px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-items {
      grid-template-columns: repeat(2, 1fr);

      & .webTechnologies {
        &-item:nth-child(1n) {
          padding: 0 1.2rem 1.2rem 1.2rem;
          border-bottom: 1px solid var(--gray-light-color);
          border-right: 1px solid var(--gray-light-color);
        }
        
        &-item:nth-child(2n + 1) {
          padding-left: 0;
        }

        &-item:nth-child(2n + 2) {
          border-right: none;
          padding-right: 0;
        }

        &-item:nth-child(3),
        &-item:nth-child(4),
        &-item:nth-child(5),
        &-item:nth-child(6),
        &-item:nth-child(7),
        &-item:nth-child(8) {
          padding-top: 1.2rem;
        }

        &-item:nth-child(7),
        &-item:nth-child(8) {
          border-bottom: none;
          padding-bottom: 0;
        }
      }
    }

    &-item {
      &-num {
        font-size: 1.4rem;
      }

      &-tags {
        grid-gap: .8rem 1rem;
        margin-bottom: 2.4rem;
      }

      &-title {
        max-width: 85%;
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 380px) {
    &-title {
      margin-bottom: 4rem;
    }

    &-items {
      display: block;

      & .webTechnologies {
        &-item:nth-child(1n) {
          padding: 1.2rem 0 1.2rem;
          border-bottom: 1px solid var(--gray-light-color);
          border-right: none;
        }
        
        &-item:first-child {
          padding-top: 0;
        }

        &-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      }
    }

    &-item {
      min-height: auto;
      &-num {
        font-size: 1.4rem;
      }

      &-tags {
        grid-gap: .8rem 1rem;
        margin-bottom: 2.2rem;
      }

      &-title {
        max-width: 85%;
        font-size: 1.6rem;
      }
    }
  }
}
</style>
