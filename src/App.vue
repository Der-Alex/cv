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
    class="relative container-grid grid transition-all print:transition-none max-w-5xl mx-auto dark:text-gray-50"
    :class="darkMode"
  >
    <div
      class="heading ga-content2 place-self-center sm:ga-content sm:place-self-start"
    >
      <h1 class="h1 sm:px-4 transition-all print:transition-none mt-4 sm:mt-0">
        Alexander Wegner
      </h1>
      <span class="block -mt-2 sm:px-4 sm:-mt-4"
        >Senior Frontend-Entwickler</span
      >
    </div>

    <Photo
      class="sm:mt-0 bg-[#e7f2f4] dark:bg-dark-primary/30 ga-content sm:ga-sidebar z-10"
    />
    <Competences class="my-8 sm:my-auto sm:ga-content p-4" />

    <Contact
      class="bg-[#e7f2f4] dark:bg-dark-primary/30 p-4 ga-content7 sm:ga-sidebar2 pb-12 pt-12 z-10"
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
      class="ga-content5 sm:ga-content3 p-4 pt-12 print:mt-12 mb-12 sm:mb-0"
      :timeline="educationExperience"
    />

    <About
      class="ga-content6 sm:ga-sidebar3 sm:place-self-end p-4 bg-[#e7f2f4] dark:bg-dark-primary/30 space-y-4 mt-12 pt-12 z-10"
    />
    <div class="sm:ga-sidebar4 bg-[#e7f2f4] dark:bg-dark-primary/30 z-10"></div>
    <DarkModeToggle
      class="print:hidden fixed cursor-pointer right-4 top-4 rounded-full w-12 h-12 flex items-center justify-center bg-cyan-900 text-dot dark:bg-dark-text dark:text-dark-primary-dark transition-all print:transition-none z-20"
      @click="toggleDarkMode"
    />

    <div
      class="print-extra print:absolute print:top-0 print:bottom-0 print:left-0 right-[432px] print:w-[432px] print:bg-red-500 print:z-0"
    ></div>
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
      'sidebar3 content2'
      'sidebar4 content3'
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
@media print {
  .container-grid {
    > .contact {
      place-self: stretch;
    }

    > .about {
      margin-top: -18rem;
      place-self: stretch;
      padding-bottom: 7rem;
    }
  }
}
.about {
  margin-top: 0;
  place-self: stretch;
}
</style>
