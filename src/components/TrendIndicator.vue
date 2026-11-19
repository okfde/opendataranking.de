<template>
  <span
    class="text-base rounded-2xl p-0.5"
    :class="{
      'bg-green-50': current > previous,
      'bg-red-50': current < previous,
      'bg-yellow-50': current === previous,
    }"
    :title="title">
    <i-mdi-arrow-top-right-thick
      v-if="current > previous"
      class="text-green-600"
      role="presentation" />
    <i-mdi-arrow-bottom-right-thick
      v-else-if="current < previous"
      class="text-red-600"
      role="presentation" />
    <i-mdi-arrow-right-thick
      v-else
      class="text-yellow-600"
      role="presentation" />
    <span v-if="label" class="sr-only">{{ label }}</span>
  </span>
</template>

<script setup>
defineProps({
  current: {
    type: Number,
    required: true,
  },
  previous: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    default: undefined,
  },
});
</script>
