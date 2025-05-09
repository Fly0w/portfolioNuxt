<template>
  <section v-if="$viewport.isGreaterThan('sm')" id="skills">
    <p class="section-header font-tertiary">{{ title[lang] }}</p>
    <div class="skill-container">
      <div class="skill-display">
        <img
          class="selected-skill"
          :src="iconsData[selectedSkill]?.icon"
          :alt="iconsData[selectedSkill]?.iconText"
          height="200"
          width="200"
        />
        <div class="skill-explanation">
          <p class="icon-text">{{ iconsData[selectedSkill]?.iconText }}</p>
          <p class="subtitle">{{ iconsData[selectedSkill]?.subtitle[lang] }}</p>
          <p>{{ iconsData[selectedSkill]?.description[lang] }}</p>
        </div>
      </div>
      <div class="skill-list-card">
        <div class="skill-list">
          <p class="subtitle">{{ categories.used[lang] }}</p>
          <ul>
            <li
              v-for="skill in listSkills.used"
              :key="skill"
              @click="selectedSkill = skill"
            >
              <img
                class="image-project"
                :src="iconsData[skill]?.icon"
                :alt="iconsData[skill]?.iconText"
                @mouseenter="
                  hoveredCategory = `used`;
                  hoveredSkill = skill;
                "
                @mouseleave="
                  hoveredCategory = '';
                  hoveredSkill = '';
                "
                :style="`anchor-name: --skills-used-${skill}`"
                height="35"
                width="35"
              />
            </li>
          </ul>
        </div>
        <div class="skill-list">
          <p class="subtitle">{{ categories.learn[lang] }}</p>
          <ul>
            <li
              v-for="skill in listSkills.learning"
              :key="skill"
              @click="selectedSkill = skill"
            >
              <img
                class="image-project"
                :src="iconsData[skill]?.icon"
                :alt="iconsData[skill]?.iconText"
                @mouseenter="
                  hoveredCategory = `learning`;
                  hoveredSkill = skill;
                "
                @mouseleave="
                  hoveredCategory = '';
                  hoveredSkill = '';
                "
                :style="`anchor-name: --skills-learning-${skill}`"
                height="35"
                width="35"
              />
            </li>
          </ul>
        </div>
        <div class="skill-list">
          <p class="subtitle">{{ categories.interest[lang] }}</p>
          <ul>
            <li
              v-for="skill in listSkills.interested"
              :key="skill"
              @click="selectedSkill = skill"
            >
              <img
                class="image-project"
                :src="iconsData[skill]?.icon"
                :alt="iconsData[skill]?.iconText"
                @mouseenter="
                  hoveredCategory = `interested`;
                  hoveredSkill = skill;
                "
                @mouseleave="
                  hoveredCategory = '';
                  hoveredSkill = '';
                "
                :style="`anchor-name: --skills-interested-${skill}`"
                height="35"
                width="35"
              />
            </li>
          </ul>
        </div>
        <p
          v-if="hoveredCategory !== ''"
          class="popover"
          :style="`position-anchor: --skills-${hoveredCategory}-${hoveredSkill}`"
        >
          {{ iconsData[hoveredSkill].iconText }}
        </p>
      </div>
    </div>
  </section>
  <section v-else id="skills">
    <p class="section-header font-tertiary">{{ title[lang] }}</p>
    <div class="skill-display">
      <img
        class="selected-skill"
        :src="iconsData[selectedSkill]?.icon"
        :alt="iconsData[selectedSkill]?.iconText"
        height="35"
        width="35"
      />
      <div class="skill-explanation">
        <p class="icon-text">{{ iconsData[selectedSkill]?.iconText }}</p>
        <p class="subtitle">{{ iconsData[selectedSkill]?.subtitle[lang] }}</p>
        <p>{{ iconsData[selectedSkill]?.description[lang] }}</p>
      </div>
    </div>
    <div class="skill-list-card">
      <div class="skill-list">
        <p class="subtitle">{{ categories.used[lang] }}</p>
        <ul>
          <li
            v-for="skill in listSkills.used"
            :key="skill"
            @click="selectedSkill = skill"
          >
            <img
              class="image-project"
              :src="iconsData[skill]?.icon"
              :alt="iconsData[skill]?.iconText"
              @mouseenter="
                hoveredCategory = `used`;
                hoveredSkill = skill;
              "
              @mouseleave="
                hoveredCategory = '';
                hoveredSkill = '';
              "
              :style="`anchor-name: --skills-used-${skill}`"
              height="25"
              width="25"
            />
          </li>
        </ul>
      </div>
      <div class="skill-list">
        <p class="subtitle">{{ categories.learn[lang] }}</p>
        <ul>
          <li
            v-for="skill in listSkills.learning"
            :key="skill"
            @click="selectedSkill = skill"
          >
            <img
              class="image-project"
              :src="iconsData[skill]?.icon"
              :alt="iconsData[skill]?.iconText"
              @mouseenter="
                hoveredCategory = `learning`;
                hoveredSkill = skill;
              "
              @mouseleave="
                hoveredCategory = '';
                hoveredSkill = '';
              "
              :style="`anchor-name: --skills-learning-${skill}`"
              height="25"
              width="25"
            />
          </li>
        </ul>
      </div>
      <div class="skill-list">
        <p class="subtitle">{{ categories.interest[lang] }}</p>
        <ul>
          <li
            v-for="skill in listSkills.interested"
            :key="skill"
            @click="selectedSkill = skill"
          >
            <img
              class="image-project"
              :src="iconsData[skill]?.icon"
              :alt="iconsData[skill]?.iconText"
              :style="`anchor-name: --skills-interested-${skill}`"
              height="25"
              width="25"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const lang = useState("lang");
const iconsData = useIconsData();
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

    .selected-skill {
      height: 200px;
      width: auto;
    }

    .skill-explanation {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;

      font-family: "Raleway", "sans-serif";

      .icon-text {
        font-size: clamp(40px, 3.5vw, 80px);
        color: var(--primary);
      }

      .subtitle {
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
      .subtitle {
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
          width: auto;
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

    .selected-skill {
      height: 130px;
      width: auto;
    }

    .skill-explanation {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;

      font-family: "Raleway", "sans-serif";

      .icon-text {
        font-size: clamp(40px, 3.5vw, 80px);
        color: var(--primary);
      }

      .subtitle {
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
      .subtitle {
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
          width: auto;
          transition: all 0.2s ease-in-out;
          filter: drop-shadow(0px 0px 5px #5757573d);
        }
      }
    }
  }
}
</style>
