<template>
  <section id="curriculum">
    <p class="section-header font-tertiary">{{ title[lang] }}</p>
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
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item1.date[lang] }}
          </p>
        </template>
        <p
          v-if="$viewport.isLessThan('md')"
          class="title font-tertiary font-bold"
        >
          {{ curriculumData.item1.date[lang] }}
        </p>
        <div>
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item1.title[lang] }}
          </p>
          <p class="subtitle font-tertiary">
            {{ curriculumData.item1.subtitle[lang] }}
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
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item2.date[lang] }}
          </p>
        </template>
        <p
          v-if="$viewport.isLessThan('md')"
          class="title font-tertiary font-bold"
        >
          {{ curriculumData.item2.date[lang] }}
        </p>

        <div>
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item2.title[lang] }}
          </p>
          <p class="subtitle font-tertiary">
            {{ curriculumData.item2.subtitle[lang] }}
          </p>

          <p class="text-content font-tertiary">
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
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item3.date[lang] }}
          </p>
        </template>
        <p
          v-if="$viewport.isLessThan('md')"
          class="title font-tertiary font-bold"
        >
          {{ curriculumData.item3.date[lang] }}
        </p>

        <p class="title font-tertiary font-bold">
          {{ curriculumData.item3.title[lang] }}
        </p>
      </v-timeline-item>

      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="blue"
        icon="mdi-school-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item4.date[lang] }}
          </p>
        </template>
        <p
          v-if="$viewport.isLessThan('md')"
          class="title font-tertiary font-bold"
        >
          {{ curriculumData.item4.date[lang] }}
        </p>

        <div>
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item4.title[lang] }}
          </p>
          <p class="subtitle font-tertiary">
            {{ curriculumData.item4.subtitle[lang] }}
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
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item5.date[lang] }}
          </p>
        </template>
        <p
          v-if="$viewport.isLessThan('md')"
          class="title font-tertiary font-bold"
        >
          {{ curriculumData.item5.date[lang] }}
        </p>

        <p class="title font-tertiary font-bold">
          {{ curriculumData.item5.title[lang] }}
        </p>
      </v-timeline-item>
      <v-timeline-item
        :size="$viewport.isGreaterOrEquals('md') ? 'large' : 'small'"
        :min-height="$viewport.isGreaterOrEquals('md') ? '100px' : '70px'"
        dot-color="pink"
        icon="mdi-briefcase-outline"
      >
        <template v-if="$viewport.isGreaterOrEquals('md')" v-slot:opposite>
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item6.date[lang] }}
          </p>
        </template>
        <p
          v-if="$viewport.isLessThan('md')"
          class="title font-tertiary font-bold"
        >
          {{ curriculumData.item6.date[lang] }}
        </p>

        <div>
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item6.title[lang] }}
          </p>
          <p class="subtitle font-tertiary">
            {{ curriculumData.item6.subtitle[lang] }}
          </p>

          <p class="text-content font-tertiary">
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
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item7.date[lang] }}
          </p>
        </template>
        <p
          v-if="$viewport.isLessThan('md')"
          class="title font-tertiary font-bold"
        >
          {{ curriculumData.item7.date[lang] }}
        </p>

        <div>
          <p class="title font-tertiary font-bold">
            {{ curriculumData.item7.title[lang] }}
          </p>
          <p class="subtitle font-tertiary">
            {{ curriculumData.item7.subtitle[lang] }}
          </p>

          <p class="text-content font-tertiary">
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
        <p class="title font-tertiary font-bold">Now</p>
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
.subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0125em;
}

.title {
  font-size: 1.5rem;
  line-height: 1.333;
  letter-spacing: normal;
  padding-top: 5px;
}

.text-content {
  line-height: 1.3;
}

@media screen and (max-width: 768.98px) {
  .timeline {
    color: var(--neutral);
    padding-top: 1rem;
  }
  .subtitle {
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 0.0125em;
  }

  .title {
    font-size: 1.25rem;
    line-height: 1.333;
    letter-spacing: normal;
    padding-top: 7px;
  }

  .text-content {
    font-size: 1rem;
    line-height: 1.3rem;
  }
}

@media screen and (max-width: 640px) {
  .text-content {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}
</style>
