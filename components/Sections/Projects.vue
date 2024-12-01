<template>
  <section
    id="projects"
    :style="{ backgroundImage: `url('/gif/${selectedProject}.gif')` }"
  >
    <h3 class="section-header font-tertiary">{{ title[lang] }}</h3>
    <main>
      <div class="project-card">
        <h3>{{ listProjects[selectedProject].title[lang] }}</h3>
        <h4>{{ listProjects[selectedProject].subtitle[lang] }}</h4>
        <p>{{ listProjects[selectedProject].description[lang] }}</p>
        <ul ref="listTools">
          <li
            class="tool-list"
            v-for="tool in listProjects[selectedProject].tools"
            :key="tool"
            :style="`anchor-name: --projects-${tool}`"
          >
            <NuxtImg
              class="image-project"
              :src="iconsData()[tool]?.icon"
              :alt="iconsData()[tool]?.iconText"
              draggable="false"
              @mouseenter="isHover = tool"
              @mouseleave="isHover = ''"
            />
          </li>
        </ul>
        <p
          v-if="isHover !== ''"
          class="popover"
          :style="`position-anchor: --projects-${isHover}`"
        >
          {{ iconsData()[isHover].iconText }}
        </p>
      </div>
      <div class="buttons">
        <NuxtLink
          v-if="listProjects[selectedProject].githubLink !== ''"
          :to="listProjects[selectedProject].githubLink"
          class="redirect"
          target="_blank"
          >{{ textButtons.githubButton[lang] }}</NuxtLink
        >
        <NuxtLink
          v-if="listProjects[selectedProject].pageLink !== ''"
          :to="listProjects[selectedProject].pageLink"
          class="redirect"
          target="_blank"
          >{{ textButtons.visitButton[lang] }}</NuxtLink
        >
      </div>
    </main>
    <ul
      class="list-projects"
      @mousedown="onDragStart"
      @mousemove="onDragMove"
      @mouseup="onDragEnd"
      @mouseleave="onDragEnd"
      @touchstart="onDragStart"
      @touchmove="onDragMove"
      @touchend="onDragEnd"
    >
      <li
        v-for="(project, title) in listProjects"
        :key="title"
        @click="selectedProject = title"
      >
        <NuxtImg
          class="image-project"
          :src="`/img/${title}.jpg`"
          :alt="title"
          draggable="false"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
const listProjects = useProjectsData();
const selectedProject = ref("KidsJapan");
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const isHover = ref("");

const textButtons = {
  githubButton: {
    fr: "GitHub",
    en: "GitHub",
    ja: "GitHub",
  },
  visitButton: {
    fr: "Visiter",
    en: "Visit",
    ja: "サイトへ",
  },
};

const title = {
  fr: "Projets",
  en: "Projects",
  ja: "プロジェクト",
};
const listTools = ref(null);
watch(
  selectedProject,
  () => {
    if (listTools.value) {
      listTools.value.scrollLeft = 0;
    }
  },
  { immediate: true }
);

const lang = useState("lang");

function onDragStart(e) {
  isDragging.value = true;

  // Récupérer la position de départ
  const pageX = e instanceof TouchEvent ? e.touches[0].pageX : e.pageX;

  // Vérifier que e.currentTarget est bien défini et de type HTMLElement
  const target = e.currentTarget;
  if (!target) return;

  startX.value = pageX - target.scrollLeft;

  // Mémoriser la position initiale du scroll
  scrollLeft.value = target.scrollLeft;
}

function onDragMove(e) {
  if (!isDragging.value) return;

  // Bloquer les comportements par défaut (ex. scroll classique sur mobile)
  e.preventDefault();

  // Calculer la nouvelle position de scroll
  const pageX = e instanceof TouchEvent ? e.touches[0].pageX : e.pageX;
  const deltaX = pageX - startX.value;

  const container = e.currentTarget;
  container.scrollLeft = scrollLeft.value - deltaX;
}

function onDragEnd() {
  isDragging.value = false;
}
</script>

<style scoped>
#projects {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  height: 95vh;
  background-position: center;
  background-size: cover;
  padding: 0;
}
#projects::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Filtre noir semi-transparent */
  z-index: 1; /* Place la superposition au-dessus du fond */
}

.section-header,
.list-projects,
main {
  position: relative;
  z-index: 2; /* Assure que le contenu reste visible au-dessus du pseudo-élément */
}

.section-header {
  color: var(--neutral);
  padding: 0 5rem;
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.356));
  text-align: end;
}

main {
  flex: 1;

  min-width: 300px;
  display: flex;
  flex-direction: column;
  max-height: 80%; /* Limite la hauteur de la project-card à 80% de main */
  overflow: hidden; /* Cache le débordement éventuel */

  margin-left: 40px;
  font-family: "Questrial", "sans-serif";

  position: relative;

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    bottom: 10%;
    right: 10%;

    .redirect {
      padding: 1rem;
      background-color: var(--primary);
      color: white;
      border: solid 2px white;
      border-radius: 15px;
      text-align: center;
      font-size: clamp(15px, 1.5vw, 30px);
    }
  }

  .project-card {
    display: flex;
    flex-direction: column;
    gap: 15px;

    word-wrap: break-word; /* Permet de couper les mots trop longs */
    overflow-wrap: break-word; /* Support étendu */
    hyphens: auto; /* Ajoute un tiret automatique lors de la coupure */

    background: rgba(255, 255, 255, 0.604);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 30px;
    padding: 2rem;
    width: 30vw;
    min-width: 300px;
    max-width: 500px;
    max-height: 90%;

    h3 {
      text-align: center;
      font-size: clamp(40px, 3.5vw, 70px);
      font-weight: bold;
      flex-shrink: 0;
    }

    h4 {
      font-size: clamp(22px, 2.5vw, 30px);
      flex-shrink: 0;
    }

    p {
      font-size: 14px;
      font-size: clamp(12px, 1.5vw, 16px);
      flex-shrink: 1;
      overflow-y: scroll;
      max-height: calc(
        100% - 120px
      ); /* Ajuste selon les autres éléments (titres, padding) */

      &::-webkit-scrollbar-thumb {
        background-color: gray;
        border: none;
      }

      &::-webkit-scrollbar {
        width: 3px;
      }
    }
    .popover {
      position: absolute;
      bottom: anchor(top);
      left: anchor(left);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 0.5rem;
      border-radius: 5px;
      white-space: nowrap;
      z-index: 10;
    }

    ul {
      display: flex;
      gap: 40px;
      padding: 1rem 1rem 5px 1rem;
      overflow-x: scroll;
      width: 100%;
      flex-shrink: 0;

      li {
        min-width: 50px;
        display: grid;
        place-items: center;
      }
      img {
        height: 70px;
      }

      &::-webkit-scrollbar {
        height: 6px;
      }
    }
  }
}

.list-projects {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.486));
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  padding: 0.75rem 2rem;
  overflow-y: scroll;
  cursor: grab;

  &:active {
    cursor: grabbing; /* Curseur lors du drag */
  }

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }

  li {
    flex-shrink: 0;
    box-shadow: 0 2px 7px 0 rgba(31, 38, 135, 0.37);
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    .image-project {
      height: clamp(110px, 15vh, 180px);
      aspect-ratio: 1;
    }
  }
}
</style>
