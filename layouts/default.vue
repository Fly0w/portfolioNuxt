<template>
  <div class="test">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/HeaderFooter/Footer.vue";
import Header from "~/components/HeaderFooter/Header.vue";
</script>

<style scoped></style>
