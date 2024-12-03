<template>
  <section id="values">
    <h3 class="section-header font-tertiary">{{ title[lang] }}</h3>
    <main class="content">
      <div class="selected-content">
        <h4>{{ valuesData[selectedValue].title[lang] }}</h4>
        <h5>{{ valuesData[selectedValue].subtitle[lang] }}</h5>
        <p>{{ valuesData[selectedValue].description[lang] }}</p>
      </div>
      <div v-if="$viewport.isGreaterThan('sm')" class="selector">
        <div class="circle-relative">
          <button
            type="button"
            class="value-box value1"
            @click="selectedValue = 'Teamwork'"
          >
            {{ valuesData.Teamwork.title[lang] }}
          </button>
          <button
            type="button"
            class="value-box value2"
            @click="selectedValue = 'Fun'"
          >
            {{ valuesData.Fun.title[lang] }}
          </button>
          <button
            type="button"
            class="value-box value3"
            @click="selectedValue = 'SelfImprovement'"
          >
            {{ valuesData.SelfImprovement.title[lang] }}
          </button>
        </div>
      </div>
      <div v-else class="selector-mobile">
        <div class="circle-relative">
          <button
            type="button"
            class="value-box value1"
            @click="selectedValue = 'Teamwork'"
          >
            {{ valuesData.Teamwork.title[lang] }}
          </button>
          <button
            type="button"
            class="value-box value2"
            @click="selectedValue = 'Fun'"
          >
            {{ valuesData.Fun.title[lang] }}
          </button>
          <button
            type="button"
            class="value-box value3"
            @click="selectedValue = 'SelfImprovement'"
          >
            {{ valuesData.SelfImprovement.title[lang] }}
          </button>
          <div class="line"></div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
const lang = useState("lang");
const selectedValue = ref("Teamwork");

const valuesData = useValuesData();

const title = {
  fr: "Valeurs",
  en: "Values",
  ja: "価値",
};
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

@media screen and (max-width: 768.98px) {
  #values {
    padding-bottom: 1rem;
    padding-top: 1rem;
    position: relative;
  }

  .content {
    flex-direction: column;
  }

  .selected-content {
    flex: 1;
    font-family: "Raleway", "sans-serif";

    h4 {
      font-size: 40px;
    }

    h5 {
      margin-top: 10px;
      font-size: 25px;
    }

    p {
      font-size: 16px;
      margin-top: 20px;
    }
  }

  .selector-mobile {
    position: relative;
    margin-top: 20px;
    width: 100%;
    .circle-relative {
      display: flex;
      justify-content: space-around;

      .value-box {
        display: grid;
        place-items: center;
        width: 90px;
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
        font-size: 12px;
        z-index: 2;
      }
      .line {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        border: solid 1px var(--primary);
        z-index: 0;
      }
    }
  }
}
</style>
