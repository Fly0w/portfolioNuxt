<template>
  <v-main>
    <Presentation class="bg-slate" />
    <Wave colorBg="bg-slate" />
    <Curriculum class="bg-tprimary" />
    <Wave colorBg="bg-tprimary" />
    <Values class="bg-slate" />
    <Projects />
    <Skills class="bg-slate" />
    <Downloads class="bg-slate" />
    <Footer />
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
import Footer from "~/components/HeaderFooter/Footer.vue";

useSeoMeta({
  title: "Florian Budniewski's Portfolio",
  ogTitle: "Florian Budniewski's Portfolio",
  description:
    "Welcome to Florian Budniewski's Frontend Developper Portfolio. Learn more about my education, my career, my skills, or my projects !",
  ogDescription:
    "Welcome to Florian Budniewski's Frontend Developper Portfolio. Learn more about my education, my career, my skills, or my projects !",
});
</script>

<style scoped></style>
