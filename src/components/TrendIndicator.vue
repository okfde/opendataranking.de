<template>
  <span
    class="text-base rounded-2xl p-0.5"
    :class="{
      'bg-green-50': trend > 0,
      'bg-red-50': trend < 0,
      'bg-yellow-50': trend === 0,
    }"
    :title="title">
    <i-mdi-arrow-top-right-thick
      v-if="trend > 0"
      class="text-green-600"
      role="presentation" />
    <i-mdi-arrow-bottom-right-thick
      v-else-if="trend < 0"
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
  trend: {
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
