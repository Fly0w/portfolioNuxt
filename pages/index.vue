<template>
  <v-main>
    <Presentation class="bg-slate-50" />
    <Wave colorBg="bg-slate-50" />
    <Curriculum class="bg-tprimary" />
    <Wave colorBg="bg-tprimary" />
    <Values class="bg-slate-50" />
    <!-- <Wave colorBg="bg-slate-50" /> -->
    <Projects />
    <!-- <Wave colorBg="bg-slate-50" /> -->
    <Skills class="bg-slate-50" />
    <Wave colorBg="bg-slate-50" />
    <Contacts class="bg-tprimary" />
    <!-- <Wave colorBg="bg-tprimary" /> -->
    <Downloads class="bg-slate-50" />
  </v-main>
</template>

<script setup lang="ts">
import Presentation from "~/components/Sections/Presentation.vue";
import Curriculum from "~/components/Sections/Curriculum.vue";
import Values from "~/components/Sections/Values.vue";
import Projects from "~/components/Sections/Projects.vue";
import Skills from "~/components/Sections/Skills.vue";
import Contacts from "~/components/Sections/Contacts.vue";
import Downloads from "~/components/Sections/Downloads.vue";
import Wave from "~/components/Utilities/Wave.vue";
</script>

<style scoped></style>
