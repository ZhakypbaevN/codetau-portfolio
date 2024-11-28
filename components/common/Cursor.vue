<template>
  <div class="cursorBlock">
    <div
      :class="`cursor animation${isRandomMoveType}`"
    >
      <SvgIcon
        className="cursor-icon"
        name="cursor"
        :fill="isColor"
      />
      
      <div
        class="cursor-name"
        :style="`background-color: ${editColor(isColor, -25)};`"
      >
        <span>{{ isUserName }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { editColor } from '@/helpers/colorHelpers';
  
  const colors = [
    '#37E806',
    '#FF23BD',
    '#F64660',
    '#47ACDF',
    '#9673C4',
    '#4361EE',

    '#FF6B6B', '#4ECDC4', '#FF7E5F',
    '#3A86FF', '#FF006E',
    '#FFBE0B', '#F72585',
    '#4895EF', '#1982C4',
    '#6A4C93', '#5BC0EB', '#E55934',
    '#F46036', '#1B998B',
    '#28A745',
    '#E84393', '#42B883',
    '#4ECCA3', '#1C8D73',
    '#FC4A1A', '#4ABDAC', '#FC4A1A', '#0E9AA7',
    '#00818A', '#574AE2', '#00916E',
    '#FE5F55', '#71C9CE',
    '#FF4C4C', '#5B63E2',
    '#86BAA1', '#0E7C7B',
    '#DB3A34', '#3772FF', '#FFCF56'
  ];

  const usersList = [
    'Gani',
    'Zhanar',
    'Assel',
    'Aigerim',
    'Erkin',
    'Moldir',
    'Evgeniy',
    'Bekzhan',
    'Gulshat',
    'Amanbek',
    'Akezhan',
    'Alisher',
    'Dinmukhammed',
    'Fahriddin',
    'Yerbol',
    'Azamat',
    'Alina',
    'Kanat',
  ];

  const isRandomMoveType = Math.floor(Math.random() * 9) + 1;
  const isUserName = usersList[Math.floor(Math.random() * usersList.length - 1) + 1];
  const isColor = colors[Math.floor(Math.random() * colors.length - 1) + 1];
</script>

<style lang="scss">
.cursor {
  display: flex;
  flex-direction: column;

  /* pointer-events: none; */

  position: absolute;
  z-index: 5;

  &.animation1 {
    animation: randomMove1 28s ease-in-out infinite;
  }

  &.animation2 {
    animation: randomMove2 28s ease-in-out infinite;
  }

  &.animation3 {
    animation: randomMove3 28s ease-in-out infinite;
  }

  &.animation4 {
    animation: randomMove4 28s ease-in-out infinite;
  }

  &.animation5 {
    animation: randomMove5 28s ease-in-out infinite;
  }

  &.animation6 {
    animation: randomMove6 28s ease-in-out infinite;
  }

  &.animation7 {
    animation: randomMove7 28s ease-in-out infinite;
  }

  &.animation8 {
    animation: randomMove8 28s ease-in-out infinite;
  }

  &.animation9 {
    animation: randomMove9 28s ease-in-out infinite;
  }

  &.animation10 {
    animation: randomMove10 28s ease-in-out infinite;
  }

  &-icon {
    width: 2.6rem;
    height: 2.6rem;
    filter: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.14));
  }

  &-name {
    display: inline-block;

    padding: .3rem .8rem;
    border-radius: 1px 10rem 10rem 10rem;

    position: relative;
    bottom: 0;
    left: 1.1rem;
    box-shadow: 0 0 2rem 0 rgb(0 0 0 / 14%);

    & span {
      font-size: 1rem;
      color: var(--white-color);
    }
  }

  
  // Adaptation
  @media (max-width: 992px) {
    &-icon {
      width: 1.95rem;
      height: 1.95rem;
    }

    &-name {
      padding: .2rem .6rem;
      left: 1.1rem;
      bottom: .2rem;

      & span {
        font-size: .9rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-icon {
      width: 1.95rem;
      height: 1.95rem;
    }

    &-name {
      padding: .1rem .6rem .2rem;
      left: 1.2rem;
      bottom: .2rem;

      & span {
        font-size: .8rem;
      }
    }
  }

  @media (max-width: 576px) {
    &-icon {
      width: 1.8rem;
      height: 1.8rem;
    }

    &-name {
      padding: .1rem .6rem .2rem;
      left: 1.2rem;
      bottom: .2rem;

      & span {
        font-size: .8rem;
      }
    }
  }

  @media (max-width: 380px) {
    &-icon {
      width: 1.6rem;
      height: 1.6rem;
    }

    &-name {
      padding: .08rem .6rem .2rem;
      left: 1.2rem;
      bottom: .2rem;

      & span {
        font-size: .8rem;
      }
    }
  }
}

@keyframes randomMove1 {
  0% { transform: translate(0, 0); }
  25% { transform: translate(30px, 50px); }
  50% { transform: translate(-40px, 20px); }
  75% { transform: translate(20px, -60px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove2 {
  0% { transform: translate(0, 0); }
  15% { transform: translate(40px, -30px); }
  35% { transform: translate(-20px, 40px); }
  55% { transform: translate(60px, 10px); }
  75% { transform: translate(-30px, -50px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove3 {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-50px, 20px); }
  40% { transform: translate(30px, -40px); }
  60% { transform: translate(-10px, 50px); }
  80% { transform: translate(40px, -30px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove4 {
  0% { transform: translate(0, 0); }
  10% { transform: translate(60px, 30px); }
  30% { transform: translate(-40px, -20px); }
  50% { transform: translate(20px, 40px); }
  70% { transform: translate(-30px, 60px); }
  90% { transform: translate(50px, -50px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove5 {
  0% { transform: translate(0, 0); }
  15% { transform: translate(-30px, 40px); }
  35% { transform: translate(50px, -20px); }
  55% { transform: translate(-20px, -30px); }
  75% { transform: translate(40px, 60px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove6 {
  0% { transform: translate(0, 0); }
  20% { transform: translate(40px, 10px); }
  40% { transform: translate(-60px, 30px); }
  60% { transform: translate(50px, -50px); }
  80% { transform: translate(-20px, -30px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove7 {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-40px, 60px); }
  50% { transform: translate(70px, -20px); }
  75% { transform: translate(-50px, 20px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove8 {
  0% { transform: translate(0, 0); }
  15% { transform: translate(30px, -50px); }
  35% { transform: translate(-20px, 70px); }
  55% { transform: translate(50px, 30px); }
  75% { transform: translate(-40px, -40px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove9 {
  0% { transform: translate(0, 0); }
  10% { transform: translate(-20px, 40px); }
  30% { transform: translate(60px, -30px); }
  50% { transform: translate(-50px, 60px); }
  70% { transform: translate(30px, -50px); }
  90% { transform: translate(-10px, 20px); }
  100% { transform: translate(0, 0); }
}

@keyframes randomMove10 {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-70px, 20px); }
  40% { transform: translate(40px, 50px); }
  60% { transform: translate(-30px, -20px); }
  80% { transform: translate(20px, -60px); }
  100% { transform: translate(0, 0); }
}
</style>