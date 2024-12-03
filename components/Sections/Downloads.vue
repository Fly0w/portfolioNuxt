<template>
  <section v-if="$viewport.isGreaterThan('sm')" id="downloads" class="dwld">
    <h3 class="section-header font-tertiary">{{ textdata.title }}</h3>
    <ul>
      <li>
        <a href="/files/履歴書フロリアンブドニエブスキ.pdf" download>
          <p>{{ textdata.rireki }}</p>
        </a>
      </li>
      <li>
        <a href="/files/CV Florian Budniewski.pdf" download>
          <p>{{ textdata.cv }}</p>
        </a>
      </li>
      <li>
        <a href="/files/職務経歴書フロリアン・ブドニエブスキ.pdf" download>
          <p>{{ textdata.shokumu }}</p>
        </a>
      </li>
    </ul>
  </section>
  <section v-else id="downloads" class="dwld-phone">
    <h3 class="section-header font-tertiary">{{ textdata.title }}</h3>
    <ul>
      <li>
        <a href="/files/履歴書フロリアンブドニエブスキ.pdf" download>
          <p>{{ textdata.rireki }}</p>
        </a>
      </li>
      <li>
        <a href="/files/CV Florian Budniewski.pdf" download>
          <p>{{ textdata.cv }}</p>
        </a>
      </li>
      <li>
        <a href="/files/職務経歴書フロリアン・ブドニエブスキ.pdf" download>
          <p>{{ textdata.shokumu }}</p>
        </a>
      </li>
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
        shokumu: "CV (jp)",
      };

    case "ja":
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
.dwld {
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
  ul {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    li {
      height: 100%;
      flex: 1;

      position: relative;
      cursor: pointer;

      font-size: 60px;
      font-family: "Afacad", "sans-serif";
      color: var(--neutral);
      text-align: center;
      transition: all 0.5s ease;

      a {
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center;
      }

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        background-position: start;
        background-size: cover;
        opacity: 0.45;
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

    li:nth-child(1) {
      clip-path: polygon(0 0, 100% 0, calc(100% - 150px) 100%, 0% 100%);
      margin-right: -75px;
      a {
        padding: 50px 150px 50px 50px;
      }

      &::after {
        background-image: url("/img/rirekisho.jpg");
      }
    }

    li:nth-child(2) {
      clip-path: polygon(150px 0%, 100% 0, calc(100% - 150px) 100%, 0% 100%);
      margin-inline: -75px;
      flex-grow: 1.33;
      a {
        padding: 50px 150px 50px 150px;
      }

      &::after {
        background-image: url("/img/englishCV.jpg");
      }
    }

    li:nth-child(3) {
      clip-path: polygon(150px 0, 100% 0, 100% 100%, 0% 100%);
      margin-left: -75px;
      a {
        padding: 50px 50px 50px 150px;
      }

      &::after {
        background-image: url("/img/shokumu.jpg");
      }
    }
  }
}

@media screen and (max-width: 768.98px) {
  .dwld-phone {
    background-color: black;
    color: var(--neutral);
    position: relative;
    padding: 0;
    z-index: 1;
    height: auto;

    .section-header {
      padding: 0 0 0 20px;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    li {
      min-height: 200px;
      flex: 1;

      position: relative;

      font-size: 40px;
      font-family: "Afacad", "sans-serif";
      color: var(--neutral);
      text-align: center;
      display: grid;
      place-items: center;

      a {
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center;
        padding: 1rem;
      }

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        background-position: start;
        background-size: cover;
        opacity: 0.45;
        z-index: -4;
      }
    }

    li:nth-child(1) {
      &::after {
        background-image: url("/img/rirekisho.jpg");
      }
    }

    li:nth-child(2) {
      &::after {
        background-image: url("/img/englishCV.jpg");
      }
    }

    li:nth-child(3) {
      &::after {
        background-image: url("/img/shokumu.jpg");
      }
    }
  }
}
</style>
