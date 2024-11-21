<template>
  <section
    id="projects"
    :style="{ backgroundImage: `url('/gif/${selectedProject}.gif')` }"
  >
    <h3 class="section-header font-tertiary">Projects</h3>
    <main>
      <h3>Title</h3>
      <h4>Subtitle</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        blanditiis hic iste modi facere animi perferendis! Numquam a adipisci
        rem explicabo nam cum, quasi eius laboriosam maiores harum beatae quis!
      </p>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
      </ul>
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
        v-for="project in listProjects"
        :key="project"
        @click="selectedProject = project"
      >
        <NuxtImg
          class="image-project"
          :src="`/img/${project}.jpg`"
          :alt="project"
          draggable="false"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const selectedProject = ref("BrandJapan");
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

function onDragStart(e: MouseEvent | TouchEvent) {
  isDragging.value = true;

  // Récupérer la position de départ
  const pageX = e instanceof TouchEvent ? e.touches[0].pageX : e.pageX;

  // Vérifier que e.currentTarget est bien défini et de type HTMLElement
  const target = e.currentTarget as HTMLElement | null;
  if (!target) return;

  startX.value = pageX - target.scrollLeft;

  // Mémoriser la position initiale du scroll
  scrollLeft.value = target.scrollLeft;
}

function onDragMove(e: MouseEvent | TouchEvent) {
  if (!isDragging.value) return;

  // Bloquer les comportements par défaut (ex. scroll classique sur mobile)
  e.preventDefault();

  // Calculer la nouvelle position de scroll
  const pageX = e instanceof TouchEvent ? e.touches[0].pageX : e.pageX;
  const deltaX = pageX - startX.value;

  const container = e.currentTarget as HTMLElement;
  container.scrollLeft = scrollLeft.value - deltaX;
}

function onDragEnd() {
  isDragging.value = false;
}

const listProjects = [
  "BrandJapan",
  "KidsJapan",
  "ShareHouseManager",
  "Promptopia",
  "OmoteBike",
  "Robofriends",
  "FacetoFace",
];
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
  width: 350px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.404);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 30px;
  margin-left: 40px;
  margin-bottom: 50px;
  padding: 2rem;
}

.list-projects {
  /* margin-top: auto; */
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 130px;
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
    width: 100px;
    aspect-ratio: 1;
    flex-shrink: 0; /* Empêche les éléments de rétrécir */
    box-shadow: 0 2px 7px 0 rgba(31, 38, 135, 0.37);
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    .image-project {
      width: 100%; /* S'adapte à la largeur du parent */
      height: 100%; /* Remplit le conteneur */
    }
  }
}
</style>
