<template>
  <div>
    <header
      class="flex flex-row justify-center fixed top-0 w-full z-10 font-primary"
    >
      <nav v-if="$viewport.isGreaterThan('md')" class="px-5 py-4">
        <ul
          class="flex flex-row justify-center gap-12 items-center text-lg text-ttextPrimary"
        >
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
          <v-menu location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn elevation="0" color="transparent" v-bind="props">
                <v-icon color="blue" icon="mdi-web" size="large"></v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="updateQuery('fr')">
                <button>Français</button>
              </v-list-item>
              <v-list-item @click="updateQuery('en')">
                <button>English</button>
              </v-list-item>
              <v-list-item @click="updateQuery('ja')">
                <button>日本語</button>
              </v-list-item>
            </v-list>
          </v-menu>
        </ul>
      </nav>

      <v-fab v-else icon="mdi-menu" @click.stop="drawer = !drawer"></v-fab>
    </header>
    <v-navigation-drawer
      class="drawer"
      style="height: 100vh; position: fixed"
      v-model="drawer"
      location="right"
      :temporary="true"
      :absolute="true"
      width="200"
    >
      <ul>
        <li class="lang">
          <NuxtImg src="/icons/france.svg" @click="updateQuery('fr')"></NuxtImg>
          <NuxtImg src="/icons/uk.svg" @click="updateQuery('en')"></NuxtImg>
          <NuxtImg src="/icons/japan.svg" @click="updateQuery('ja')"></NuxtImg>
        </li>
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
    </v-navigation-drawer>
  </div>
</template>

<script setup>
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
  background: linear-gradient(to top, transparent, rgba(155, 155, 155, 0.486));
}

.drawer {
  padding: 1rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .lang {
    display: flex;
    justify-content: space-between;

    & > * {
      border-radius: 100px;
      aspect-ratio: 1;
      height: 30px;
    }
  }
  li {
    text-align: center;
  }
}
</style>
