<template>
  <section v-if="$viewport.isGreaterThan('sm')" id="skills">
    <h3 class="section-header font-tertiary">{{ title[lang] }}</h3>
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
          <h4>{{ categories.used[lang] }}</h4>
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
          <h4>{{ categories.learn[lang] }}</h4>
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
          <h4>{{ categories.interest[lang] }}</h4>
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
  <section v-else id="skills">
    <h3 class="section-header font-tertiary">{{ title[lang] }}</h3>
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
        <h4>{{ categories.used[lang] }}</h4>
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
        <h4>{{ categories.learn[lang] }}</h4>
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
        <h4>{{ categories.interest[lang] }}</h4>
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
              :style="`anchor-name: --skills-interested-${skill}`"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const lang = useState("lang");
const hoveredCategory = ref("");
const hoveredSkill = ref("");
const selectedSkill = ref("nuxt");

const title = {
  fr: "Tech Stack",
  en: "Tech Stack",
  ja: "技術",
};

const categories = {
  used: {
    fr: "Déjà utilisé",
    en: "Used before",
    ja: "経験がある",
  },

  learn: {
    fr: "En cours d'apprentissage",
    en: "Learning",
    ja: "勉強中",
  },
  interest: {
    fr: "Interessé",
    en: "Interested in",
    ja: "興味がある",
  },
};

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.skill-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  gap: 50px;
  height: 100%;

  .skill-display {
    flex: 1.4;
    max-width: 1080px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    max-height: 100%;
    overflow: hidden;

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
        font-size: clamp(40px, 3.5vw, 80px);
        color: var(--primary);
      }

      h4 {
        font-size: clamp(20px, 2.5vw, 30px);
        font-weight: bold;
        max-width: 60%;
      }

      p {
        font-size: clamp(14px, 1.5vw, 20px);
        /* width: 90%; */
        letter-spacing: 0.5px;
        /* max-width: 60%; */
      }
    }
  }
  .skill-list-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 30px;
    border: 2px solid var(--neutral);
    background-color: white;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    padding: 2rem;
    width: 400px;
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

@media screen and (max-width: 768.98px) {
  #skills {
    padding: 0;
    height: auto;
    min-height: 100vh;
  }

  .section-header {
    padding: 1rem;
    text-align: center;
  }

  .skill-display {
    flex: 1.4;
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem;

    img {
      height: 150px;
    }

    .skill-explanation {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;

      font-family: "Raleway", "sans-serif";

      h3 {
        font-size: clamp(40px, 3.5vw, 80px);
        color: var(--primary);
      }

      h4 {
        font-size: clamp(20px, 2.5vw, 30px);
        font-weight: bold;
        max-width: 90%;
      }

      p {
        font-size: clamp(14px, 1.5vw, 20px);
        letter-spacing: 0.5px;
      }
    }
  }

  .skill-list-card {
    display: flex;
    overflow-x: auto;
    max-width: 100%;
    border: 2px solid var(--neutral);
    background-color: white;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    padding: 1rem;
    gap: 20px;

    &::-webkit-scrollbar {
      height: 5px;
    }

    .skill-list {
      h4 {
        font-family: "Afacad", "sans-serif";
        font-size: 24px;
        color: var(--primary);
        margin-bottom: 10px;
        text-align: center;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        flex-wrap: wrap;
        gap: 20px;

        li {
          display: grid;
          place-items: center;
          height: 100%;
          min-width: 30px;
          cursor: pointer;
        }

        .image-project {
          height: 25px;
          transition: all 0.2s ease-in-out;
          filter: drop-shadow(0px 0px 5px #5757573d);
        }
      }
    }
  }
}
</style>
