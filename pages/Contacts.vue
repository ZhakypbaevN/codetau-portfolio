<template>
  <main>
    <HeaderLanding />

    <div class="landing-wrapper">
      <div class="landing-notesBG">
        <h2 class="contactsPage-title landing-title solo center">{{ $t('contacts.title') }}</h2>
      </div>
    </div>

    <ContactFeedback />

    <CompaniesSlider />

    <JobApplications />

    <ACallToAction theme="light" />
    
    <FooterLanding theme="light" />
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
</style>
