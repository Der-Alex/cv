<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const typeText = computed(() => {
  if (props.type === 'email') {
    return 'mailto:';
  }
  if (props.type === 'phone') {
    return 'tel:';
  }
  return '';
});
</script>
<template>
  <div
    class="contact-item flex items-center justify-start gap-2 py-2 sm:gap-4 transition-all text-balance"
  >
    <Icon
      :icon="icon"
      class="w-6 h-6 sm:w-8 sm:h-8 text-cyan-900 dark:text-dark-text"
    />
    <div class="text text-sm sm:text-base">
      <template
        v-for="textPart in text"
        :key="textPart"
      >
        <p v-if="type === 'text'">
          {{ textPart }}
        </p>
        <p v-else>
          <a
            class="hover:underline hover:text-cyan-900 dark:hover:text-dark-text transition-all"
            :href="`${typeText}${textPart}`"
            >{{ textPart }}</a
          >
        </p>
      </template>
    </div>
  </div>
</template>
