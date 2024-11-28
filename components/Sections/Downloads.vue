<template>
  <section id="downloads">
    <h3 class="section-header font-tertiary">{{ textdata.title }}</h3>
    <ul>
      <a href="/files/履歴書フロリアンブドニエブスキ.pdf" download>
        <li>
          <p>{{ textdata.rireki }}</p>
        </li>
      </a>
      <a href="/files/CV Florian Budniewski.pdf" download>
        <li>
          <p>{{ textdata.cv }}</p>
        </li>
      </a>
      <a href="/files/職務経歴書フロリアン・ブドニエブスキ.pdf" download>
        <li>
          <p>{{ textdata.shokumu }}</p>
        </li>
      </a>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const lang = useState("lang");
const textdata = computed(() => {
  switch (lang.value) {
    case "en":
      return {
        title: "Downloads",
        rireki: "Resume (jp)",
        cv: "CV (en)",
        shokumu: "Work History (jp)",
      };

    case "fr":
      return {
        title: "Téléchargements",
        rireki: "Resume (jp)",
        cv: "CV (en)",
        shokumu: "Historique professionnel (jp)",
      };

    case "jp":
      return {
        title: "ダウンロード",
        rireki: "履歴書 (日本語)",
        cv: "履歴書・職務経歴書 (英語)",
        shokumu: "職務経歴書 (日本語)",
      };

    default:
      return {
        title: "",
        rireki: "",
        cv: "",
        shokumu: "",
      };
  }
});
</script>

<style scoped>
#downloads {
  background-color: black;
  color: var(--neutral);
  position: relative;
  padding: 0;
  z-index: 2;
  height: 500px;

  .section-header {
    width: fit-content;
    padding: 0 0 0 20px;
    mix-blend-mode: exclusion;
  }
}

ul {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  a {
    height: 100%;
    flex: 1;
    display: grid;
    place-items: center;

    position: relative;
    cursor: pointer;

    font-size: 60px;
    font-family: "Afacad", "sans-serif";
    color: var(--neutral);
    text-align: center;
    transition: all 0.5s ease;

    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      right: 0;
      background-position: start;
      background-size: cover;
      opacity: 0.25;
      z-index: -4;
      transition: all 0.5s ease;
    }
    &:hover {
      color: black;
      &::after {
        opacity: 0.8;
        transform: scale(1.1);
      }
    }
  }

  a:nth-child(1) {
    clip-path: polygon(0 0, 100% 0, calc(100% - 150px) 100%, 0% 100%);
    margin-right: -75px;
    padding: 50px 150px 50px 50px;

    &::after {
      background-image: url("/img/rirekisho.jpg");
    }
  }

  a:nth-child(2) {
    clip-path: polygon(150px 0%, 100% 0, calc(100% - 150px) 100%, 0% 100%);
    margin-inline: -75px;
    flex-grow: 1.33;
    padding: 50px 150px 50px 150px;

    &::after {
      background-image: url("/img/englishCV.jpg");
    }
  }

  a:nth-child(3) {
    clip-path: polygon(150px 0, 100% 0, 100% 100%, 0% 100%);
    margin-left: -75px;
    padding: 50px 50px 50px 150px;

    &::after {
      background-image: url("/img/shokumu.jpg");
    }
  }
}
</style>
