<template>
  <footer :class="`footer ${theme}`">
    <div class="landing-wrapper">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-top-main">
            <NuxtLink to="/">
              <SvgIcon
                class="footer-top-main-logo"
                name="logo"
                :viewboxWidth="72"
                :viewboxHeight="49"
              />
            </NuxtLink>

            <h2 class="footer-top-main-title">{{ t('footer.title') }}</h2>
          </div>

          <nav class="footer-top-navs">
            <div class="footer-top-navs-item">
              <h4 class="footer-top-navs-item-title">{{ t('navs.title') }}</h4>

              <div class="footer-top-navs-links grid">
                <NuxtLink
                  v-for="nav of navs"
                  :key="nav.link"
                  :to="nav.link"
                >
                  <span class="footer-top-links-link">{{ nav.title }}</span>
                </NuxtLink>
              </div>
            </div>

            <div class="footer-top-navs-item">
              <h4 class="footer-top-navs-item-title">{{ t('navs.services') }}</h4>

              <div class="footer-top-navs-links">
                <NuxtLink
                  v-for="service of services"
                  :key="service.link"
                  :to="service.link"
                >
                  <span class="footer-top-navs-links-link">{{ service.title }}</span>
                </NuxtLink>
              </div>
            </div>

            <div class="footer-top-navs-item">
              <h4 class="footer-top-navs-item-title">{{ t('navs.contacts') }}</h4>

              <a class="footer-top-navs-contactLink" to="/">т. <span>+7 (705) 809-49-69</span></a>
              <a class="footer-top-navs-contactLink" to="/">e. <span>info.codetau@gmail.com</span></a>
              <a class="footer-top-navs-contactLink" to="/">{{ t('contacts.address') }}</a>
            </div>
          </nav>
        </div>

        <div class="footer-bottom">
          <p class="footer-bottom-copyright">{{ t('footer.copyright') }}</p>

          <div class="footer-bottom-privicy">
            <p class="footer-bottom-privicy-title">{{ t('footer.privicy.title') }}</p>
            <div class="footer-bottom-privicy-circle"></div>

            <a href="#" class="footer-bottom-privicy-link">{{ t('footer.privicy.link') }}</a>
          </div>
        </div>

        <SvgIcon
          class="footer-inner-bg"
          name="logo-title"
          :viewboxWidth="1540"
          :viewboxHeight="228"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
  interface IProps {
    theme: 'light' | 'dark'
  }

  withDefaults(defineProps<IProps>(), {
    theme: 'dark'
  })
  const { t } = useI18n()

  const navs = [
    {
      title: t('navs.main'),
      link: '/'
    },
    {
      title: t('navs.portfolio'),
      link: '/portfolio'
    },
    {
      title: t('navs.services'),
      link: '/services'
    },
    {
      title: t('navs.contacts'),
      link: '/contacts'
    }
  ]

  const services = [
    {
      title: t('footer.services.design'),
      link: '/'
    },
    {
      title: t('footer.services.mobile'),
      link: '/portfolio'
    },
    {
      title: t('footer.services.web'),
      link: '/services'
    }
  ]
</script>

<style lang="scss" scoped>
.footer {
  &.light .footer {
    &-inner-bg {
      fill: rgba(black, .02);
    }

    &-top {
      border-bottom-color: var(--primary-color-op10);

      &-main {
        &-logo {
          fill: var(--primary-color);
        }

        &-title {
          color: var(--primary-color);
        }
      }
    }

    &-bottom {
      &-copyright,
      &-privicy-title,
      &-privicy-link {
        color: var(--gray-color-op40);
      }

      &-privicy {
        &-circle {
          background-color: var(--gray-light-color);
        }
      }
    }
  }

  &-inner {
    padding-bottom: 2.7rem;
    position: relative;

    &-bg {
      display: block;
      width: 100%;
      height: auto;

      position: absolute;
      bottom: 0;
      left: 0;

      fill: rgba(white, .01);
    }
  }

  &-top {
    display: flex;
    justify-content: space-between;
    grid-gap: 10rem;

    padding-bottom: 3.6rem;
    border-bottom: .1rem solid var(--white-color-op10);

    &-main {
      max-width: 42rem;

      &-logo {
        height: 4.9rem;
        width: 7.2rem;

        fill: var(--white-color);
        margin-bottom: 2.4rem;
      }

      &-title {
        color: var(--white-color);

        font-size: 2.4rem;
        line-height: 1.6;

        margin-bottom: 1.58em;
      }
    }

    &-navs {
      display: flex;
      grid-gap: 12rem;

      &-item {
        max-width: 30rem;

        &-title {
          color: var(--gray-color);
          font-size: 1.6rem;
          text-transform: uppercase;

          margin-bottom: 2em;
        }
      }

      &-links {
        display: flex;
        flex-direction: column;
        grid-gap: 2rem 8rem;
      }

      &-contactLink {
        margin-bottom: 1.25em;

        & span {
          color: var(--blue-light-color);
        }
      }
    }
  }

  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0;

    &-copyright,
    &-privicy-title,
    &-privicy-link {
      color: var(--gray-color);
    }

    &-privicy {
      display: flex;
      align-items: center;
      grid-gap: 2.4rem;

      &-circle {
        height: 0.4rem;
        width: 0.4rem;

        border-radius: 1rem;
        background-color: var(--gray-dark-color);
      }

      &-link {
        text-decoration: underline;
      }
    }
  }
}
</style>
