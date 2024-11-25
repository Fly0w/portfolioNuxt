<template>
  <section id="skills">
    <h3 class="section-header font-tertiary">Skills</h3>
    <div class="skill-container">
      <div class="skill-display">
        <NuxtImg
          class="image-project"
          :src="iconsData()[selectedSkill]?.icon"
          :alt="iconsData()[selectedSkill]?.iconText"
          draggable="false"
        />
        <div class="skill-explanation">
          <h3>{{ iconsData()[selectedSkill]?.iconText }}</h3>
          <h4>{{ iconsData()[selectedSkill]?.subtitle[lang] }}</h4>
          <p>{{ iconsData()[selectedSkill]?.description[lang] }}</p>
        </div>
      </div>
      <div class="skill-list-card">
        <div class="skill-list">
          <h4>Used before</h4>
          <ul>
            <li
              v-for="skill in listSkills.used"
              :key="skill"
              @click="selectedSkill = skill"
            >
              <NuxtImg
                class="image-project"
                :src="iconsData()[skill]?.icon"
                :alt="iconsData()[skill]?.iconText"
                draggable="false"
                @mouseenter="
                  hoveredCategory = `used`;
                  hoveredSkill = skill;
                "
                @mouseleave="
                  hoveredCategory = '';
                  hoveredSkill = '';
                "
                :style="`anchor-name: --skills-used-${skill}`"
              />
            </li>
          </ul>
        </div>
        <div class="skill-list">
          <h4>Learning</h4>
          <ul>
            <li
              v-for="skill in listSkills.learning"
              :key="skill"
              @click="selectedSkill = skill"
            >
              <NuxtImg
                class="image-project"
                :src="iconsData()[skill]?.icon"
                :alt="iconsData()[skill]?.iconText"
                draggable="false"
                @mouseenter="
                  hoveredCategory = `learning`;
                  hoveredSkill = skill;
                "
                @mouseleave="
                  hoveredCategory = '';
                  hoveredSkill = '';
                "
                :style="`anchor-name: --skills-learning-${skill}`"
              />
            </li>
          </ul>
        </div>
        <div class="skill-list">
          <h4>Interested in</h4>
          <ul>
            <li
              v-for="skill in listSkills.interested"
              :key="skill"
              @click="selectedSkill = skill"
            >
              <NuxtImg
                class="image-project"
                :src="iconsData()[skill]?.icon"
                :alt="iconsData()[skill]?.iconText"
                draggable="false"
                @mouseenter="
                  hoveredCategory = `interested`;
                  hoveredSkill = skill;
                "
                @mouseleave="
                  hoveredCategory = '';
                  hoveredSkill = '';
                "
                :style="`anchor-name: --skills-interested-${skill}`"
              />
            </li>
          </ul>
        </div>
        <p
          v-if="hoveredCategory !== ''"
          class="popover"
          :style="`position-anchor: --skills-${hoveredCategory}-${hoveredSkill}`"
        >
          {{ iconsData()[hoveredSkill].iconText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const lang = useState<string>("lang");
const hoveredCategory = ref("");
const hoveredSkill = ref("");
const selectedSkill = ref("nuxt");

const listSkills = {
  used: [
    "nuxt",
    "vueJS",
    "vuetify",
    "nextJS",
    "reactJS",
    "tailwindCSS",
    "gitHub",
    "php",
    "laravel",
    "bootstrap",
    "mySQL",
    "postgreSQL",
    "mongoDB",
    "firebase",
    "figma",
    "html",
    "css",
    "javascript",
    "seo",
    "vercel",
  ],
  learning: ["typescript", "figma"],
  interested: ["remix", "typescript", "figma", "seo"],
};
</script>

<style scoped>
#skills {
  padding-block: 50px;
  height: 90vh;
  display: flex;
  flex-direction: column;
}
.skill-container {
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 100%;
  gap: 50px;

  .skill-display {
    flex: 1;
    max-width: 1080px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;

    img {
      height: 300px;
    }

    .skill-explanation {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;

      font-family: "Raleway", "sans-serif";

      h3 {
        font-size: 80px;
        color: var(--primary);
      }

      h4 {
        font-size: 35px;
        font-weight: bold;
        max-width: 60%;
      }

      p {
        font-size: larger;
        width: 90%;
        letter-spacing: 0.5px;
        max-width: 60%;
      }
    }
  }
  .skill-list-card {
    border-radius: 30px;
    border: 1px solid black;
    padding: 1rem;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .skill-list {
      h4 {
        font-family: "Afacad", "sans-serif";
        font-size: 30px;
        color: var(--primary);
        margin-bottom: 5px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        flex-wrap: wrap;
        gap: 20px;
        li {
          display: grid;
          place-items: center;
          height: 100%;
          min-width: 50px;
          cursor: pointer;
        }

        .image-project {
          height: 35px;
          transition: all 0.2s ease-in-out;
          filter: drop-shadow(0px 0px 5px #5757573d);

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
}

.popover {
  position: absolute;
  top: calc(anchor(bottom) + 5px);
  justify-self: anchor-center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  white-space: nowrap;
  z-index: 10;
}
</style>
