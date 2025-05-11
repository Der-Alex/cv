<script setup>
import { toRefs } from 'vue';
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const { date, company, position, tasks } = toRefs(props.item);
</script>
<template>
  <div class="timeline-item relative flex">
    <div
      class="dot dark:bg-dot-dark rounded-full relative -translate-x-[16px] sm:-translate-x-[32px] min-w-3 w-3 min-h-3 h-3 bg-dot border-2 border-cyan-900 dark:border-dark-text"
    ></div>
    <div class="timeline-content -mt-4 mb-12">
      <span class="text-sm">{{ date }}</span>
      <p
        class="text-base font-semibold text-cyan-900 dark:text-white -mt-1 mb-2"
      >
        {{ company }}
      </p>
      <h3 class="-mt-1 mb-2 font-black dark:text-dark-text">{{ position }}</h3>
      <ul class="space-y-2">
        <li
          v-for="({ text, tools }, index) in tasks"
          :key="index"
          class="list-disc ml-1"
        >
          <p class="text-sm -ml-1">
            {{ text }}
          </p>
          <span
            v-if="tools.length > 0"
            class="text-xs font-medium -ml-1"
            >{{ tools }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
