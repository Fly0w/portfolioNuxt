<template>
  <section id="curriculum">
    <h3 class="section-header font-tertiary">{{ title[lang] }}</h3>
    <v-timeline
      :align="$viewport.isGreaterOrEquals('md') ? 'start' : 'start'"
      class="timeline"
      side="end"
      truncate-line="both"
      size="large"
    >
      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="blue"
        icon="mdi-school-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item1.date[lang] }}
          </h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          {{ curriculumData.item1.date[lang] }}
        </h5>
        <div>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item1.title[lang] }}
          </h5>
          <h6 class="font-tertiary">
            {{ curriculumData.item1.subtitle[lang] }}
          </h6>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="pink"
        icon="mdi-briefcase-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item2.date[lang] }}
          </h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          {{ curriculumData.item2.date[lang] }}
        </h5>

        <div>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item2.title[lang] }}
          </h5>
          <h6 class="font-tertiary">
            {{ curriculumData.item2.subtitle[lang] }}
          </h6>

          <p class="md:text-lg sm:text-sm font-tertiary">
            {{ curriculumData.item2.description[lang] }}
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="green"
        icon="mdi-file-certificate-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item3.date[lang] }}
          </h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          {{ curriculumData.item3.date[lang] }}
        </h5>

        <h5 class="font-tertiary font-bold">
          {{ curriculumData.item3.title[lang] }}
        </h5>
      </v-timeline-item>

      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="blue"
        icon="mdi-school-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item4.date[lang] }}
          </h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          {{ curriculumData.item4.date[lang] }}
        </h5>

        <div>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item4.title[lang] }}
          </h5>
          <h6 class="font-tertiary">
            {{ curriculumData.item4.subtitle[lang] }}
          </h6>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="green"
        icon="mdi-file-certificate-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item5.date[lang] }}
          </h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          {{ curriculumData.item5.date[lang] }}
        </h5>

        <h5>{{ curriculumData.item5.title[lang] }}</h5>
      </v-timeline-item>
      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="pink"
        icon="mdi-briefcase-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item6.date[lang] }}
          </h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          {{ curriculumData.item6.date[lang] }}
        </h5>

        <div>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item6.title[lang] }}
          </h5>
          <h6 class="font-tertiary">
            {{ curriculumData.item6.subtitle[lang] }}
          </h6>

          <p class="md:text-lg sm:text-sm font-tertiary">
            {{ curriculumData.item6.description[lang] }}
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="pink"
        icon="mdi-briefcase-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item7.date[lang] }}
          </h5>
        </template>
        <h5 v-if="$viewport.isLessThan('md')" class="font-tertiary font-bold">
          {{ curriculumData.item7.date[lang] }}
        </h5>

        <div>
          <h5 class="font-tertiary font-bold">
            {{ curriculumData.item7.title[lang] }}
          </h5>
          <h6 class="font-tertiary">
            {{ curriculumData.item7.subtitle[lang] }}
          </h6>

          <p class="md:text-lg sm:text-sm font-tertiary">
            {{ curriculumData.item7.description[lang] }}
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="deep-orange"
        icon="mdi-map-marker-check-outline"
      >
        <h5 class="font-tertiary font-bold">Now</h5>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<script setup>
const lang = useState("lang");

const curriculumData = useCurriculumData();

const title = {
  fr: "Historique professionnel",
  en: "Curriculum",
  ja: "カリキュラム",
};
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
  .timeline {
    color: var(--neutral);
    padding-top: 1rem;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 0.0125em;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.333;
    letter-spacing: normal;
    padding-top: 7px;
  }

  p {
    line-height: 1.3;
  }
}
</style>
