<template>
  <div>
    <v-layout>
      <Header />
      <slot />
    </v-layout>
  </div>
</template>

<script setup>
import Header from "~/components/HeaderFooter/Header.vue";
</script>

<style scoped></style>
