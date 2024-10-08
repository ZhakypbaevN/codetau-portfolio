export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    ru: {
      navs: {
        title: 'Навигация',
        main: 'Главная',
        portfolio: 'Портфолио',
        services: 'Услуги',
        contacts: 'Контакты'
      },
      footer: {
        title: 'Ваш путь к цифровым решениям',
        services: {
          design: 'UX/UI Дизайн',
          mobile: 'Мобильные приложения',
          web: 'Разработка Web-сайтов'
        },
        copyright: '© 2024 CodeTau',
        privicy: {
          title: 'Все права защищены',
          link: 'Политика конфиденциальности'
        }
      },
      home: {
        aboutUs: {
          title: 'Давайте знакомиться',
          description: 'CodeTau — команда опытных разработчиков и дизайнеров, способных воплотить ваши идеи в жизнь. Мы не просто создаем проекты — мы создаем решения, которые соответствуют вашим бизнес-целям и привлекают внимание пользователей.<br><br>Наша цель — превзойти ваши ожидания и помочь вашему бизнесу расти.',
          numbersItem1: 'Человек в команде',
          numbersItem2: 'Реализованных проектов',
          numbersItem3: 'Опыт в диджитале',
        },
        workflow: {
          titleFirstPart: 'Как мы работаем?',
          titleSecondPart: 'Рабочий процесс',
          processTitle_item1: 'Начало проекта — Знакомство',
          processContent_item1: 'Начинаем с обсуждения вашего проекта. Погружаемся в детали, чтобы понять ваши цели и ожидания.',
          processTitle_item2: 'Подготовка документации — Получение ТЗ',
          processContent_item2: 'Составляем подробное техническое задание, согласовываем каждый этап проекта с вами.',
          processTitle_item3: 'Разработка визуального стиля — Дизайн',
          processContent_item3: 'Разрабатываем дизайн с учетом всех ваших пожеланий, создавая визуальный стиль, который будет привлекать и удерживать внимание.',
          processTitle_item4: 'Этап реализации — Разработка',
          processContent_item4: 'Переходим к этапу программирования, обеспечивая четкую реализацию всех функциональных требований. На протяжении всего процесса поддерживаем постоянную связь, чтобы вы были в курсе прогресса.',
          processTitle_item5: 'Контроль качества — Тестирование',
          processContent_item5: 'Проводим комплексное тестирование на всех этапах разработки, чтобы убедиться в стабильности и безопасности вашего продукта.',
          processTitle_item6: 'Заключительный этап — Техподдержка',
          processContent_item6: 'После завершения разработки и успешного тестирования, запускаем проект и продолжаем поддерживать его работоспособность, предоставляя обновления и устраняя возможные проблемы.',
        },
        whyChooseUs: {
          title: 'Почему выбирают именно CodeTau',
          features: {
            featureTitle_item1: 'Гибкость и адаптивность команды',
            featureDescription_item1: 'Решаем любые задачи, за которые беремся. Делаем это качественно и в срок. Если требуется дополнительная экспертиза, мы всегда найдем и подключим нужного специалиста.',
  
            featureTitle_item2: 'Прогнозируемый результат',
            featureDescription_item2: 'Перед началом работы проводим глубокий анализ и разрабатываем бесплатную концепцию проекта, основываясь на потребностях целевой аудитории.',
  
            featureTitle_item3: 'Прозрачное сотрудничество',
            featureDescription_item3: 'Формируем четкий план работы и предоставляем регулярные отчеты по выполнению задач. Работаем как на проектной основе, так и по часовым ставкам.',
  
            featureTitle_item4: 'От аналитики к визуалу',
            featureDescription_item4: 'Погружаемся в сегменты целевой аудитории, строим сценарии взаимодействия и тестируем гипотезы для достижения оптимального результата.',
  
            featureTitle_item5: 'Индивидуальный дизайн и передовые технологии',
            featureDescription_item5: 'Разрабатываем решения, исходя из уникальных потребностей клиента. Используем современные инструменты и технологии, чтобы обеспечить высокий уровень функциональности и дизайна.',
  
            featureTitle_item6: 'Оперативная обратная связь',
            featureDescription_item6: 'Мы всегда на связи и готовы реагировать на запросы клиентов в любое время суток. Ваш проект в надежных руках 24/7.',
  
            featureTitle_item7: 'Инновации и надежность',
            featureDescription_item7: 'Мы активно внедряем новейшие технологии и разработки, обеспечивая их надежную работу на всех платформах. Наши клиенты доверяют нам, потому что мы всегда готовы предложить современные и стабильные решения, отвечающие их ожиданиям.',
          }
        }
      },
      contacts: {
        title: 'Наши конакты',
        address: 'Казахстан г. Алматы, Бостандыкский район, Байзакова, 280',
        workTime: 'Рабочее время',
        feedback: {
          title: 'Свяжитесь с нами по любому вопросу'
        },
        jobAplication: {
          title: 'Хотите работать у нас?<br> Заполните заявку и мы свяжемся',

          form: {
            myName: 'Привет! Меня зовут',
            interestedVacancy: ', я интересуюсь вакансией',
            myResume: 'Вот мое резюме',
            myPhone: ', и телефон номер',
            coverLetter: 'Также прилагаю сопроводительное письмо',
          }
        }
      },
      services: {
        title: 'Услуги',
        ourServices: 'Наши услуги',
        ourServicesTitle: 'Создаем яркие цифровые решения для вашего бизнеса',
        web: 'Web Разработка сайтов и онлайн систем',
        design: 'UX/UI Надежные дизайнерские решения',
        mobile: 'Разработка Мобильных Приложений',

        webDevelopment: {
          title: 'Web разработка сайтов и онлайн систем',

          intro: {
            title: 'Настроенный в соответствии с вашими потребностями',
            description: 'Мы ориентируемся на дизайн, ориентированный на пользователя, который повышает производительность и увеличивает доход. Наш опыт и изобретательность замечательны, но мы всегда стремимся превзойти наши предыдущие достижения.'
          }
        }
      },
      companiesSliderTitle: 'Уже помогли этим компаниям',
      developmentPlan: {
        title: 'План разработки'
      },
      aCallToAction: {
        title: 'Что вы получите,<br /> наняв нас',
        description: 'Перед началом работы проводим глубокий анализ и разрабатываем бесплатную концепцию проекта, основываясь на потребностях целевой аудитории.',
        btn: 'Посмотреть КП'
      },
      projects: {
        title: 'Наши проекты, которые говорят сами за себя'
      },

      days: {
        mo: 'Пн',
        tu: 'Вт',
        we: 'Ср',
        th: 'Чт',
        fr: 'Пт'
      }
    }
  }
}))