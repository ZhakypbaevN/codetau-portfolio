<template>
  <div class="commentBlock">
    <div
      :class="`comment ${isOpened ? 'show' : ''} ${theme}`"
    >
      <button
        class="comment-author"
        @click="() => isOpened = !isOpened"
        type="button"
      >
        <div
          class="comment-author-character"
          :style="`background-color: ${isColor};`"
        >
          <span>{{ isCharacter }}</span>
        </div>
      </button>

      <div class="comment-content">
        <span>{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { editColor } from '@/helpers/colorHelpers';
  import { ref } from 'vue';

  interface IProps {
    title: string,
    theme?: 'light' | 'dark',
    startIdx?: number,
    endIdx?: number,
    closed?: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    theme: 'light',
    closed: false,
    title: 'Готовы узнать?'
  })

  const isOpened = ref(!props.closed);
  
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

  const charactersList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю',
  ]

  const isCharacter = charactersList[Math.floor(Math.random() * charactersList.length - 1) + 1];
  const isColor = colors[Math.floor(Math.random() * colors.length - 1) + 1];
</script>

<style lang="scss" scoped>
.comment {
  position: absolute;
  top: 50%;
  z-index: 3;
  transform: translateY(-50%);

  &.light .comment {
    &-author {
      background-color: var(--white-color);

      &-character span {
        color: var(--white-color);
      }
    }
    

    &-content {
      background-color: var(--white-color);

      & span {
        color: var(--primary-color);
      }
    }
  }

  &.dark .comment {
    &-author {
      background-color: var(--bg-color);
      
      &-character span {
        color: var(--primary-color);
      }
    }
    
    &-content {
      background-color: var(--bg-color);

      & span {
        color: var(--white-color);
      }
    }
  }

  &.show .comment {
    &-author-character {
      height: calc(100% + 30rem);
      width: calc(100% + 30rem);
    }

    &-content {
      opacity: 1;
    }
  }

  &-author {
    min-width: 4rem;
    width: 4rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    border-radius: 10rem 10rem 1px 10rem;
    box-shadow: .13rem 0 .6rem 0 rgb(0 0 0 / 20%);

    &-character {
      height: 3.3rem;
      width: 3.3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      transition: all .3s ease-in-out;

      & span {
        font-size: 1.6rem;
        font-weight: 400;
        font-family: var(--secondary-font);
        color: var(--primary-color);
      }
    }
  }

  &-content {
    pointer-events: none;

    width: max-content;
    max-width: 22rem;

    position: absolute;
    left: calc(100% + .4rem);
    bottom: 0;
    z-index: 2;

    padding: 1.6rem 1.2rem;

    opacity: 0;

    border-radius: .8rem .8rem .8rem 1px;
    box-shadow: .13rem 0 .6rem 0 rgb(0 0 0 / 10%);

    transition: opacity .3s ease-in-out;

    & span {
      display: inline-block;
      font-size: 1.2rem;
      font-weight: normal;
      font-family: var(--secondary-font);
    }
  }

  
  // Adaptation
  @media (max-width: 1200px) {
    &-author {
      min-width: 3.6rem;
      width: 3.6rem;
      height: 3.6rem;

      &-character {
        height: 3rem;
        width: 3rem;

        & span {
          font-size: 1.5rem;
        }
      }
    }

    &-content {
      max-width: 20rem;
      padding: 1.4rem 1rem;

      & span {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 992px) {
    &-author {
      min-width: 3.4rem;
      width: 3.4rem;
      height: 3.4rem;

      &-character {
        height: 2.7rem;
        width: 2.7rem;

        & span {
          font-size: 1.4rem;
        }
      }
    }

    &-content {
      max-width: 18rem;
      padding: 1.3rem .9rem;

      & span {
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-author {
      min-width: 2.8rem;
      width: 2.8rem;
      height: 2.8rem;

      &-character {
        height: 2.4rem;
        width: 2.4rem;

        & span {
          font-size: 1.2rem;
        }
      }
    }

    &-content {
      max-width: 16rem;
      padding: 1rem .7rem;

      & span {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 576px) {
    &-author {
      min-width: 2.4rem;
      width: 2.4rem;
      height: 2.4rem;

      &-character {
        height: 2.1rem;
        width: 2.1rem;

        & span {
          font-size: 1.1rem;
        }
      }
    }

    &-content {
      max-width: 12rem;
      padding: .6rem .6rem;

      & span {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 380px) {
  }
}
</style>