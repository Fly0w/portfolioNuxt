<template>
  <div class="test">
    <v-layout>
      <Header />
      <slot />
      <Footer
    /></v-layout>
  </div>
</template>

<script setup>
import Footer from "~/components/HeaderFooter/Footer.vue";
import Header from "~/components/HeaderFooter/Header.vue";
</script>

<style scoped></style>
