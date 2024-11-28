<template>
  <div>
    <div :class="`headerLanding ${type}`" :style="{ height: headerHeight + 'px' }">
      <header :class="`headerLanding-header ${theme} ${(isFixed || lastScrollY > 0 && isActiveSideBar) ? 'fixed dark' : (theme == 'light' && 'inTop')} ${isHidden && 'hidden'}`">
        <div class="landing-wrapper">
          <div class="headerLanding-inner">
            <NuxtLink to="/">
              <SvgIcon
                className="headerLanding-logo"
                name="logo-simple"
              />
            </NuxtLink>

            <nav class="headerLanding-navs">
              <NuxtLink
                v-for="nav of navs"
                :key="nav.link"
                :to="nav.link"
                class="headerLanding-navs-link linkHoverAnimation"
              >
                <span class="headerLanding-navs-link-title">{{ nav.title }}</span>
              </NuxtLink>
            </nav>

            <div class="headerLanding-btns">
              <NuxtLink to="/contacts#contactsFeedback">
                <Button
                  :class="`headerLanding-btn ${isActiveSideBar && 'active'}`"
                  :name="t('footer.btn-title')"
                  :type="theme == 'dark' || (isFixed || (lastScrollY > 0 && isActiveSideBar)) ? 'default-dark' : 'default'"
                >
                  <SvgIcon
                    className="headerLanding-btn-icon"
                    name="feature"
                  />
                </Button>
              </NuxtLink>

              <button
                class="headerLanding-menuToggle"
                @click="() => isActiveSideBar = true"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div :class="`headerLanding-sideBar ${isActiveSideBar && 'active'}`">
      <div class="headerLanding-sideBar-top">
        <div class="headerLanding-sideBar-closeBlock">
          <button
            class="headerLanding-sideBar-closeBtn"
            @click="() => isActiveSideBar = false"
          >
            <SvgIcon
              className="headerLanding-sideBar-closeBtn-icon"
              name="x"
            />
          </button>
        </div>
        
        <nav class="headerLanding-sideBar-navs">
          <NuxtLink
            v-for="nav of navs"
            :key="nav.link"
            :to="nav.link"
            class="headerLanding-sideBar-navs-link linkHoverAnimation"
          >
            <span class="headerLanding-sideBar-navs-link-title">{{ nav.title }}</span>
          </NuxtLink>
        </nav>
      </div>

      <Button
        class="headerLanding-btn"
        :name="t('footer.btn-title')"
        :loading="false"
        type="default-dark"
      >
        <SvgIcon
          className="headerLanding-btn-icon"
          name="feature"
        />
      </Button>
    </div>

    <div
      :class="`headerLanding-sideBar-bg ${isActiveSideBar && 'active'}`"
      @click="() => isActiveSideBar = false"
    ></div>
  </div>
</template>

<script lang="ts" setup>
  import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

  interface IProps {
    type?: 'static' | 'fly',
    theme?: 'dark' | 'light'
  }

  withDefaults(defineProps<IProps>(), {
    type: 'static',
    theme: 'dark'
  })

  const { t } = useI18n()

  const isActiveSideBar = ref(false);

  const isFixed = ref(false);
  const isHidden = ref(false);
  const lastScrollY = ref(0);
  const headerHeight = ref(0);

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

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY.value) {
      isHidden.value = false;
      if (currentScrollY == 0) {
        isFixed.value = false;
      }
    } else {
      if (currentScrollY > 900) {
        isFixed.value = true;
      }
      isHidden.value = true;
    }

    lastScrollY.value = currentScrollY;
  };

  const lockBodyScroll = (isActive: boolean) => {
    if (isActive) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      document.body.style.position = '';
    }
  };

  watch(
    () => isActiveSideBar.value,
    (newValue) => {
      lockBodyScroll(newValue);
    }
  );

  onMounted(() => {
    const header = document.querySelector('header') as HTMLElement;
    headerHeight.value = header.offsetHeight;
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.removeEventListener('resize', handleResize);
  });
</script>

<style lang="scss">
.headerLanding {
  width: 100%;

  position: relative;
  z-index: 999;

  &.static {
    margin-bottom: 4rem;
  }

  &.fly {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  &-header {
    width: 100%;

    padding: 2rem 0;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 .2rem 2rem 0 rgba(black, 0);

    position: absolute;
    top: 0;
    left: 0;

    transition: all .3s ease-in-out;
    
    &.fixed {
      position: fixed !important;
      top: 0 !important;
      z-index: 999999;

      background-color: var(--white-color);
      box-shadow: 0 .2rem 2rem 0 rgba(black, .07);
    }

    &.hidden {
      transform: translateY(-100%) !important;
    }

    &.inTop {
      & .headerLanding-logo {
        fill: var(--white-color-op70);

        &:hover {
          fill: var(--blue-light-color) !important;
        }
      }

      & .headerLanding-btn {
        border-color: var(--white-color-op70) !important;
  
        & span {
          color: var(--white-color-op70) !important;
        }

        & .headerLanding-btn-icon {
          stroke: var(--white-color-op70) !important;
        }

        &:hover {
          border-color: var(--blue-light-color) !important;
  
          & span {
            color: var(--blue-light-color) !important;
          }
  
          & .headerLanding-btn-icon {
            stroke: var(--blue-light-color) !important;
          }
        }
      }

      & .headerLanding-navs {
        &-link {
          &::after {
            border-color: var(--white-color-op70) !important;
          }

          & .headerLanding-navs-link-title {
            color: var(--white-color-op70) !important;
          }
          
          &:hover {
            &::after {
              border-color: var(--blue-light-color) !important;
            }

            & .headerLanding-navs-link-title {
              color: var(--blue-light-color) !important;
            }
          }
  
          &.router-link-active:hover {
            &::after {
              border-color: var(--blue-light-color);
            }

            & .headerLanding-navs-link-title {
              color: var(--blue-light-color);
            }
          }
        }
  
        &-link:nth-child(3).router-link-active {
          &::after {
            border-color: var(--white-color-op70) !important;
          }

          & .headerLanding-navs-link-title {
            color: var(--white-color-op70) !important;
          }

          &:hover  {
            &::after {
              opacity: 1;
              width: 100%;
              bottom: -2px;
              border-color: var(--blue-light-color) !important;
            }
  
            & .headerLanding-navs-link-title {
              color: var(--blue-light-color) !important;
            }
          }
        }
      }
    }

    &.light {
      border-color: var(--white-color-op15);

      & .headerLanding-logo {
        &:hover {
          fill: var(--blue-light-color);
        }
      }

      & .headerLanding-btn-icon {
        stroke: var(--white-color);
      }

      & .headerLanding-navs {
        &-link {
          &:hover {
            & .headerLanding-navs-link-title {
              color: var(--blue-light-color);
            }
          }
  
          &.router-link-active {
            &::after {
              border-color: var(--white-color);
            }

            &:hover {
              &::after {
                border-color: var(--blue-light-color);
              }

              & .headerLanding-navs-link-title {
                color: var(--blue-light-color);
              }
            }
            & .headerLanding-navs-link-title {
              color: var(--white-color);
            }
          }
        }
  
        &-link:nth-child(3).router-link-active {
          &:hover {
            &::after {
              opacity: 1;
              width: 100%;
              bottom: -2px;
            }

            & .headerLanding-navs-link-title {
              color: var(--blue-light-color);
            }
          }
          
          & .headerLanding-navs-link-title {
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

    &.dark {
      border-color: var(--gray-light-color);

      & .headerLanding {
        &-logo {
          fill: var(--primary-color);

          &:hover {
            fill: var(--blue-light-color);
          }
        }
        
        &-navs {
          &-link {
            &:hover {
              & .headerLanding-navs-link-title {
                color: var(--blue-light-color);
              }
            }

            &.router-link-active {
              & .headerLanding-navs-link-title {
                color: var(--blue-light-color);
              }
            }

            &-title {
              color: var(--primary-color);
            }
          }

          &-link:nth-child(3).router-link-active {
            &:hover {
              &::after {
                opacity: 1;
                width: 100%;
                bottom: -2px;
              }

              & .headerLanding-navs-link-title {
                color: var(--accent-color-op80);
              }
            }
            
            & .headerLanding-navs-link-title {
              color: var(--primary-color);
            }

            &::after {
              opacity: 0;
              width: 0;
              bottom: -5px;
            }
          }
        }
    
        &-btn-icon {
          stroke: var(--primary-color);
        }

        &-menuToggle span {
          background-color: var(--primary-color);
        }
      }
    }
  }

  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-logo {
    width: 9.7rem;
    height: 5.2rem;
    fill: var(--white-color);

    transition: fill .3s ease-in-out;
  }
  
  &-navs {
    display: flex;
    align-items: center;
    grid-gap: 6rem;

    &-link {
      cursor: pointer;

      &-title {
        color: var(--white-color);
        font-size: 1.6rem;
        font-weight: 500;

        transition: all .3s ease-in-out;
      }
    }
  }

  &-btns {
    display: flex;
    align-items: center;
    grid-gap: 4rem;
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

  &-menuToggle {
    position: relative;
    display: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;

    &:hover span {
      background: var(--blue-light-color) !important;
    }

    & span {
      display: block;
      width: 33px;
      height: 3px;
      margin-bottom: 5px;
      position: relative;
      
      background: var(--white-color);
      border-radius: 3px;
      
      z-index: 1;
      cursor: pointer;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
    }

    & span:first-child {
      transform-origin: 0% 0%;
    }

    & span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }

  &-sideBar {
    height: 100vh;
    width: 40rem;

    position: fixed;
    right: -42rem;
    top: 0;
    z-index: 9999;

    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 2rem 4rem 4rem;

    background-color: var(--white-color);
    box-shadow: 0 .2rem 2rem 0 rgba(black, .07);

    transition: all .3s ease-in-out;

    &.active {
      right: 0;
    }

    &-top {
      width: 100%;
    }

    &-closeBlock {
      display: flex;
      justify-content: end;

      margin-bottom: 2rem;
    }

    &-closeBtn {
      &:hover svg {
        fill: var(--blue-light-color);
      }

      & svg {
        height: 2.4rem;
        width: 2.4rem;

        fill: var(--gray-color);
        transition: fill .3s ease-in-out;
      }
    }

    &-navs {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      grid-gap: 4rem;

      margin-bottom: 8rem;

      &-link {
        &::after {
          border-width: 1.6px;
        }

        &:hover {
          & .headerLanding-sideBar-navs-link-title {
            color: var(--accent-color-op80);
          }
        }

        &.router-link-active {
          & .headerLanding-sideBar-navs-link-title {
            color: var(--blue-light-color);
          }
        }
        
        &-title {
          color: var(--primary-color-op80);
          font-size: 3rem;
          font-weight: 500;
          font-family: var(--primary-font);
        }
      }

      &-link:nth-child(3).router-link-active {
        &:hover {
          &::after {
            opacity: 1;
            width: 100%;
            bottom: -2px;
          }

          & .headerLanding-sideBar-navs-link-title {
            color: var(--accent-color-op80);
          }
        }
        
        & .headerLanding-sideBar-navs-link-title {
          color: var(--primary-color);
        }

        &::after {
          opacity: 0;
          width: 0;
          bottom: -5px;
        }
      }
    }

    & .headerLanding-btn svg {
      stroke: var(--primary-color);
    }

    &-bg {
      display: none;
      height: 100vh;
      width: 100%;

      position: fixed;
      right: 0;
      top: 0;
      z-index: 9998;

      opacity: 0;
      pointer-events: none;

      background-color: var(--primary-color-op20);
      transition: all .3s ease-in-out;

      &.active {
        opacity: 1;
        pointer-events: visible;
      }
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    padding: 1.8rem 0;

    &.static {
      margin-bottom: 3.8rem;
    }

    &-logo {
      width: 9.7rem;
      height: 5.2rem;
    }
    
    &-navs {
      grid-gap: 5.6rem;

      &-link {
        &-title {
          font-size: 1.6rem;
        }
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

  @media (max-width: 1200px) {
    padding: 1.6rem 0;

    &.static {
      margin-bottom: 3.2rem;
    }

    &-logo {
      width: 8.954rem;
      height: 4.8rem;
    }
    
    &-navs {
      grid-gap: 5.4rem;

      &-link {
        &-title {
          font-size: 1.6rem;
        }
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

  @media (max-width: 992px) {
    padding: 1.4rem 0;

    &.static {
      margin-bottom: 2.8rem;
    }

    &-logo {
      width: 6.342rem;
      height: 3.4rem;
    }
    
    &-navs {
      grid-gap: 4rem;
    }

    &-btn {
      grid-gap: .8rem;

      &-icon {
        height: 2rem;
        width: 2rem;
      }
    }

    &-sideBar {
      width: 38rem;
      padding: 2rem 3rem 3rem;

      &-closeBlock {
        margin-bottom: 2rem;
      }

      &-closeBtn {
        & svg {
          height: 2.4rem;
          width: 2.4rem;
        }
      }

      &-navs {
        grid-gap: 3rem;
        margin-bottom: 7rem;

        &-link {
          &-title {
            font-size: 2.6rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem 0;

    &.static {
      margin-bottom: 2.8rem;
    }

    &-logo {
      width: 6.342rem;
      height: 3.4rem;
    }
    
    &-navs {
      display: none;
      grid-gap: 4rem;
    }

    &-btns {
      grid-gap: 2.4rem;
    }

    &-btn {
      grid-gap: .8rem;

      &-icon {
        height: 2rem;
        width: 2rem;
      }
    }

    &-menuToggle {
      display: block;
    }

    &-sideBar {
      display: flex;
      width: 28rem;
      padding: 2rem 2.4rem 3rem;

      &-closeBlock {
        margin-bottom: 2rem;
      }

      &-closeBtn {
        & svg {
          height: 2.4rem;
          width: 2.4rem;
        }
      }

      &-navs {
        grid-gap: 2.6rem;
        margin-bottom: 6rem;

        &-link {
          &-title {
            font-size: 2.4rem;
          }
        }
      }

      &-bg {
        display: block;
      }
    }
  }

  @media (max-width: 576px) {
    &-btn {
      display: none;
    }
  }
}
</style>
