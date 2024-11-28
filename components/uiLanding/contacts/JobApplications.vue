<template>
  <section class="landing-block">
    <div class="landing-wrapper">
      <h2 class="jobAplication-title landing-title mini" v-html="$t('contacts.jobAplication.title')"></h2>

      <Form
        class="jobAplication-form"
        @finish="onSubmit"
      >
        <div class="jobAplication-form-inputs desktop">
          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.myName') }}</h3>
            <Input
              name="name"
              :placeholder="$t('formdata.placeholder-name')"
              v-model="isFormData.name"
              theme="outline"
              required
            />
            <h3 class="jobAplication-form-row-title"><span>,</span> {{ $t('contacts.jobAplication.form.interestedVacancy') }}</h3>
            <Input
              name="position"
              :placeholder="$t('formdata.placeholder-position')"
              v-model="isFormData.position"
              theme="outline"
              required
            />
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>

          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.myResume') }}</h3>
            <Input
              name="resume"
              :placeholder="$t('formdata.placeholder-resume')"
              v-model="isFormData.resume"
              theme="outline"
              required
            />
            <h3 class="jobAplication-form-row-title"><span>,</span> {{ $t('contacts.jobAplication.form.myPhone') }}</h3>
            <Input
              type="tel"
              name="phone"
              v-model="isFormData.phone"
              :placeholder="$t('formdata.placeholder-phone')"
              validation="phone"
              theme="outline"
              :min="17"
              required
            />
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>

          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.coverLetter') }}</h3>
            <Input
              name="skill"
              type="textarea"
              :placeholder="$t('formdata.placeholder-coverLetter')"
              v-model="isFormData.skill"
              theme="outline"
              required
            />
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>
        </div>


        <div class="jobAplication-form-inputs mobile">
          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.myName') }}</h3>
            <Input
              name="name"
              :placeholder="$t('formdata.placeholder-name')"
              v-model="isFormData.name"
              theme="outline"
              required
            />
            <h3 class="jobAplication-form-row-title">,</h3>
          </div>

          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.interestedVacancy') }}</h3>
            <Input
              name="position"
              :placeholder="$t('formdata.placeholder-position')"
              v-model="isFormData.position"
              theme="outline"
              required
            />
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>

          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.myResume') }}</h3>
            <Input
              name="resume"
              :placeholder="$t('formdata.placeholder-resume')"
              v-model="isFormData.resume"
              theme="outline"
              required
            />
            <h3 class="jobAplication-form-row-title">,</h3>
          </div>


          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.myPhone') }}</h3>
            <Input
              type="tel"
              name="phone"
              v-model="isFormData.phone"
              :placeholder="$t('formdata.placeholder-phone')"
              validation="phone"
              theme="outline"
              :min="17"
              required
            />
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>

          <div class="jobAplication-form-row">
            <h3 class="jobAplication-form-row-title">{{ $t('contacts.jobAplication.form.coverLetter') }}</h3>
            <Input
              name="skill"
              type="textarea"
              :placeholder="$t('formdata.placeholder-coverLetter')"
              v-model="isFormData.skill"
              theme="outline"
              required
            />
            <h3 class="jobAplication-form-row-title">.</h3>
          </div>
        </div>

        <div class="jobAplication-form-bottom">
          <Button
            :name="$t('formdata.submit')"
            :loading="isLoading"
            :mini="false"
            type="form-blue"
            htmlType="submit"
          />

          <p class="jobAplication-form-bottom-text">
            {{ $t('formdata.privicy') }}
            <a href="#">{{ $t('formdata.privicy-linkText') }}</a>
          </p>
        </div>
      </Form>
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
    skill: '',
    position: '',
    resume: '',
  })

  const onSubmit = async () => {
    isLoading.value = true
    try {
      const res = await instance.post("/request/work", {
        name: isFormData.name,
        phone: isFormData.phone,
        skill: `Резюме: ${isFormData.resume}. ${isFormData.skill}`,
        position: isFormData.position,
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
</script>

<style lang="scss">
.jobAplication {
  &-form {
    &-inputs {
      display: flex;
      flex-direction: column;
      grid-gap: 2.8rem;

      margin-bottom: 4rem;

      &.mobile {
        display: none;
      }
    }

    &-row {
      display: flex;
      align-items: center;
      grid-gap: 2rem;

      &:last-of-type {
        align-items: flex-start;

        & .jobAplication-form-row-title {
          margin-top: .34rem;
        }
      }

      &-title {
        font-size: 2.4rem;
        line-height: 1.25;
        text-wrap: nowrap;
        letter-spacing: 1.4%;
      }
    }

    &-bottom {
      display: grid;
      grid-template-columns: 50rem 28rem;
      align-items: center;
      grid-gap: 3rem;

      &-text {
        color: var(--gray-color);

        & a {
          color: var(--gray-color);
          text-decoration: underline;
        }
      }
    }
  }


  // Adaptation
  @media (max-width: 1400px) {
    &-form {
      &-inputs {
        grid-gap: 2.4rem;
        margin-bottom: 3.8rem;
      }
  
      &-row {
        grid-gap: 1.8rem;
  
        &:last-of-type {
          & .jobAplication-form-row-title {
            margin-top: .3rem;
          }
        }
  
        &-title {
          font-size: 2.1rem;
        }
      }
  
      &-bottom {
        grid-template-columns: 46rem 28rem;
        grid-gap: 3rem;
      }
    }
  }

  @media (max-width: 1200px) {
    &-form {
      &-inputs {
        grid-gap: 2rem;
        margin-bottom: 3.6rem;

        &.desktop {
          display: none;
        }

        &.mobile {
          display: flex;
        }
      }
  
      &-row {
        display: inline-flex;
        grid-gap: 1.6rem;
  
        &:last-of-type {
          & .jobAplication-form-row-title {
            margin-top: .3rem;
          }
        }
  
        &-title {
          font-size: 2rem;
        }

        & .asInput {
          max-width: 40rem;
        }
      }

      &-bottom {
        grid-template-columns: 44rem 24rem;
        grid-gap: 2.8rem;
      }
    }
  }

  @media (max-width: 992px) {
    &-form {
      &-inputs {
        grid-gap: 1.8rem;
        margin-bottom: 3.4rem;

        &.desktop {
          display: none;
        }

        &.mobile {
          display: flex;
        }
      }
  
      &-row {
        display: flex;
        grid-gap: 1.4rem;
  
        &:last-of-type {
          flex-wrap: wrap;
          align-items: end;
        
          & .jobAplication-form-row-title {
            margin-top: 0;
          }

          & .jobAplication-form-row-title {
            padding-bottom: 1rem;
          }
        }
  
        &-title {
          font-size: 1.8rem;
        }

        & .asInput {
          max-width: calc(100% - 3rem);
        }
      }

      &-bottom {
        grid-template-columns: 36rem 1fr;
        grid-gap: 2.6rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-form {
      &-inputs {
        grid-gap: 1.6rem;
        margin-bottom: 3.2rem;

        &.desktop {
          display: none;
        }

        &.mobile {
          display: flex;
        }
      }
  
      &-row {
        grid-gap: 1.2rem;
  
        &:last-of-type {
          flex-wrap: wrap;
        
          & .jobAplication-form-row-title {
            margin-top: 0;
          }
        }
  
        &-title {
          font-size: 1.8rem;
        }

        & .asInput {
          max-width: calc(100% - 2rem);
        }
      }

      &-bottom {
        display: block;

        & button {
          width: 100%;
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media (max-width: 576px) {
    &-form {
      &-inputs {
        grid-gap: 2.6rem;
        margin-bottom: 3rem;

        &.desktop {
          display: none;
        }

        &.mobile {
          display: flex;
        }
      }
  
      &-row {
        flex-wrap: wrap;
        grid-gap: .4rem 1.2rem;
  
        &-title {
          font-size: 1.6rem;
          text-wrap: wrap;
        }

        & .asInput {
          max-width: calc(100% - 2rem);
        }
      }

      &-bottom {
        display: block;

        & button {
          width: 100%;
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media (max-width: 380px) {
  }
}
</style>
