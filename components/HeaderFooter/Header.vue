<template>
  <div>
    <header :class="headerClass" class="header">
      <nav v-if="$viewport.isGreaterThan('md')">
        <ul class="nav-elements">
          <li>
            <NuxtLink class="" to="#landing-section">{{
              headerData.Presentation[lang]
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="" to="#curriculum">{{
              headerData.Curriculum[lang]
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="" to="#values">{{
              headerData.Values[lang]
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="" to="#projects">{{
              headerData.Projects[lang]
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="" to="#skills">{{
              headerData.Skills[lang]
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="" to="#downloads">{{
              headerData.Downloads[lang]
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="" to="#contacts">{{
              headerData.Contact[lang]
            }}</NuxtLink>
          </li>
        </ul>
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              aria-label="Language Button"
              elevation="0"
              color="transparent"
              v-bind="props"
            >
              <v-icon color="blue" icon="mdi-web" size="large"></v-icon>
            </v-btn>
          </template>

          <ul class="lang-menu">
            <li class="lang-select" @click="updateQuery('fr')">
              <img src="/icons/france.svg" alt="France Flag" />
              <button>Français</button>
            </li>
            <li class="lang-select" @click="updateQuery('en')">
              <img src="/icons/uk.svg" alt="UK Flag" />
              <button>English</button>
            </li>
            <li class="lang-select" @click="updateQuery('ja')">
              <img src="/icons/japan.svg" alt="Japan Flag" />
              <button>日本語</button>
            </li>
          </ul>
        </v-menu>
      </nav>

      <v-fab
        v-if="!$viewport.isGreaterThan('md')"
        icon="mdi-menu"
        @click.stop="drawer = !drawer"
      ></v-fab>
    </header>
    <div ref="helperRef" class="header-helper"></div>
    <v-navigation-drawer
      v-if="$viewport.isLessOrEquals('md')"
      class="drawer"
      style="height: 100vh; position: fixed"
      v-model="drawer"
      location="right"
      :temporary="true"
      :absolute="true"
      width="200"
    >
      <p class="title">{{ headerData.Title[lang] }}</p>
      <ul>
        <li>
          <NuxtLink class="" to="#landing-section">{{
            headerData.Presentation[lang]
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="#curriculum">{{
            headerData.Curriculum[lang]
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="#values">{{
            headerData.Values[lang]
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="#projects">{{
            headerData.Projects[lang]
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="#skills">{{
            headerData.Skills[lang]
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="#downloads">{{
            headerData.Downloads[lang]
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="" to="#contacts">{{
            headerData.Contact[lang]
          }}</NuxtLink>
        </li>
        <li class="lang">
          <img
            src="/icons/france.svg"
            alt="France Flag"
            @click="updateQuery('fr')"
          />
          <img src="/icons/uk.svg" alt="UK Flag" @click="updateQuery('en')" />
          <img
            src="/icons/japan.svg"
            alt="Japan Flag"
            @click="updateQuery('ja')"
          />
        </li>
      </ul>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
// Définir les classes du header
const headerClass = ref("light");
const helperRef = ref(null); // Référence vers le helper invisible

const isDarkColor = (rgb) => {
  const [r, g, b] = rgb;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 156;
};

const getBackgroundColor = (element) => {
  const style = window.getComputedStyle(element);
  const bgColor = style.backgroundColor;
  const match = bgColor.match(/\d+/g);
  return match ? match.map(Number) : [255, 255, 255];
};

const updateHeaderTextColor = () => {
  const helper = helperRef.value; // Utiliser le helper
  if (!helper) return;

  const nextElement = document.elementFromPoint(
    helper.getBoundingClientRect().left,
    helper.getBoundingClientRect().top
  ); // Élément au niveau du helper
  if (nextElement) {
    const bgColor = getBackgroundColor(nextElement);
    headerClass.value = isDarkColor(bgColor) ? "dark" : "light";
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateHeaderTextColor);
  updateHeaderTextColor();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateHeaderTextColor);
});

const lang = useState("lang");
const drawer = ref(false);

const headerData = useHeaderData();

const updateQuery = (language) => {
  lang.value = language;
  setLanguage(language);
};

function setLanguage(language) {
  useHead({
    htmlAttrs: {
      language,
    },
  });
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: linear-gradient(to top, transparent, rgba(155, 155, 155, 0.486));
  transition: color 0.3s ease;

  nav {
    display: flex;
    gap: 3rem;
    padding: 1rem 1.25rem;
  }
  .nav-elements {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

.header.light {
  color: var(--text-primary);
}

.header.dark {
  color: white;
}

.header-helper {
  position: fixed;
  left: 0;
  top: 68px;
  width: 1px;
  height: 1px;
  pointer-events: none;
  background-color: black;
  z-index: -999;
}

.drawer {
  display: flex;
  flex-direction: column;
  color: var(--text-primary);

  .title {
    padding: 15px 20px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;

    li {
      padding: 10px 20px;
      text-align: end;
    }

    li:not(:last-child):nth-child(odd) {
      background-color: #7fb3980c;
    }

    li:not(:last-child):nth-child(even) {
      background-color: #0abab404;
    }
  }

  .lang {
    display: flex;
    justify-content: space-between;
    padding-inline: 1rem;

    & > * {
      border-radius: 100px;
      aspect-ratio: 1;
      height: 30px;
    }
  }
}

.lang-menu {
  background-color: var(--neutral);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(31, 38, 135, 0.37);

  .lang-select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    gap: 10px;

    img {
      height: 20px;
    }

    &:hover {
      background-color: var(--primary);
      color: var(--neutral);
    }
  }
}
</style>
