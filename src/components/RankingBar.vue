<template>
  <div class="flex items-center">
    <div
      ref="container"
      class="bg-gray-300 w-full"
      :class="{ 'h-5': !large, 'h-7': large }">
      <div
        class="h-full transition-all ease-linear duration-500"
        :style="{ backgroundColor: color, width: `${progress}%` }" />
    </div>

    <span class="h-full text-xs w-[7ch] text-right">{{ progress }} %</span>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#ccc',
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
