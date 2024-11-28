<template>
  <section class="contactsFeedback landing-block" id="contactsFeedback">
    <div class="landing-wrapper">
      <h2 class="contactsFeedback-title landing-title mini">{{ $t('contacts.feedback.title') }}</h2>

      <div class="contactsFeedback-inner">
        <Form
          class="contactsFeedback-form"
          @finish="onSubmit"
        >
          <div class="contactsFeedback-form-inputs">
            <Input
              name="name"
              :label="$t('formdata.name')"
              :placeholder="$t('formdata.placeholder-name')"
              v-model="isFormData.name"
              required
            />

            <Input
              type="tel"
              name="phone"
              v-model="isFormData.phone"
              :label="$t('formdata.phone')"
              :placeholder="$t('formdata.placeholder-phone')"
              validation="phone"
              :min="17"
              required
            />
          </div>

          <div class="contactsFeedback-form-bottom">
            <Button
              :name="$t('formdata.submit')"
              :loading="isLoading"
              :mini="false"
              type="form-blue"
              htmlType="submit"
            />

            <p class="contactsFeedback-form-bottom-text">
              {{ $t('formdata.privicy') }}
              <a href="#">{{ $t('formdata.privicy-linkText') }}</a>
            </p>
          </div>
        </Form>


        <div class="contactsFeedback-contacts">
          <div class="contactsFeedback-contacts-top">
            <div class="contactsFeedback-contacts-links">
              <a class="contactsFeedback-contacts-link" href="tel:+77475628447">т. <span>+7 (747) 562-84-47</span></a>
              <a class="contactsFeedback-contacts-link" href="mailto:info.codetau@gmail.com">e. <span>info.codetau@gmail.com</span></a>
              <a class="contactsFeedback-contacts-link" target="_blank" href="https://yandex.kz/maps/162/almaty/?from=mapframe&ll=76.915494%2C43.237148&mode=usermaps&source=mapframe&um=constructor%3Af5d6eec10d7065b38c428ca31eee63306d23fb198f69f86aec2c5771b51970d1&utm_source=mapframe&z=17">{{ $t('contacts.address') }}</a>
            </div>
            <div class="contactsFeedback-workTime">
              <h4 class="contactsFeedback-workTime-title">{{ $t('contacts.workTime') }}</h4>

              <div class="contactsFeedback-workTime-days">
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.mo') }}</h4></div>
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.tu') }}</h4></div>
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.we') }}</h4></div>
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.th') }}</h4></div>
                <div class="contactsFeedback-workTime-days-item"><h4>{{ $t('days.fr') }}</h4></div>
              </div>
            </div>
          </div>
          <div class="contactsFeedback-contacts-map">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { onMounted, reactive, ref } from 'vue'

  import { useToast } from '@/module/toast'
  import instance from '@/api/instance';

  const { t } = useI18n()
  const { toast } = useToast()

  const isLoading = ref(false);
  const isFormData = reactive({
    name: '',
    phone: '',
  })

  const onSubmit = async () => {
    isLoading.value = true
    try {
      const res = await instance.post("/request/client", {
        name: isFormData.name,
        phone: isFormData.phone,
      });
      toast({
        message: res.data.message,
        type: 'success'
      })

    } catch (err) {
      toast({
        message: t('message.an-error-occurred-during-the-request-please-try-again-later'),
        type: 'warning'
      })
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    let script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af5d6eec10d7065b38c428ca31eee63306d23fb198f69f86aec2c5771b51970d1&amp;width=100%25&amp;height=262&amp;lang=ru_RU&amp;scroll=true";
    document.querySelector(".contactsFeedback-contacts-map")!.appendChild(script);
  })
</script>

<style lang="scss" scoped>
.contactsFeedback {
  &-title {
    margin-bottom: 1em;
  }

  &-inner {
    display: grid;
    grid-template-columns: 52rem 1fr;
    grid-gap: 6.8rem;
  }

  &-form {
    &-inputs {
      display: flex;
      flex-direction: column;
      grid-gap: 2rem;

      margin-bottom: 3.4rem;
    }

    &-bottom {
      display: flex;
      align-items: center;
      grid-gap: 3rem;

      & button {
        min-width: 21rem;
      }

      &-text {
        color: var(--gray-color);

        & a {
          color: var(--gray-color);
          text-decoration: underline;
        }
      }
    }
  }

  &-contacts {
    padding-top: 2.2rem;

    &-top {
      display: flex;
      justify-content: space-between;

      margin-bottom: 4.2rem;
    }

    &-links {
      max-width: 42rem;
    }

    &-link {
      display: block;
      margin-bottom: 1.25em;

      & span {
        color: var(--blue-light-color);
      }
    }

    &-link:last-of-type {
      margin-bottom: 0;
    }

    &-map {
      height: 26rem;
      background-color: var(--gray-color-op5);
    }
  }

  &-workTime {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
      color: var(--gray-color);
      font-size: 1.6rem;
      font-weight: 400;
      font-family: var(--secondary-font);
      
      margin-bottom: .75em;
      position: relative;

      &::before,
      &::after {
        content: '';

        display: block;
        width: 7.5rem;
        height: 1rem;

        position: absolute;
        bottom: 0;
        z-index: 1;
      }

      &::before {
        left: -8.9rem;

        border-top: .1rem solid var(--primary-color-op20);
        border-left: .1rem solid var(--primary-color-op20);
        border-top-left-radius: 2rem;
      }

      &::after {
        right: -8.9rem;

        border-top: .1rem solid var(--primary-color-op20);
        border-right: .1rem solid var(--primary-color-op20);
        border-top-right-radius: 2rem;
      }
    }

    &-days {
      display: flex;
      grid-gap: 1.5rem;

      &-item {
        height: 6rem;
        width: 6rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: .4rem;
        background-color: var(--gray-color-op10);

        & h4 {
          color: var(--gray-color-op40);
          font-size: 2rem;
        }
      }

      &-item:first-child,
      &-item:last-child {
        background-color: var(--perple-light-color);

        & h4 {
          color: var(--white-color);
        }
      }
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    &-title {
      margin-bottom: 1em;
    }

    &-inner {
      grid-template-columns: 44rem 1fr;
      grid-gap: 4.8rem;
    }

    &-form {
      &-inputs {
        grid-gap: 1.8rem;
        margin-bottom: 3.2rem;
      }

      &-bottom {
        display: block;

        & button {
          min-width: 100%;
          margin-bottom: 1rem;
        }
      }
    }

    &-contacts {
      padding-top: 2rem;

      &-top {
        margin-bottom: 4rem;
      }

      &-links {
        max-width: 40rem;
      }

      &-link {
        margin-bottom: 1.25em;
      }

      &-map {
        height: 24rem;
      }
    }

    &-workTime {
      &-title {
        margin-bottom: .75em;

        &::before,
        &::after {
          width: 7.5rem;
          height: 1rem;
        }

        &::before {
          left: -8.9rem;
          border-top-left-radius: 2rem;
        }

        &::after {
          right: -8.9rem;
          border-top-right-radius: 2rem;
        }
      }

      &-days {
        grid-gap: 1.4rem;

        &-item {
          height: 5rem;
          width: 5rem;

          border-radius: .4rem;

          & h4 {
            font-size: 1.8rem;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    &-title {
      margin-bottom: 1em;
    }

    &-inner {
      grid-template-columns: 38rem 1fr;
      grid-gap: 4.4rem;
    }

    &-form {
      &-inputs {
        grid-gap: 1.6rem;
        margin-bottom: 3rem;
      }
    }

    &-contacts {
      padding-top: 1.8rem;

      &-top {
        /* display: block; */
        margin-bottom: 3.8rem;
      }

      &-links {
        max-width: 40rem;
      }

      &-link {
        margin-bottom: 1.2rem;
      }

      &-map {
        height: 20rem;
      }
    }

    &-workTime {
      &-title {
        margin-bottom: .75em;

        &::before,
        &::after {
          width: 5rem;
          height: .93rem;
        }

        &::before {
          left: -6rem;
          border-top-left-radius: 2rem;
        }

        &::after {
          right: -6rem;
          border-top-right-radius: 2rem;
        }
      }

      &-days {
        grid-gap: .8rem;

        &-item {
          height: 4.6rem;
          width: 4.6rem;

          border-radius: .3rem;

          & h4 {
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    &-title {
      margin-bottom: 1em;
    }

    &-inner {
      grid-template-columns: 36rem 1fr;
      grid-gap: 4.4rem;
    }

    &-form {
      &-inputs {
        grid-gap: 1.6rem;
        margin-bottom: 3rem;
      }
    }

    &-contacts {
      padding-top: 1.8rem;

      &-top {
        display: block;
        margin-bottom: 4rem;
      }

      &-links {
        max-width: 40rem;
        margin-bottom: 2.8rem;
      }

      &-link {
        margin-bottom: 1.2rem;
      }

      &-map {
        height: 18rem;
      }
    }

    &-workTime {
      max-width: 23.4rem;

      &-title {
        margin-bottom: .75em;

        &::before,
        &::after {
          width: 3.6rem;
          height: .672rem;
        }

        &::before {
          left: -5rem;
          border-top-left-radius: 2rem;
        }

        &::after {
          right: -5rem;
          border-top-right-radius: 2rem;
        }
      }

      &-days {
        grid-gap: .6rem;

        &-item {
          height: 4.2rem;
          width: 4.2rem;

          border-radius: .2rem;

          & h4 {
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    &-title {
      margin-bottom: 1em;
    }

    &-inner {
      display: block;
    }

    &-form {
      max-width: 54rem;
      margin-bottom: 6rem;

      &-inputs {
        grid-gap: 1.4rem;
        margin-bottom: 2.4rem;
      }
    }

    &-contacts {
      padding-top: 0;

      &-top {
        display: flex;
        grid-gap: 4rem;

        margin-bottom: 3.6rem;
      }

      &-links {
        max-width: none;

        display: flex;
        flex-wrap: wrap;
        grid-gap: 1.6rem 3rem;

        margin-bottom: 0;
      }

      &-link {
        margin-bottom: 0;
      }

      &-map {
        height: 18rem;
      }
    }

    &-workTime {
      max-width: 23.4rem;

      &-title {
        margin-bottom: .75em;

        &::before,
        &::after {
          width: 3.6rem;
          height: .672rem;
        }

        &::before {
          left: -5rem;
          border-top-left-radius: 2rem;
        }

        &::after {
          right: -5rem;
          border-top-right-radius: 2rem;
        }
      }

      &-days {
        grid-gap: .6rem;

        &-item {
          height: 4.2rem;
          width: 4.2rem;

          border-radius: .2rem;

          & h4 {
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    &-title {
      margin-bottom: 1em;
    }

    &-inner {
      display: block;
    }

    &-form {
      max-width: 54rem;
      margin-bottom: 5rem;

      &-inputs {
        grid-gap: 1.4rem;
        margin-bottom: 2.4rem;
      }
    }

    &-contacts {
      &-top {
        display: block;
        margin-bottom: 3.6rem;
      }

      &-links {
        max-width: none;

        display: flex;
        flex-wrap: wrap;
        grid-gap: 1.6rem 3rem;

        margin-bottom: 2.6rem;
      }

      &-link {
        margin-bottom: 0;
      }

      &-map {
        height: 18rem;
      }
    }

    &-workTime {
      &-title {
        margin-bottom: .75em;

        &::before,
        &::after {
          width: 3.6rem;
          height: .672rem;
        }

        &::before {
          left: -5rem;
          border-top-left-radius: 2rem;
        }

        &::after {
          right: -5rem;
          border-top-right-radius: 2rem;
        }
      }

      &-days {
        grid-gap: .6rem;

        &-item {
          height: 4rem;
          width: 4rem;

          border-radius: .2rem;

          & h4 {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media (max-width: 380px) {
  }
}
</style>