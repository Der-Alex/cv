<script setup>
import { ref } from 'vue';
import { useExperience } from '@/composables/useExperience';
import Photo from '@/components/Photo.vue';
import Contact from '@/components/Contact.vue';
import Competences from '@/components/Competences.vue';
import Timeline from '@/components/Timeline.vue';
import About from '@/components/About.vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

const { educationExperience, workExperience } = useExperience();
const darkMode = ref('');
const toggleDarkMode = () => {
  darkMode.value.includes('dark')
    ? (darkMode.value = '')
    : (darkMode.value = 'dark');
};
</script>

<template>
  <div
    class="container-grid grid transition-all max-w-5xl mx-auto dark:text-gray-50"
    :class="darkMode"
  >
    <div
      class="ga-content2 place-self-center sm:ga-content sm:place-self-start"
    >
      <h1 class="h1 sm:px-4 transition-all mt-4 sm:mt-0">Alexander Wegner</h1>
      <span class="block -mt-2 sm:px-4 sm:-mt-4"
        >Senior Frontend-Entwickler</span
      >
    </div>

    <Photo
      class="sm:mt-0 bg-cyan-100/50 dark:bg-dark-primary/30 ga-content sm:ga-sidebar"
    />
    <Competences class="my-8 sm:my-auto sm:ga-content p-4" />

    <Contact
      class="bg-cyan-100/50 dark:bg-dark-primary/30 p-4 ga-content7 sm:ga-sidebar2 pb-12 sm:pt-12"
    />
    <Timeline
      icon="line-md:briefcase-twotone"
      headline="Berufserfahrung"
      class="ga-content4 sm:ga-content2 p-4 sm:pt-12"
      :timeline="workExperience"
    />
    <Timeline
      icon="ic:twotone-school"
      headline="Ausbildung / Praktikum / Fortbildung"
      class="ga-content5 sm:ga-content3 p-4 pt-12"
      :timeline="educationExperience"
    />

    <About
      class="ga-content6 sm:ga-sidebar2 sm:place-self-end p-4 bg-cyan-100/50 dark:bg-dark-primary/30 sm:bg-transparent dark:sm:bg-transparent space-y-4 mt-12 pt-12"
    />
    <div class="sm:ga-sidebar3 bg-cyan-100/50 dark:bg-dark-primary/30"></div>
    <DarkModeToggle
      class="fixed cursor-pointer right-4 top-4 rounded-full w-12 h-12 flex items-center justify-center bg-cyan-900 text-dot dark:bg-dark-text dark:text-dark-primary-dark transition-all"
      @click="toggleDarkMode"
    />
  </div>
</template>

<style>
.container-grid {
  grid-template-areas:
    'content'
    'content2'
    'content3'
    'content4'
    'content5'
    'content6'
    'content7';

  @media (width >= 40rem) {
    grid-template-areas:
      'sidebar content'
      'sidebar2 content2'
      'sidebar3 content3'
      'sidebar4 content4';
    grid-template-columns: minmax(320px, 432px) minmax(320px, 592px);
    gap: 0rem;
  }

  @media (width >= 60rem) {
    gap: 0 2rem;
  }
}

@media (width >= 46rem) {
  .h1 {
    margin-top: 2rem;
  }
}
</style>
