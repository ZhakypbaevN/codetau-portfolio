<template>
  <section class="homeIntro">

    <!-- <div class="homeIntro-bg">
      <video
        ref="video"
        autoplay
        loop
        muted
        playsinline
        class="homeIntro-bg-video"
      >
        <source src="/assets/video/cloner-cube-binary-3.mp4" type="video/mp4" />
      </video>
    </div> -->


    <div class="homeIntro-bg bg-cover desktop" :style="{backgroundImage: `url(/assets/img/intro-desktop.jpg)`}"></div>
    <div class="homeIntro-bg bg-cover tablet" :style="{backgroundImage: `url(/assets/img/intro-tablet.jpg)`}"></div>
    <div class="homeIntro-bg bg-cover mobile" :style="{backgroundImage: `url(/assets/img/intro-mobile.jpg)`}"></div>

    <div class="landing-wrapper">
      <div class="homeIntro-inner">
        <SelectionText
          class="homeIntro-title landing-title"
          :title="$t('home.intro.title')"
          :startIdx="12"
          :endIdx="26"
        />

        <Cursor class="homeIntro-cursor" />

        <p class="homeIntro-subtitle">{{ $t('home.intro.description') }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'

  const video = ref<HTMLVideoElement | null>(null)

  onMounted(() => {
    if (video.value) {
      video.value.playbackRate = 0.4

      video.value.addEventListener('ended', () => {
        reverseVideo()
      })
    }
  })

  const reverseVideo = () => {
    if (video.value) {
      const duration = video.value.duration
      const currentTime = video.value.currentTime

      video.value.playbackRate = -0.4

      video.value.currentTime = duration

      video.value.addEventListener('timeupdate', () => {
        if (video.value && video.value.currentTime <= 0) {
          video.value.playbackRate = 0.4
          video.value.play()
        }
      })

      video.value.play()
    }
  }
</script>

<style lang="scss">
.homeIntro {
  width: 100%;
  min-height: calc(100vh + 8rem);
  background: linear-gradient(135deg, #16191E 0%, #282B30 100%);
  overflow: hidden;
  position: relative;

  &-cursor {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-55%, -50%);
    z-index: 5;
  }

  &-bg {
    display: none;
    height: calc(100% + 10px);
    width: calc(100% + 10px);

    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    opacity: .9;

    &.desktop {
      display: block;
    }

    &-video {
      opacity: .8;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; /* Чтобы видео заполнило весь контейнер */
      z-index: -1;
    }
  }

  &-inner {
    padding: 28rem 0;

    position: relative;
    z-index: 2;
  }

  &-title,
  &-subtitle {
    text-shadow: 0 0.2rem 2rem rgba(0, 0, 0, .2);
  }

  &-title {
    color: var(--white-color) !important;
    line-height: 1.6;
    letter-spacing: 1.4%;

    & span.first {
      display: inline-block;
      position: relative;
      
      /* left: 24rem; */
    }

    & span.second {
      color: var(--blue-light-color) !important;
    }
  }

  &-subtitle {
    max-width: 82rem;
    font-size: 2rem;
    color: var(--white-color-op70) !important;
  }


  // Adaptation
  @media (min-width: 1201px) {
    &-title {
      font-size: 5rem;
    }
  }

  @media (max-width: 1200px) {
    &-bg {
      &.desktop {
        display: none;
      }

      &.tablet {
        display: block;
      }
    }
  }

  @media (max-width: 992px) {
    &-subtitle {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    min-height: 32rem;

    &-inner {
      padding: 20rem 0;
    }

    &-subtitle {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 576px) {
    min-height: 30rem;

    &-bg {
      opacity: .8;

      &.tablet {
        display: none;
      }

      &.mobile {
        display: block;
      }
    }

    &-inner {
      padding: 14rem 0;
    }

    &-title {
      font-size: 2.1rem !important;
    }
  }

  @media (max-width: 380px) {
    min-height: 30rem;

    &-inner {
      padding: 14rem 0;
    }

    &-title {
      font-size: 1.7rem !important;
    }
  }
}
</style>
