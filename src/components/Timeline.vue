<script setup>
import { Icon } from '@iconify/vue';
import TimelineItem from './TimelineItem.vue';

defineProps({
  icon: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  timeline: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="timeline py-4">
    <h2 class="flex flex-nowrap gap-2 mb-2 sm:-ml-1">
      <Icon
        :icon="icon"
        class="min-w-6 min-h-6 w-6 h-6 sm:min-w-8 sm:min-h-8 sm:w-8 sm:h-8"
      />
      <span class="line-clamp-1">{{ headline }}</span>
    </h2>
    <div
      class="grid grid-cols-[0.875rem_1fr] sm:grid-cols[1.125rem_1fr] gap-2 sm:gap-6"
    >
      <div class="line border-r-4 border-cyan-900 dark:border-dark-text"></div>
      <div class="content pt-8">
        <template
          v-for="(item, index) in timeline"
          :key="index"
        >
          <TimelineItem :item="item" />
        </template>
      </div>
    </div>
  </div>
</template>
