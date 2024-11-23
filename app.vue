<template>
  <v-app id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
const lang = useState<string>("lang", () => "en");
</script>

<style scoped></style>
