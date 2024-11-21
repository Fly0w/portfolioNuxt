<template>
  <section id="values">
    <h3 class="section-header font-tertiary">Values</h3>
    <main class="content">
      <div class="selected-content">
        <h4>{{ textData.title }}</h4>
        <h5>{{ textData.subtitle }}</h5>
        <p>{{ textData.text }}</p>
      </div>
      <div class="selector">
        <div class="circle-relative">
          <button
            type="button"
            class="value-box value1"
            @click="selectedValue = 'value1'"
          >
            Teamwork
          </button>
          <button
            type="button"
            class="value-box value2"
            @click="selectedValue = 'value2'"
          >
            Fun
          </button>
          <button
            type="button"
            class="value-box value3"
            @click="selectedValue = 'value3'"
          >
            Self-Improvement
          </button>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
const selectedValue = ref("value1");

const textData = computed(() => {
  switch (selectedValue.value) {
    case "value1":
      return {
        title: "Teamwork",
        subtitle: `Alone, you go faster. Together, you go further.`,
        text: `In both my professional and personal life, I have always placed great importance on achieving things alongside others. To me, success holds little value if it cannot be shared—whether it’s celebrating victories or learning from setbacks. That’s why I consistently strive to listen to those around me, gathering valuable insights, sharing my perspective, and ensuring I fully understand theirs. This, to me, is the essence of teamwork.`,
        pictures: [],
      };

    case "value2":
      return {
        title: "Fun",
        subtitle: `Life is short — let's make the most of it !`,
        text: `I firmly believe that it’s possible to have fun in any situation while maintaining the right balance of seriousness to get the job done. Whether at work or with friends, I deeply value the moments I share with those around me, as they help build connection, trust, and collaboration. Cultivating meaningful relationships not only enhances the enjoyment of experiences but also fosters an environment where everyone feels supported and inspired to bring their best selves to the table.`,
        pictures: [],
      };

    case "value3":
      return {
        title: "Self-Improvement",
        subtitle: "Become the best version of yourself. ",
        text: `Certainly, the value I hold most dear, and have followed since childhood, is personal growth. Every day, I strive to become a better version of myself—not only by learning technical skills or acquiring new knowledge but also by stepping out of my comfort zone and adapting to diverse environments and cultures. As a human being and a member of society, my goal is to evolve into a reliable and trustworthy individual.`,
        pictures: [],
      };

    default:
      return {
        title: "",
        subtitle: "",
        text: "",
        pictures: [],
      };
  }
});
</script>

<style scoped>
#values {
  padding-bottom: 100px;
}
.content {
  display: flex;
  align-items: start;
}

.selected-content {
  flex: 1;
  font-family: "Raleway", "sans-serif";

  h4 {
    font-size: 80px;
    color: var(--primary);
  }

  h5 {
    margin-top: 20px;
    font-size: 35px;
    font-weight: bold;
  }

  p {
    font-size: larger;
    margin-top: 50px;
    width: 90%;
    letter-spacing: 0.5px;
  }
}

.selector {
  padding-bottom: 1rem;
  width: 150px;
  .circle-relative {
    --size-wheel: 450px;

    position: relative;
    height: var(--size-wheel);
    width: var(--size-wheel);
    border: solid var(--primary) 2px;
    border-radius: 100%;
    margin-left: 50px;

    .value-box {
      --size-box: 100px;

      display: grid;
      place-items: center;
      position: absolute;
      height: var(--size-box);
      aspect-ratio: 1;
      outline: 1px white solid;
      outline-offset: -3px;
      border-radius: 100%;
      background-color: var(--tertiary);
      box-shadow: 5px 0px 5px #36363649;
      transition: all 0.1s ease-in-out;
      cursor: pointer;
      color: white;
      font-family: "Questrial", "sans-serif";
      font-size: 14px;

      &:hover {
        transform: scale(1.05);
      }
    }

    .value1 {
      top: 0px;
      left: 40px;
    }

    .value2 {
      top: calc((var(--size-wheel) - var(--size-box)) / 2);
      left: -50px;
    }

    .value3 {
      bottom: 0px;
      left: 40px;
    }
  }
}
</style>
