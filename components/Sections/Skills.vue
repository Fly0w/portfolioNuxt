<template>
  <section id="skills">
    <h3 class="section-header font-tertiary">Skills</h3>
    <div class="skill-container">
      <div class="skill-display"></div>
      <div class="skill-list-card">
        <div class="skill-list">
          <h4>Used before</h4>
          <ul>
            <li v-for="skill in listSkills.used" :key="skill">
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
            <li v-for="skill in listSkills.learning" :key="skill">
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
            <li v-for="skill in listSkills.interested" :key="skill">
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
const hoveredCategory = ref("");
const hoveredSkill = ref("");

const listSkills = {
  used: ["bootstrap", "css", "figma"],
  learning: ["css"],
  interested: ["figma"],
};
</script>

<style scoped>
.skill-list-card {
  .skill-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      height: 50px;
      gap: 20px;
      li {
        display: grid;
        place-items: center;
        height: 100%;
        min-width: 50px;
      }

      .image-project {
        height: 100%;
      }
    }
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
</style>
