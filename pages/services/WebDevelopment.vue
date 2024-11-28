<template>
  <main>
    <HeaderLanding id="header" />

    <div class="webDevelopment-titleBlock landing-wrapper">
      <div class="landing-notesBG page-title">
        <Cursor class="webDevelopment-titleBlock-cursor first" />
        <Cursor class="webDevelopment-titleBlock-cursor second" />

        <Comment
          class="webDevelopment-titleBlock-comment first"
          :title="$t('comments.creating_platforms_that_grow_with_you')"
          closed
        />
        <Comment
          class="webDevelopment-titleBlock-comment second"
          :title="$t('comments.modern_websites_for_your_business')"
        />

        <SelectionText
          class="webDevelopment-titleBlock-title landing-title solo center"
          :title="$t('services.webDevelopment.title')"
          :startIdx="15"
          :endIdx="21"
        />
      </div>
    </div>


    <Intro />

    <WebTechnologies />

    <ServicesProjects
      filter="web"
      :title="$t('services.webDevelopment.projectsTitle')"
      :startIdx="9"
      :endIdx="19"
    />

    <RunningLines theme="outline" type="static" />

    <ServiceFeaturesSlider theme="light" />

    <Workflow />

    <DevelopmentPlan theme="light" />

    <CompaniesSlider />

    <div class="dark-bg">
      <ACallToAction />
      
      <FooterLanding />
    </div>
  </main>
</template>

<script lang="ts" setup>
  import HeaderLanding from '@/components/uiLanding/layouts/HeaderLanding.vue';
  import FooterLanding from '@/components/uiLanding/layouts/FooterLanding.vue';

  import Intro from '@/components/uiLanding/services/web-development/Intro.vue';
  import WebTechnologies from '@/components/uiLanding/services/web-development/WebTechnologies.vue';
  import ACallToAction from '@/components/uiLanding/ACallToAction.vue';
  import CompaniesSlider from '@/components/uiLanding/CompaniesSlider.vue';
  import RunningLines from '@/components/uiLanding/RunningLines.vue';
  import Workflow from '@/components/uiLanding/Workflow.vue';
  import DevelopmentPlan from '@/components/uiLanding/DevelopmentPlan.vue';
  import ServiceFeaturesSlider from '@/components/uiLanding/services/service-features/ServiceFeaturesSlider.vue';
  import ServicesProjects from '@/components/uiLanding/services/ServicesProjects.vue';
</script>

<style lang="scss" scoped>
.webDevelopment {
  &-titleBlock {
    &-title {
      max-width: 96rem;
    }

    &-cursor {
      position: absolute;
      z-index: 5;

      &.first {
        bottom: 10rem;
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


  // Adaptation
  @media (max-width: 1400px) {
    &-titleBlock {
      &-cursor {
        &.first {
          bottom: 8rem;
          left: 70%;
          transform: translateX(-30%);
        }

        &.second {
          bottom: 8rem;
          left: 20%;
          transform: translateX(-80%);
        }
      }

      &-comment {
        &.first {
          top: 10%;
          left: 15%;
          transform: translate(-90%, -85%);
        }

        &.second {
          top: 90%;
          left: 70%;
          transform: translate(-10%, -30%);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    &-titleBlock {
      &-cursor {
        &.first {
          bottom: 8rem;
          left: 90%;
          transform: translateX(-10%);
        }

        &.second {
          bottom: 8rem;
          left: 10%;
          transform: translateX(-90%);
        }
      }

      &-comment {
        &.first {
          top: 10%;
          left: 15%;
          transform: translate(-90%, -85%);
        }

        &.second {
          top: 90%;
          left: 68%;
          transform: translate(-10%, -32%);
        }
      }
    }
  }

  @media (max-width: 992px) {
    &-titleBlock {
      &-title {
        max-width: 66rem;
      }

      &-cursor {
        &.first {
          bottom: 8rem;
          left: 90%;
          transform: translateX(-10%);
        }

        &.second {
          bottom: 8rem;
          left: 10%;
          transform: translateX(-90%);
        }
      }

      &-comment {
        &.first {
          top: 10%;
          left: 15%;
          transform: translate(-90%, -85%);
        }

        &.second {
          top: 90%;
          left: 60%;
          transform: translate(-10%, -40%);
        }
      }
    }
  }

  @media (max-width: 768px) {
    &-titleBlock {
      &-cursor {
        &.first {
          bottom: 8rem;
          left: 90%;
          transform: translateX(-10%);
        }

        &.second {
          bottom: 8rem;
          left: 10%;
          transform: translateX(-90%);
        }
      }

      &-comment {
        &.first {
          top: 5%;
          left: 15%;
          transform: translate(-95%, -85%);
        }

        &.second {
          top: 98%;
          left: 54%;
          transform: translate(-2%, -46%);
        }
      }
    }
  }

  @media (max-width: 576px) {
    &-titleBlock {
      /* margin-bottom: 9rem; */

      &-cursor {
        &.first {
          bottom: 4rem;
          left: 90%;
          transform: translateX(-10%);
        }

        &.second {
          bottom: 4rem;
          left: 10%;
          transform: translateX(-90%);
        }
      }

      &-comment {
        &.first {
          top: 5%;
          left: 15%;
          transform: translate(-95%, -85%);
        }

        &.second {
          top: 98%;
          left: 46%;
          transform: translate(-2%, -56%);
        }
      }
    }
  }

  @media (max-width: 380px) {
  }
}
</style>
