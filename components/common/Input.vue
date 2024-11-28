<template>
  <div class="asInput"
    :class="{
      default: theme == 'default',
      outline: theme == 'outline',
      focused: input.focused,
      withError: input.withError && input.focused || input.withError && input.value,
      hasError: input.withError,
      disabled
    }">

    <label
      class="asInput-label"
      v-if="label"
      :for="`asInput-${name}`"
    >
      {{ label }}
      <span v-if="required">*</span>
    </label>
    <span class="asInput-maxSymbol" v-if="maxSymbol && type === 'textarea'">{{ maxSymbol - (input.value ? String(input.value).length : 0) }}/{{ maxSymbol }}</span>


    <!-- v-mask="'+7 (###) ### ####'" -->
    <input
      :type="input.eyeState ? input.eyeState : type"
      v-model="input.value"
      :required="required"
      @change="$emit('change')"
      @blur="onBlur"
      @focus="onFocus"
      :class="{'with-error': input.withError}"
      :min="17"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      v-if="type === 'tel'"
      :id="`asInput-${name}`"
    >

    <textarea
      v-model="input.value"
      :required="required"
      @change="$emit('change')"
      :maxlength="maxSymbol"
      @blur="onBlur"
      @focus="onFocus"
      :class="{'with-error': input.withError}"
      :placeholder="placeholder"
      v-else-if="type === 'textarea'"
      :id="`asInput-${name}`"
    />

    <div
      class="asInput-disabledInput"
      v-else-if="type === 'disabled'"
    >
      <span v-if="input.value">
        {{ input.value }}
      </span>
    </div>

    <input
      :type="input.eyeState ? input.eyeState : type"
      v-model="input.value"
      :required="required"
      v-mask="props.mask"
      :min="min"
      @blur="onBlur"
      @focus="onFocus"
      @change="$emit('change')"
      :class="{'with-error': input.withError}"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxSymbol"
      v-else-if="props.mask"
      :id="`asInput-${name}`"
    >

    <input
      :type="input.eyeState ? input.eyeState : type"
      v-model="input.value"
      :required="required"
      :min="min"
      @blur="onBlur"
      @focus="onFocus"
      @change="$emit('change')"
      :class="{'with-error': input.withError}"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxSymbol"
      :id="`asInput-${name}`"
      v-else
    >

    <span v-if="type === 'password'" class="asInput-input__eye">
      <Transition mode="out-in">
        <SvgIcon
          v-if="input.eyeState === 'text'"
          name="password-eye-on"
          @click="input.eyeState = 'password'"
          :fill="input.withError ? 'var(--error-color)' : (input.focused ? 'var(--accent-color)' : 'black')"
        />
        <SvgIcon
          v-else
          name="password-eye-off"
          @click="input.eyeState = 'text'"
          :fill="input.withError ? 'var(--error-color)' : (input.focused ? 'var(--accent-color)' : 'black')"
        />
      </Transition>
    </span>

    <SvgIcon
      v-if="resetButton && input.value"
      class="asInput-reset"
      name="x"
      @click="$emit('reset')"
    />
    <Transition name="error">
      <span class="asInput-error" :class="{ long: input.withError.length > 20 }" v-if="input.withError">{{ input.withError }}</span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { inject, onMounted, reactive, watch } from 'vue-demi'
  import { useI18n } from 'vue-i18n'

  interface IProps {
    modelValue?: any,
    value?: string | number,
    name?: string,
    theme?: 'default' | 'outline',
    type?: 'text' | 'tel' | 'email' | 'number' | 'password' | 'textarea' | 'disabled',
    label?: string,
    placeholder?: string,
    required?: boolean,
    validation?: any,
    sameAs?: string,
    autocomplete?: string,
    autofocus?: boolean,
    min?: number,
    mask?: string,
    staticPlaceholder?: boolean,
    disabled?: boolean,
    resetButton?: boolean,
    multiple?: boolean,
    errorText?: string,
    maxSymbol?: number
  }

  interface IInputValues {
    value: string | number,
    isDirty: boolean,
    eyeState: any,
    withError: any,
    focused: boolean,
    hasError: any,
    formValue: any,
  }

  const { t } = useI18n()

  const props = withDefaults(defineProps<IProps>(), {
    type: 'text',
    theme: 'default',
    required: false,
    validation: false,
    autocomplete: 'on',
    light: false,
    autofocus: false,
    disabled: false,
    resetButton: false,
    multiple: false,
    mask: null
  })
  const emit = defineEmits([
    'update:modelValue',
    'reset',
    'blur',
    'error',
    'success',
    'change',
    'focus',
    'label'
  ])

  const input = reactive(<IInputValues>{
    value: props.modelValue ?? '',
    isDirty: false,
    eyeState: null,
    withError: null,
    focused: false,
    hasError: (props.required || props.validation) && props.name ? inject('hasError') : {},
    formValue: props.name ? inject('formData') : {}
  })
  if (props.name) input.hasError[props.name] = props.required || props.validation
  const inputName = props.name ?? 'example'

  const rules = {
    email: () => /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
      .test(String(input.value).toLowerCase()) ? false : t('errors.enter-the-correct-email-address'),

    // phone: () => input.value && String(input.value).length === 17 ? false : t('errors.enter-the-correct-number'),
    phone: () => input.value ? false : t('errors.this-field-is-required'),

    password: () => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
      .test(String(input.value)) ? false : t('errors.the-password-must-contain-at-least-8-characters'),

    sameAs: () => input.value.toString() === props.sameAs ? false : t('errors.the-fields-don-not-match'),

    customRegex: () => props.validation.test(String(input.value)) ? false : props.errorText ?? t('errors.enter-the-field-correctly')
  }

  const onChangeValue = () => {
    input.formValue[inputName] = input.value
    const validate = validation()
    
    if (input.isDirty) {
      input.withError = false
      if (props.required) {
        if (!input.value) input.withError = t('errors.this-field-is-required')
      }
      if (props.validation && !input.withError) {
        input.withError = validate(input.value)
      }
    }
    if (props.validation && !validate(input.value)) {
      emit('success')
      input.hasError[inputName] = false
    } else if (props.validation && validate(input.value)) {
      emit('error')
      input.hasError[inputName] = true
    } else if (props.required && input.value) {
      emit('success')
      input.hasError[inputName] = false
    } else {
      emit('error')
      input.hasError[inputName] = true
    }
    if (props.min && (input.value ? input.value.toString().length : 0) < props.min) {
      emit('error')
      input.hasError[inputName] = true
    }
    emit('update:modelValue', input.value)
  }

  watch(
    () => input.value,
    onChangeValue
  )

  watch(
    () => props.modelValue,
    () => {
      input.value = props.modelValue
      onChangeValue()
    }
  )

  onMounted(onChangeValue)

  watch(
    () => input.withError,
    () => {
      if (input.withError) {
        emit('error')
        input.hasError[inputName] = true
      } else {
        emit('success')
        input.hasError[inputName] = false
      }
    }
  )

  watch(
    () => [input.focused, input.value],
    () => {
      if (input.focused || input.value) {
        emit('label', true)
      } else emit('label', false)
    }
  )

  const validation = () => {
    if (typeof props.validation === 'string') {
      return rules[props.validation as keyof typeof rules]
    } else if (typeof props.validation === 'object') {
      return rules.customRegex
    }
    return () => {}
  }

  const onBlur = ({e}: {e: KeyboardEvent}) => {
    emit('blur', e)
    input.focused = false

    if (!input.isDirty) input.isDirty = true

    input.withError = false
    if (props.required && !input.value) {
      input.withError = t('errors.this-field-is-required')
    }

    if (props.validation && !input.withError) {
      const validate = validation()
      input.withError = validate(input.value)
    }
  }

  const onFocus = ({e}: {e: KeyboardEvent}) => {
    input.focused = true
    emit('focus', e)
  }
</script>

<style lang="scss">
.asInput {
  width: 100%;
  position: relative;

  &.outline {
    & input,
    & textarea {
      padding: 1rem 1.2rem;
      border: none;
      border-radius: 0;
      border-bottom: .1rem solid var(--gray-dark-color);
    }
  }

  &.default {
    & input,
    & textarea {
      padding: 2rem 3.4rem;
      border: .1rem solid var(--gray-color-op40);
    }
  }

  &.hasError {
    margin-bottom: 1.5rem;
  }
  &.withError input::placeholder {
    color: var(--error-color)!important;
  }

  &-label {
    display: block;

    color: var(--primary-color);
    font-size: 1.6rem;
    font-family: var(--secondary-font);

    margin-bottom: .6rem;

    & span {
      color: var(--red-color);
    }
  }

  &-error {
    color: var(--error-color);
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 1.4rem;
    min-height: 1em;
    position: absolute;
    text-align: right;
    right: 0;
    bottom: -2rem;
    text-align: end;

    &.long {
      position: relative;
      display: block;
      bottom: -.1rem;
      margin-bottom: -1rem;
    }
  }
  & input,
  & textarea {
    width: 100%;
    min-height: auto;
    display: block;
    border-radius: .3rem;
    text-align: left !important;
    box-sizing: border-box;
    width: inherit;
    position: relative;
    resize: vertical;
    font-size: 1.6rem;
    line-height: 1.2;
    font-family: var(--secondary-font);

    &::placeholder {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.2;
      color: var(--gray-color-op20);
    }

    &:focus {
      border-color: var(--accent-color);

      &::placeholder {
        color: var(--accent-color);
        opacity: .5 !important;;
      }
    }

    &.with-error {
      border-color: var(--error-color) !important;
      animation: shake .1s linear 3;

      &::placeholder {
        color: var(--error-color) !important;
        opacity: .5 !important;;
      }
    }
  }
  /* &-textarea {
    min-height: 12rem;
  } */
  &-input[type=date]:required:invalid::-webkit-datetime-edit {
    color: transparent;
  }
  &-input[type=date]:focus::-webkit-datetime-edit {
    color: black !important;
  }

  &-maxSymbol {
    color: var(--cancel-color);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.2;

    position: absolute;
    right: 0;
    top: -2rem;
    z-index: 0;
    
    transition: all .2s ease;
    pointer-events: none;
  }

  &-input__eye {
    position: absolute;
    right: 2rem;
    top: 1.8rem;
    display: inline-block;
    cursor: pointer;
    overflow: hidden;

    & svg {
      height: 2.4rem;
      width: 2.4rem;
      fill: white !important;
    }
  }

  &-reset {
    position: absolute;
    right: 1.5rem;
    top: 1.8rem;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
      fill: var(--error-color);
    }
  }

  &-disabled-input {
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    background: rgba(22, 25, 49, 0.05);
    mix-blend-mode: normal;
    border-radius: .3rem;
    padding: 1.6rem 1.8rem 1.7rem 1.8rem;

    & span {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.2;
      letter-spacing: 0.02em;
      color: var(--primary-color);
    }
  }


  // Adaptation
  @media (max-width: 1200px) {
    &.outline {
      & input,
      & textarea {
        padding: 1rem 1.2rem;
      }
    }

    &.default {
      & input,
      & textarea {
        padding: 1.8rem 2.8rem;
      }
    }

    &.hasError {
      margin-bottom: 1.5rem;
    }

    &-error {
      font-size: 1.4rem;
      bottom: -2rem;

      &.long {
        bottom: -.1rem;
        margin-bottom: -1rem;
      }
    }
    & input,
    & textarea {
      border-radius: .3rem;
    }
    /* &-textarea {
      min-height: 12rem;
    } */

    &-maxSymbol {
      font-size: 1.6rem;
      top: -2rem;
    }

    &-input__eye {
      right: 2rem;
      top: 1.8rem;

      & svg {
        height: 2.4rem;
        width: 2.4rem;
      }
    }

    &-reset {
      right: 1.5rem;
      top: 1.8rem;
    }

    &-disabled-input {
      height: 5rem;
      border-radius: .3rem;
      padding: 1.6rem 1.8rem 1.7rem 1.8rem;
    }
  }

  @media (max-width: 992px) {
    &.outline {
      & input,
      & textarea {
        padding: 1rem 1.2rem;
      }
    }

    &.default {
      & input,
      & textarea {
        padding: 1.6rem 2.4rem;
      }
    }

    &.hasError {
      margin-bottom: 1.5rem;
    }

    &-error {
      font-size: 1.4rem;
      bottom: -2rem;

      &.long {
        bottom: -.1rem;
        margin-bottom: -1rem;
      }
    }
    & input,
    & textarea {
      border-radius: .3rem;
    }
    /* &-textarea {
      min-height: 12rem;
    } */

    &-maxSymbol {
      font-size: 1.6rem;
      top: -2rem;
    }

    &-input__eye {
      right: 2rem;
      top: 1.8rem;

      & svg {
        height: 2.4rem;
        width: 2.4rem;
      }
    }

    &-reset {
      right: 1.5rem;
      top: 1.8rem;
    }

    &-disabled-input {
      height: 5rem;
      border-radius: .3rem;
      padding: 1.6rem 1.8rem 1.7rem 1.8rem;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    &.outline {
      & input,
      & textarea {
        padding: 1rem 0;
      }
    }

    &.default {
      & input,
      & textarea {
        padding: 1.6rem 1.8rem;
      }
    }

    &.hasError {
      margin-bottom: 1.5rem;
    }

    &-error {
      font-size: 1.4rem;
      bottom: -2rem;

      &.long {
        bottom: -.1rem;
        margin-bottom: -1rem;
      }
    }
    & input,
    & textarea {
      border-radius: .3rem;
    }
    /* &-textarea {
      min-height: 12rem;
    } */

    &-maxSymbol {
      font-size: 1.6rem;
      top: -2rem;
    }

    &-input__eye {
      right: 2rem;
      top: 1.8rem;

      & svg {
        height: 2.4rem;
        width: 2.4rem;
      }
    }

    &-reset {
      right: 1.5rem;
      top: 1.8rem;
    }

    &-disabled-input {
      height: 5rem;
      border-radius: .3rem;
      padding: 1.6rem 1.8rem 1.7rem 1.8rem;
    }
  }

  @media (max-width: 380px) {
  }
}

.v-enter-active,
.v-leave-active {
  transition: all .2s ease;
}
.v-enter-from {
  transform: translateY(-100%);
}
.v-leave-to {
  transform: translateY(100%);
}
.error-enter-active,
.error-leave-active {
  transition: all .2s ease;
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
@keyframes shake {
  0% { left: -5px; }
  100% { left: 5px; }
}
</style>