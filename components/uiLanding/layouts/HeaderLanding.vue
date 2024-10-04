<template>
  <header class="header">
    <div class="landing-wrapper">
      <div class="header-inner">
        <SvgIcon
          class="header-logo"
          name="logo-simple"
          :viewboxWidth="97"
          :viewboxHeight="52"
        />

        <nav class="header-nav">
          <NuxtLink
            v-for="nav of navs"
            :key="nav.link"
            :to="nav.link"
          >
            <span class="header-nav-title">{{ nav.title }}</span>
          </NuxtLink>
        </nav>

        <div class="header-control">
          <SvgIcon
            class="header-control-lang"
            name="globus"
            :viewboxWidth="32"
            :viewboxHeight="32"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
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
</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  padding: 20px 0;
  border-bottom: 1px solid var(--white-color);

  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-logo {
    width: 97px;
    height: 52px;
    fill: var(--white-color);
  }
  
  &-nav {
    display: flex;
    align-items: center;
    grid-gap: 60px;

    &-title {
      color: var(--white-color);
      font-size: 16px;
      font-weight: 500;
    }
  }

  &-control {
    display: flex;
    align-items: center;
    grid-gap: 20px;

    &-lang {
      height: 32px;
      width: 32px;
      fill: var(--white-color);
    }
  }
}
</style>
