<template>
  <main>
    <HeaderLanding />

    <Intro />

    <RunningLines />

    <Services />

    <AboutUs />

    <Workflow />

    <CompaniesSlider />

    <div class="dark-bg">
      <DevelopmentPlan />

      <ProjectsSlider />

      <WhyChooseUs />

      <ACallToAction />
      
      <FooterLanding />
    </div>
  </main>
</template>

<script lang="ts" setup>
  import HeaderLanding from '@/components/uiLanding/layouts/HeaderLanding.vue';
  import FooterLanding from '@/components/uiLanding/layouts/FooterLanding.vue';

  import RunningLines from '@/components/uiLanding/RunningLines.vue';
  import ACallToAction from '@/components/uiLanding/ACallToAction.vue';
  import CompaniesSlider from '@/components/uiLanding/CompaniesSlider.vue';
  import ProjectsSlider from '@/components/uiLanding/ProjectsSlider.vue';

  import Intro from '@/components/uiLanding/home/Intro.vue';
  import Services from '@/components/uiLanding/home/Services.vue';
  import AboutUs from '@/components/uiLanding/home/AboutUs.vue';
  import Workflow from '@/components/uiLanding/home/Workflow.vue';
  import DevelopmentPlan from '@/components/uiLanding/home/DevelopmentPlan.vue';
  import WhyChooseUs from '@/components/uiLanding/home/WhyChooseUs.vue';
</script>

<style lang="scss" scoped>
</style>
