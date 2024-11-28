<template>
  <footer :class="`footerLanding ${theme}`">
    <div class="landing-wrapper">
      <div class="footerLanding-inner">
        <div class="footerLanding-top">
          <div class="footerLanding-top-main">
            <div class="footerLanding-top-main-content">
              <NuxtLink to="/">
                <SvgIcon
                  className="footerLanding-top-main-content-logo"
                  name="logo"
                />
              </NuxtLink>

              <h2 class="footerLanding-top-main-content-title">{{ t('footer.title') }}</h2>
            </div>

            <NuxtLink to="/contacts#contactsFeedback">
              <Button
                class="footerLanding-top-main-btn"
                :name="t('footer.btn-title')"
                :loading="false"
                :type="theme == 'dark' ? 'default' : 'default-dark'"
              >
                <SvgIcon
                  className="footerLanding-top-main-btn-icon"
                  name="feature"
                />
              </Button>
            </NuxtLink>
          </div>

          <nav class="footerLanding-top-navs">
            <div class="footerLanding-top-navs-item">
              <h4 class="footerLanding-top-navs-item-title">{{ t('navs.title') }}</h4>

              <div class="footerLanding-top-navs-links main grid">
                <NuxtLink
                  v-for="nav of navs"
                  :key="nav.link"
                  :to="nav.link"
                  class="footerLanding-top-navs-link linkHoverAnimation"
                >
                  <span class="footerLanding-top-navs-links-link-title">{{ nav.title }}</span>
                </NuxtLink>
              </div>
            </div>

            <div class="footerLanding-top-navs-item">
              <h4 class="footerLanding-top-navs-item-title">{{ t('navs.services') }}</h4>

              <div class="footerLanding-top-navs-links">
                <NuxtLink
                  v-for="service of services"
                  :key="service.link"
                  :to="service.link"
                  class="footerLanding-top-navs-link linkHoverAnimation"
                >
                  <span class="footerLanding-top-navs-links-link-title">{{ service.title }}</span>
                </NuxtLink>
              </div>
            </div>

            <div class="footerLanding-top-navs-item">
              <h4 class="footerLanding-top-navs-item-title">{{ t('navs.contacts') }}</h4>

              <a class="footerLanding-top-navs-contactLink" href="tel:+77475628447">т. <span>+7 (747) 562-84-47</span></a>
              <a class="footerLanding-top-navs-contactLink" href="mailto:info.codetau@gmail.com">e. <span>info.codetau@gmail.com</span></a>
              <a class="footerLanding-top-navs-contactLink" target="_blank" href="https://yandex.kz/maps/162/almaty/?from=mapframe&ll=76.915494%2C43.237148&mode=usermaps&source=mapframe&um=constructor%3Af5d6eec10d7065b38c428ca31eee63306d23fb198f69f86aec2c5771b51970d1&utm_source=mapframe&z=17">{{ t('contacts.address') }}</a>
            </div>
          </nav>
        </div>

        <div class="footerLanding-bottom">
          <p class="footerLanding-bottom-copyright">{{ t('footer.copyright') }}</p>

          <div class="footerLanding-bottom-privicy">
            <p class="footerLanding-bottom-privicy-title">{{ t('footer.privicy.title') }}</p>
            <div class="footerLanding-bottom-privicy-circle"></div>

            <a href="#" class="footerLanding-bottom-privicy-link">{{ t('footer.privicy.link') }}</a>
          </div>
        </div>

        <SvgIcon
          className="footerLanding-inner-bg"
          name="logo-title"
        />
      </div>
    </div>


    <div id="follower" ref="follower"></div>
  </footer>
</template>

<script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  interface IProps {
    theme?: 'light' | 'dark'
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
      link: '/#services'
    },
    {
      title: t('navs.contacts'),
      link: '/contacts'
    }
  ]

  const services = [
    {
      title: t('footer.services.design'),
      link: '/services/design#header'
    },
    {
      title: t('footer.services.mobile'),
      link: '/services/mobileDevelopment#header'
    },
    {
      title: t('footer.services.web'),
      link: '/services/webDevelopment#header'
    }
  ]

  const follower = ref<HTMLElement | null>(null);

  let mouseX = 0; // Текущая позиция мыши
  let mouseY = 0;
  let followerX = 0; // Текущая позиция точки
  let followerY = 0;

  const smoothFactor = 0.1;

  // Обработка движения мыши
  const handleMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  // Анимация движения точки
  const animateFollower = () => {
    if (follower.value) {
      // Плавное приближение к курсору
      followerX += (mouseX - followerX) * smoothFactor;
      followerY += (mouseY - followerY) * smoothFactor;

      // Учитываем текущий скролл для установки позиции
      const offsetX = followerX + window.scrollX;
      const offsetY = followerY + window.scrollY;

      follower.value.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
    requestAnimationFrame(animateFollower);
  };

  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove);
    animateFollower();
  });

  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<style lang="scss">
.footerLanding {
  padding-top: 7rem;

  &.light .footerLanding {
    &-inner-bg {
      fill: rgba(black, .02);
    }

    &-top {
      border-bottom-color: var(--primary-color-op10);

      &-main {
        &-content {
          &-logo {
            fill: var(--primary-color);

            &:hover {
              fill: var(--blue-light-color);
            }
          }
  
          &-title {
            color: var(--primary-color);
          }
        }

        &-btn-icon {
          stroke: var(--primary-color);
        }
      }

      &-navs {
        &-link {
          &:hover {
            & .footerLanding-top-navs-links-link-title {
              color: var(--blue-light-color);
            }
          }
  
          &.router-link-active {
            & .footerLanding-top-navs-links-link-title {
              color: var(--blue-light-color);
            }
          }
        }
      }

      &-navs-links.main {
        & .footerLanding-top-navs-link:nth-child(3).router-link-active {
          &:hover {
            &::after {
              opacity: 1;
              width: 100%;
              bottom: -2px;
            }

            & .footerLanding-top-navs-links-link-title {
              color: var(--blue-light-color);
            }
          }
          
          & .footerLanding-top-navs-links-link-title {
            color: var(--white-color);
          }

          &::after {
            opacity: 0;
            width: 0;
            bottom: -5px;
          }
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

  &.dark .footerLanding {
    &-top {
      &-navs {
        &-link {
          &:hover {
            & .footerLanding-top-navs-links-link-title {
              color: var(--blue-light-color);
            }
          }
  
          &.router-link-active {
            & .footerLanding-top-navs-links-link-title {
              color: var(--blue-light-color);
            }
          }
        }
      }

      &-navs-links.main {
        & .footerLanding-top-navs-link:nth-child(3).router-link-active {
          &:hover {
            &::after {
              opacity: 1;
              width: 100%;
              bottom: -2px;
            }

            & .footerLanding-top-navs-links-link-title {
              color: var(--blue-light-color);
            }
          }
          
          & .footerLanding-top-navs-links-link-title {
            color: var(--white-color);
          }

          &::after {
            opacity: 0;
            width: 0;
            bottom: -5px;
          }
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
      z-index: 0;
      pointer-events: none;

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

      &-content {

        &-logo {
          height: 4.9rem;
          width: 7.2rem;
  
          fill: var(--white-color);
          margin-bottom: 2.4rem;

          transition: fill .3s ease-in-out;

          &:hover {
            fill: var(--blue-light-color);
          }
        }
  
        &-title {
          color: var(--white-color);
  
          font-size: 2.4rem;
          line-height: 1.6;
  
          margin-bottom: 1.58em;
        }
      }

      &-btn {
        display: flex;
        align-items: center;
        grid-gap: 1rem;

        &-icon {
          height: 2.2rem;
          width: 2.2rem;

          stroke: var(--white-color);
        }
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
        align-items: flex-start;
        flex-direction: column;
        grid-gap: 2rem 8rem;

        &-link {
          &-title {
            white-space: nowrap;
            transition: all .3s ease-in-out;
          }
        }
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


  // Adaptation
  @media (max-width: 1400px) {
    padding-top: 7rem;
  
    &-inner {
      padding-bottom: 2.6rem;
    }

    &-top {
      grid-gap: 8rem;
      padding-bottom: 3.4rem;

      &-main {
        max-width: 36rem;

        &-content {
          &-logo {
            height: 4.9rem;
            width: 7.2rem;
  
            margin-bottom: 2.4rem;
          }
  
          &-title {
            font-size: 2.4rem;
            margin-bottom: 1.58em;
          }
        }

        &-btn {
          grid-gap: 1rem;

          &-icon {
            height: 2.2rem;
            width: 2.2rem;
          }
        }
      }

      &-navs {
        grid-gap: 6rem;

        &-item {
          &-title {
            font-size: 1.6rem;
            margin-bottom: 2em;
          }
        }

        &-links {
          grid-gap: 2rem 8rem;
        }

        &-contactLink {
          margin-bottom: 1.25em;
        }
      }
    }

    &-bottom {
      padding: 2rem 0;

      &-privicy {
        grid-gap: 2.4rem;
      }
    }
  }

  @media (max-width: 1200px) {
    padding-top: 6rem;
  
    &-inner {
      padding-bottom: 2.4rem;
    }

    &-top {
      display: block;
      padding-bottom: 3.2rem;

      &-main {
        max-width: 100%;

        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        grid-gap: 4rem;

        margin-bottom: 5.6rem;

        &-content {
          display: flex;
          align-items: center;
          grid-gap: 4rem;
          margin-bottom: 0rem;

          &-logo {
            height: 6rem;
            width: 8.816rem;
            margin-bottom: 0;
          }
  
          &-title {
            font-size: 2.4rem;
            margin-bottom: 0;
          }
        }

        &-btn {
          grid-gap: 1rem;

          &-icon {
            height: 2.2rem;
            width: 2.2rem;
          }
        }
      }

      &-navs {
        justify-content: space-between;
        grid-gap: 6rem;

        &-item {
          &-title {
            font-size: 1.6rem;
            margin-bottom: 2em;
          }
        }

        &-links {
          grid-gap: 2rem 8rem;
        }

        &-contactLink {
          margin-bottom: 1.25em;
        }
      }
    }

    &-bottom {
      padding: 1.8rem 0;

      &-privicy {
        grid-gap: 2.2rem;
      }
    }
  }

  @media (max-width: 992px) {
    padding-top: 5rem;
  
    &-inner {
      padding-bottom: 2.2rem;
    }

    &-top {
      display: block;
      padding-bottom: 3.2rem;

      &-main {
        max-width: 100%;

        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        grid-gap: 3.4rem;

        margin-bottom: 5.6rem;

        &-content {
          display: block;

          &-logo {
            height: 5rem;
            width: 7.347rem;
            margin-bottom: 1.6rem;
          }
  
          &-title {
            font-size: 2.2rem;
            margin-bottom: 0;
          }
        }

        &-btn {
          grid-gap: .8rem;

          &-icon {
            height: 2rem;
            width: 2rem;
          }
        }
      }

      &-navs {
        grid-gap: 6rem;

        &-item {
          &-title {
            font-size: 1.6rem;
            margin-bottom: 1.8em;
          }
        }

        &-links {
          grid-gap: 1.8rem 6rem;
        }

        &-contactLink {
          margin-bottom: 1.25em;
        }
      }
    }

    &-bottom {
      padding: 1.6rem 0;

      &-privicy {
        grid-gap: 2.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 4rem;
  
    &-inner {
      padding-bottom: 2.2rem;
    }

    &-top {
      display: block;
      padding-bottom: 3.2rem;

      &-main {
        max-width: 100%;

        display: block;
        margin-bottom: 5.6rem;

        &-content {
          display: flex;
          align-items: center;
          grid-gap: 3.2rem;

          margin-bottom: 2.8rem;

          &-logo {
            height: 5rem;
            width: 7.347rem;
            margin-bottom: 0;
          }
  
          &-title {
            font-size: 2.2rem;
            margin-bottom: 0;
          }
        }

        &-btn {
          grid-gap: .8rem;

          &-icon {
            height: 2rem;
            width: 2rem;
          }
        }
      }

      &-navs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 6rem 3rem;

        &-item {
          &-title {
            font-size: 1.6rem;
            margin-bottom: 1.8em;
          }
        }

        &-item:last-child {
          grid-column: 1/3;
        }

        &-links {
          grid-gap: 1.8rem 6rem;
        }

        &-contactLink {
          margin-bottom: 1.25em;
        }
      }
    }

    &-bottom {
      display: block;
      padding: 1.6rem 0;

      &-copyright {
        margin-bottom: 1rem;
      }

      &-privicy {
        grid-gap: 2.2rem;
      }
    }
  }

  @media (max-width: 450px) {
    padding-top: 4rem;
  
    &-inner {
      padding-bottom: 2.2rem;
    }

    &-top {
      display: block;
      padding-bottom: 3.2rem;

      &-main {
        max-width: 100%;

        display: block;
        margin-bottom: 5.6rem;

        &-content {
          display: block;
          margin-bottom: 2rem;

          &-logo {
            height: 5rem;
            width: 7.347rem;
            margin-bottom: 1.4rem;
          }
  
          &-title {
            font-size: 2.2rem;
          }
        }

        &-btn {
          grid-gap: .8rem;

          &-icon {
            height: 2rem;
            width: 2rem;
          }
        }
      }

      &-navs {
        display: block;

        &-item {
          margin-bottom: 5.2rem;

          &-title {
            font-size: 1.6rem;
            margin-bottom: 1.2em;
          }
        }

        &-item:last-child {
          grid-column: auto;
          margin-bottom: 0;
        }

        &-links {
          grid-gap: 1.8rem 6rem;
        }

        &-contactLink {
          margin-bottom: 1.25em;
        }
      }
    }

    &-bottom {
      display: block;
      padding: 1.2rem 0;

      &-copyright {
        margin-bottom: 1rem;
      }

      &-privicy {
        grid-gap: 2.2rem;
      }
    }
  }

  @media (max-width: 380px) {
    padding-top: 4rem;
  
    &-inner {
      padding-bottom: 2.2rem;
    }

    &-top {
      display: block;
      padding-bottom: 3.2rem;

      &-main {
        max-width: 100%;

        display: block;
        margin-bottom: 5.6rem;

        &-content {
          display: block;
          margin-bottom: 2rem;

          &-logo {
            height: 5rem;
            width: 7.347rem;
            margin-bottom: 1.4rem;
          }
  
          &-title {
            font-size: 2rem;
          }
        }

        &-btn {
          grid-gap: .8rem;

          &-icon {
            height: 2rem;
            width: 2rem;
          }
        }
      }

      &-navs {
        display: block;

        &-item {
          margin-bottom: 5.2rem;

          &-title {
            font-size: 1.6rem;
            margin-bottom: 1.2em;
          }
        }

        &-item:last-child {
          grid-column: auto;
          margin-bottom: 0;
        }

        &-links {
          grid-gap: 1.8rem 6rem;
        }

        &-contactLink {
          margin-bottom: 1.25em;
        }
      }
    }

    &-bottom {
      display: block;
      padding: 1.2rem 0;

      &-copyright {
        margin-bottom: 1rem;
      }

      &-privicy {
        grid-gap: 2.2rem;
      }
    }
  }
}

#follower {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999999;
  width: 10px;
  height: 10px;
  background-color: var(--perple-color);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s linear;

  @media (max-width: 768px) {
    display: none;
  }
}
</style>
