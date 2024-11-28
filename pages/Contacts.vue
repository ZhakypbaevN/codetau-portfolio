<template>
  <main>
    <HeaderLanding />

    <div class="landing-wrapper">
      <div class="contactsPage-titleBlock landing-notesBG page-title">
        <Cursor class="contactsPage-titles-cursor first" />
        <Cursor class="contactsPage-titles-cursor second" />

        <Comment
          class="contactsPage-titles-comment first"
          :title="$t('comments.contact_us_for_consultation')"
          closed
        />
        <Comment
          class="contactsPage-titles-comment second"
          :title="$t('comments.we_are_here_to_answer_your_questions')"
        />

        <SelectionText
          class="contactsPage-title landing-title solo center"
          :title="$t('contacts.title')"
          :startIdx="5"
          :endIdx="12"
        />
      </div>
    </div>

    <ContactFeedback />

    <section class="contactsPage-companiesSlider landing-block">
      <CompaniesSlider />
    </section>

    <JobApplications />

    <ACallToAction theme="light" />
    
    <FooterLanding theme="light" />

    <Toast />
  </main>
</template>

<script lang="ts" setup>
  import HeaderLanding from '@/components/uiLanding/layouts/HeaderLanding.vue';
  import FooterLanding from '@/components/uiLanding/layouts/FooterLanding.vue';

  import ACallToAction from '@/components/uiLanding/ACallToAction.vue';
  import CompaniesSlider from '@/components/uiLanding/CompaniesSlider.vue';
  
  import ContactFeedback from '@/components/uiLanding/contacts/ContactFeedback.vue';
  import JobApplications from '@/components/uiLanding/contacts/JobApplications.vue';
</script>

<style lang="scss" scoped>
.contactsPage {
  &-titleBlock {
    margin-bottom: 1rem;
  }

  &-titles {
    &-cursor {
      position: absolute;
      z-index: 5;

      &.first {
        top: 4rem;
        left: 70%;
        transform: translateX(-30%);
      }

      &.second {
        bottom: 10rem;
        left: 20%;
        transform: translateX(-80%);
      }
    }

    &-comment {
      position: absolute;
      z-index: 2;

      &.first {
        top: 15%;
        left: 10%;
        transform: translate(-85%, -90%);
      }

      &.second {
        top: 70%;
        left: 80%;
        transform: translate(-30%, -94%);
      }
    }
  }

  &-companiesSlider {
    padding: 5rem 0 3rem;
  }


  // Adaptation
  @media (max-width: 1200px) {
    &-titleBlock {
      margin-bottom: 1rem;
    }

    &-titles {
      &-cursor {
        &.first {
          top: 4rem;
          left: 80%;
          transform: translateX(-20%);
        }

        &.second {
          bottom: 10rem;
          left: 20%;
          transform: translateX(-80%);
        }
      }

      &-comment {
        &.first {
          top: 15%;
          left: 10%;
          transform: translate(-85%, -90%);
        }

        &.second {
          top: auto;
          left: 60%;
          bottom: .2rem;
          transform: translateX(-40%);
        }
      }
    }

    &-companiesSlider {
      padding: 4rem 0 2rem;
    }
  }

  @media (max-width: 992px) {
    &-titleBlock {
      margin-bottom: 1rem;
    }

    &-titles {
      &-cursor {
        &.first {
          top: 4rem;
          left: 80%;
          transform: translateX(-20%);
        }

        &.second {
          bottom: 4rem;
          left: 20%;
          transform: translateX(-80%);
        }
      }

      &-comment {
        &.first {
          top: 15%;
          left: 10%;
          transform: translate(-85%, -90%);
        }

        &.second {
          top: auto;
          left: 60%;
          bottom: .2rem;
          transform: translateX(-40%);
        }
      }
    }

    &-companiesSlider {
      padding: 3rem 0 1.6rem;
    }
  }

  @media (max-width: 768px) {
    &-companiesSlider {
      padding: 2.4rem 0 1.2rem;
    }
  }

  @media (max-width: 576px) {
    &-titles {
      &-cursor {
        &.first {
          top: 1rem;
          left: 80%;
          transform: translateX(-20%);
        }

        &.second {
          bottom: 1rem;
          left: 20%;
          transform: translateX(-80%);
        }
      }

      &-comment {
        &.first {
          top: 5%;
          left: 10%;
          transform: translate(-95%, -90%);
        }

        &.second {
          top: auto;
          left: 60%;
          bottom: .2rem;
          transform: translateX(-40%);
        }
      }
    }
  }
}
</style>
