<script setup>
import ContactItem from '@/components/ContactItem.vue';

const contactData = [
  {
    icon: 'line-md:map-marker-alt-twotone',
    text: ['Dortmund'],
    type: 'text',
  },
  {
    icon: 'line-md:email-alt-twotone',
    text: ['alex.b.wegner@gmail.com'],
    type: 'email',
  },
  {
    icon: 'line-md:monitor-screenshot-twotone',
    text: ['https://der-alex.com', 'https://ruhrpott-ipsum.de'],
    type: 'url',
  },
  {
    icon: 'line-md:github-twotone',
    text: ['https://github.com/Der-Alex '],
    type: 'url',
  },
];
</script>
<template>
  <div class="contact">
    <h2 class="mb-6">Kontakt</h2>
    <template
      v-for="item in contactData"
      :key="item"
    >
      <ContactItem
        :icon="item.icon"
        :text="item.text"
        :type="item.type"
      />
    </template>
  </div>
</template>
