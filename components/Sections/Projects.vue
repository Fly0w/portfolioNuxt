<template>
  <section
    id="projects"
    :style="{ backgroundImage: `url('/gif/${selectedProject}.gif')` }"
  >
    <h3 class="section-header font-tertiary">Projects</h3>
    <main>
      <div class="project-card">
        <h3>{{ listProjects[selectedProject].title }}</h3>
        <h4>{{ listProjects[selectedProject].subtitle }}</h4>
        <p>{{ listProjects[selectedProject].description }}</p>
        <ul ref="listTools">
          <li
            class="tool-list"
            v-for="tool in listProjects[selectedProject].tools"
            :key="tool"
            :style="`anchor-name: --${tool}`"
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
          :style="`position-anchor: --${isHover}`"
        >
          {{ iconsData()[isHover].iconText }}
        </p>
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

<script lang="ts" setup>
const selectedProject = ref<keyof typeof listProjects.value>("KidsJapan");
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const isHover = ref("");

const listTools = ref<HTMLElement | any>(null);
watch(
  selectedProject,
  () => {
    if (listTools.value) {
      listTools.value.scrollLeft = 0;
    }
  },
  { immediate: true }
);

const lang = useState<string>("lang");

console.log(lang.value);

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

const listProjects = computed(() => {
  // TODO need to add translation
  return {
    KidsJapan: {
      title: "KidsJapan",
      subtitle: "C2C educational platform providing lessons for kids",
      description:
        "KidsJapan is a website where anyone can register as a teacher and post private lessons for children under 14 years old. The web application includes many useful features such as real-time chat, an interactive map to find lessons in the desired area, real-time video streaming for online lessons, and more.",
      tools: ["html", "css", "vueJS", "nuxt", "vuetify", "bootstrap", "seo"],
    },
    BrandJapan: {
      title: "BrandJapan",
      subtitle: "Second-hand high-brand listing platform",
      description:
        "BrandJapan is a platform where users can buy and sell second-hand high-end apparel items such as bags, clothes, and accessories. As a member of the development team, I worked on the 'My Page' section of the website, where customers can apply to list their items, which are then assessed by an administrator.",
      tools: ["html", "css", "javascript", "bootstrap"],
    },
    ShareHouseManager: {
      title: "Share House Manager",
      subtitle: "Sharehouse life organizer",
      description:
        "This app was created to help tenants of a sharehouse track their duties, such as buying common groceries, paying the monthly community fee, following the garbage duty rotation, or monitoring shared bicycle usage. Developed with ViteJS/VueJS, the app provides an excellent visual interface without compromising performance. The use of a next-generation database like Firebase ensures reliable data traffic and ease of maintenance. It was developed for my former sharehouse and is still in use today.",
      tools: ["html", "css", "vueJS", "firebase", "tailwindCSS", "vercel"],
    },
    Promptopia: {
      title: "Promptopia",
      subtitle: "An AI prompt sharing social network",
      description:
        "Share your best ChatGPT prompts with the Promptopia community! Sign in using your Google account, then post and edit your best AI prompts with other users. This app is built with NextJS to ensure fast page and image load times, as well as easy website routing.",
      tools: [
        "html",
        "css",
        "reactJS",
        "nextJS",
        "mongoDB",
        "tailwindCSS",
        "vercel",
      ],
    },
    OmoteBike: {
      title: "OmoteBike",
      subtitle: "Keep track of shared bicycle status",
      description:
        "A NextJS web app to manage and keep track of a share house's shared bike. Easy to use, it allows users to know exactly when the bike is in use or unavailable.",
      tools: [
        "html",
        "css",
        "reactJS",
        "nextJS",
        "mongoDB",
        "tailwindCSS",
        "vercel",
      ],
    },
    Robofriends: {
      title: "Robofriends",
      subtitle: "Keep track of your robot friends",
      description:
        "A basic ReactJS app I created following a tutorial in the Zero To Mastery program. The app generates individual cards for each customer/robot with their personal information. The search bar updates dynamically as the user types.",
      tools: ["html", "css", "reactJS"],
    },
    FacetoFace: {
      title: "Face to Face",
      subtitle: "Detect faces within images",
      description:
        "A ReactJS app that allows you to detect faces in an image by providing a URL. You must first register to create your profile, and then scan as many face images as you like.",
      tools: ["html", "css", "reactJS", "postgreSQL"],
    },
  };
});
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

  margin-left: 40px;
  margin-bottom: 50px;
  font-family: "Questrial", "sans-serif";

  .project-card {
    height: fit-content;
    background: rgba(255, 255, 255, 0.604);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 30px;
    padding: 2rem;
    width: 100%;
    /* position: relative;  */

    h3 {
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    h4 {
      font-size: 22px;
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      margin-bottom: 15px;
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
      gap: 20px;
      padding: 1rem 1rem 5px 1rem;
      overflow-x: scroll;
      width: 100%;
      height: 70px;

      li {
        height: 100%;
        min-width: 50px;
        display: grid;
        place-items: center;
      }
      img {
        height: 100%;
      }

      &::-webkit-scrollbar {
        height: 6px;
      }
    }
  }
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
      width: 100%;
      height: 100%;
      aspect-ratio: 1;
    }
  }
}
</style>
