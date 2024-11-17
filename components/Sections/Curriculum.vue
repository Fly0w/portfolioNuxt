<template>
  <section id="curriculum">
    <h3 class="section-header font-tertiary">Curriculum</h3>
    <v-timeline
      :align="$viewport.isGreaterOrEquals('md') ? 'start' : 'start'"
      class="timeline"
      side="end"
      truncate-line="both"
      size="large"
    >
      <v-timeline-item
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="blue"
        icon="mdi-school-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">Sept 2014</h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          Sept 2014
        </h5>
        <div>
          <h5 class="font-tertiary font-bold">Engineering school student</h5>
          <h6 class="font-tertiary">Polytech'Lille Engineering School</h6>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="pink"
        icon="mdi-briefcase-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">September 2018</h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          Sept 2018
        </h5>

        <div>
          <h5 class="font-tertiary font-bold">
            Research and Development Engineer
          </h5>
          <h6 class="font-tertiary">SEFAR Inc.</h6>

          <p class="md:text-lg sm:text-sm font-tertiary">
            In the industrial filtering cloth manufacturing industry, I was in
            charge of the development, test, and implementation of new products
            and processes to help customers getting better results and improving
            their filtering processes efficiency.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="green"
        icon="mdi-file-certificate-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">July 2019</h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          Jul 2019
        </h5>

        <h5 class="font-tertiary font-bold">
          Materials Science Engineering Master's Degree
        </h5>
      </v-timeline-item>

      <v-timeline-item
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="blue"
        icon="mdi-school-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">April 2022</h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          Apr 2022
        </h5>

        <div>
          <h5 class="font-tertiary font-bold">
            Japanese language school student
          </h5>
          <h6 class="font-tertiary">Tokyo Central Japanese Language School</h6>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="green"
        icon="mdi-file-certificate-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">July 2023</h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          Jul 2023
        </h5>

        <h5>JLPT N2</h5>
      </v-timeline-item>
      <v-timeline-item
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="pink"
        icon="mdi-briefcase-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">October 2023</h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          Oct 2023
        </h5>

        <div>
          <h5 class="font-tertiary font-bold">Web Engineer</h5>
          <h6 v-if="route.query.lang === 'jp'" class="font-tertiary">
            株式会社イーグロース
          </h6>
          <h6 v-else class="font-tertiary">E-growth Inc.</h6>

          <p class="md:text-lg sm:text-sm font-tertiary">
            As a web engineer, I was in charge of testing the existing features
            of the projects I was engaged in, as well as implementing new core
            elements by using technologies such as PHP and Laravel, but also
            MySQL. By using both English and Japanese languages, I was able to
            facilitate the link between the people working from outside Japan,
            and the Japanese team.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="pink"
        icon="mdi-briefcase-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">April 2024</h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          Apr 2024
        </h5>

        <div>
          <h5 class="font-tertiary font-bold">Frontend Engineer</h5>
          <h6 v-if="route.query.lang === 'jp'" class="font-tertiary">
            株式会社INVEST
          </h6>
          <h6 v-else class="font-tertiary">INVEST Inc.</h6>

          <p class="md:text-lg sm:text-sm font-tertiary">
            As a frontend engineer, I worked on several projects including a
            time tracking system for employees, a second-hand high brand
            reselling platform, or a CtoC education related service web
            application. Here, I was in charge of the frontend side of each
            projects, defining and implementing backend APIs, turning Figma
            templates into usable web applications by taking advantage of the
            latest frontend technologies such as VueJS and NuxtJS, or UI
            component libraries such as Vuetify or Bootstrap.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="deep-orange"
        icon="mdi-map-marker-check-outline"
      >
        <h5 class="font-tertiary font-bold">Now</h5>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

console.log(route.query.lang);
</script>

<style scoped>
.timeline {
  color: var(--neutral);
  padding-top: 2rem;
}

.section-header {
  color: var(--neutral);
}

h6 {
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0125em;
}

h5 {
  font-size: 1.5rem;
  line-height: 1.333;
  letter-spacing: normal;
  padding-top: 5px;
}

p {
  line-height: 1.3;
}

@media screen and (max-width: 768.98px) {
  h5 {
    padding-top: 7px;
  }
}
</style>
