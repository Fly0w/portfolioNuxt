<template>
  <div :class="colorBg" class="wave"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  colorBg: {
    type: String,
  },
});
</script>

<style scoped>
.wave {
  position: absolute;
  width: 4000px;
  height: 100px;
  --svg: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 150"><path d="M0,75 C300,100 600,50 900,75 L900,00 L0,0 Z" style="stroke: none; fill: black"></path></svg>');
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  animation: wave 20s ease-in-out infinite;
}

@keyframes wave {
  0%,
  50%,
  100% {
    transform: translateX(0);
  }
  25%,
  75% {
    transform: translateX(-5%);
  }
}
</style>
