<template>
  <button
      class="asBtn"
      :class="{
      [type]: true,
      loading,
      mini
    }"
      :type="htmlType"
      :disabled="disabled || handleError(hasError, ignoreValidate)"
      @click="
      loading || disabled || handleError(hasError, ignoreValidate)
        ? null
        : $emit('click', $event)
    "
  >
    <slot name="left" v-if="!loading" />
    <Transition>
      <Loading v-if="loading" :name="loadingName" />
    </Transition>
    <span>{{ name }}</span>
    <slot v-if="!loading" />
  </button>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  import handleError from '@/helpers/handleError'

  interface IProps {
    name?: string
    type?: 'default' | 'default-dark' | 'form-blue'
    loading?: boolean
    mini?: boolean
    htmlType?: 'button' | 'submit' | 'reset',
    disabled?: boolean,
    loadingName?: string,
    ignoreValidate?: any[] | null,
  }

  const props = withDefaults(defineProps<IProps>(), {
    name: '',
    type: 'default',
    loading: false,
    htmlType: 'button',
    disabled: false,
    mini: true,
    loadingName: 'lds-ellipsis',
    ignoreValidate: null,
  })

  defineEmits(['click'])

  const hasError = props.htmlType === 'submit' ? inject('hasError') : {}
</script>

<style lang="scss">
.asBtn {
  padding: 1.4rem 2.6rem;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 10rem;
  position: relative;
  cursor: pointer;

  transition: all .3s ease-in-out;

  & span {
    color: var(--white-color);
    font-size: 1.6rem;
    font-weight: 500;
    font-family: var(--secondary-font);
    
    transition: all .3s ease-in-out;
  }

  & svg {
    transition: all .3s ease-in-out;
  }

  &[disabled] {
    opacity: .6;
    cursor: default;
  }

  &.loading {
    pointer-events: none;
    & span {
      opacity: 0;
    }
  }


  &.mini {
    padding: 1rem 2rem;
  }

  &.default {
    border-color: var(--white-color);

    &:hover {
      border-color: var(--blue-light-color);
      background: var(--accent-color-op5);

      & span {
        color: var(--blue-light-color);
      }

      & svg {
        stroke: var(--blue-light-color) !important;
      }
    }

    &-dark {
      border-color: var(--primary-color);

      & span {
        color: var(--primary-color);
      }

      &:hover {
        border-color: var(--blue-light-color);

        & span {
          color: var(--blue-light-color);
        }

        & svg {
          stroke: var(--blue-light-color) !important;
        }
      }
    }
  }

  &.form-blue {
    padding: 2rem 3.2rem;
    border-color: var(--blue-color);
    border-radius: .3rem;
    background-color: var(--blue-color);

    &:hover {
      background: darken(#4481FF, 6);
    }

    & span {
      color: var(--white-color);
    }
  }

  // Adaptation
  @media (max-width: 992px) {
    &.form-blue {
      padding: 1.8rem 3rem;
      border-radius: .3rem;
    }
  }


  @media (max-width: 576px) {
    padding: 1.2rem 2.4rem;

    &.mini {
      padding: .8rem 1.8rem;
    }
  }

  @media (max-width: 380px) {
  }
}
</style>
