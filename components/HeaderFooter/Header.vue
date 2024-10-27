<template>
  <header
    class="flex flex-row justify-center fixed top-0 w-full z-10 font-primary"
  >
    <nav class="px-5 py-4">
      <ul
        class="flex flex-row justify-center gap-12 items-center text-lg text-ttextPrimary"
      >
        <li>
          <NuxtLink class="" to="#landing-section">Presentation</NuxtLink>
        </li>
        <li><NuxtLink class="" to="#curriculum">Curriculum</NuxtLink></li>
        <li><NuxtLink class="" to="#values">Values</NuxtLink></li>
        <li><NuxtLink class="" to="#projects">Projects</NuxtLink></li>
        <li><NuxtLink class="" to="#skills">Skills</NuxtLink></li>
        <li><NuxtLink class="" to="#contacts">Contact</NuxtLink></li>
        <li><NuxtLink class="" to="#downloads">Downloads</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  filter: contrast(2) drop-shadow(1px 1px 3px rgb(255, 255, 255));
}

header {
  background: linear-gradient(to top, transparent, rgba(160, 160, 160, 0.322));
}
</style>
