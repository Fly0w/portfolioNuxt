<template>
  <section id="landing-section">
    <header>
      <div>
        <h1 class="font-secondary">{{ dataPresentation.name.fr }}</h1>
        <h3 v-if="lang === 'ja'" class="font-tertiary">
          {{ dataPresentation.name.ja }}
        </h3>
      </div>
      <h2 class="font-tertiary">{{ dataPresentation.title[lang] }}</h2>
      <NuxtLink to="#projects" class="projects-button font-primary">
        {{ dataPresentation.button[lang] }}
        <NuxtImg
          class="icon-right"
          alt="right arrow"
          src="/icons/arrow-right.svg"
          height="30px"
          width="30px"
        />
      </NuxtLink>
    </header>
    <NuxtImg
      class="img-florian"
      alt="Drawing of Florian Budniewski"
      src="/img/body drawing no-bg.webp"
    />
  </section>
</template>

<script setup>
const lang = useState("lang");

const dataPresentation = usePresentationData();
</script>

<style scoped>
section {
  padding: 6rem 0 3rem 5rem;
}

#landing-section {
  display: flex;
  justify-content: end;
  gap: 50px;
}

header {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  h1,
  h2 {
    font-size: clamp(30px, 5vw, 80px);
  }
  h1 {
    letter-spacing: 3px;
  }

  .projects-button {
    align-self: self-start;
    font-size: clamp(16px, 1.5vw, 42px);
    display: flex;
    gap: 15px;

    transition: all 0.3s ease-in-out;

    &:hover {
      gap: 50px;
    }
  }
}
.img-florian {
  width: 100%; /* ou une largeur maximale fixe */
  width: clamp(200px, 40vw, 400px); /* Limite la largeur */
  height: auto; /* Garde le ratio de l'image */
  object-fit: contain; /* Évite l’étirement en gardant l’image dans ses limites */
  flex-shrink: 0; /* Empêche la réduction de l'image dans le flex */
}
</style>
