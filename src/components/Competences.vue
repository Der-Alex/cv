<script setup>
import { ref } from 'vue';
import CompetenceItem from '@/components/CompetenceItem.vue';

const competences = ref([
  {
    name: 'HTML',
    icon: 'material-icon-theme:html',
    value: 1,
  },
  {
    name: 'CSS',
    icon: 'material-icon-theme:css',
    value: 1,
  },
  {
    name: 'JavaScript',
    icon: 'material-icon-theme:javascript',
    value: 1,
  },
  {
    name: 'TypeScript',
    icon: 'material-icon-theme:typescript',
    value: 2,
  },
  {
    name: 'Vue',
    icon: 'material-icon-theme:vue',
    value: 1,
  },
  {
    name: 'Nuxt',
    icon: 'material-icon-theme:nuxt',
    value: 1,
  },
  {
    name: 'NodeJs',
    icon: 'material-icon-theme:nodejs',
    value: 2,
  },
  {
    name: 'PHP',
    icon: 'material-icon-theme:php',
    value: 2,
  },
  {
    name: 'Docker',
    icon: 'material-icon-theme:docker',
    value: 2,
  },
  {
    name: 'Git',
    icon: 'material-icon-theme:git',
    value: 2,
  },
]);
</script>
<template>
  <div class="competences">
    <h2 class="mb-4">Fachkompetenzen</h2>
    <ul class="competence-list grid grid-cols-2 -ml-4 gap-y-2 sm:gap-y-4">
      <template
        v-for="competence in competences"
        :key="competence.name"
      >
        <CompetenceItem
          :name="competence.name"
          :icon="competence.icon"
          :value="competence.value"
        />
      </template>
    </ul>
  </div>
</template>
