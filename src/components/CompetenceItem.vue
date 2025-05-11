<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const valueText = computed(() => {
  if (props.value === 1) {
    return 'Sehr gute Kenntnisse';
  }
  return 'Gute Kenntnisse';
});
</script>

<template>
  <li class="competence-item grid grid-cols-[min-content_1fr] gap-2">
    <div class="competence-icon flex flex-col items-center w-16">
      <Icon
        :icon="icon"
        class="w-6 h-6 sm:w-8 sm:h-8 transition-all"
      />
      <span class="text-xs">{{ name }}</span>
    </div>
    <strong
      class="competence-value font-medium text-xs sm:text-base place-content-center"
      >{{ valueText }}</strong
    >
  </li>
</template>
