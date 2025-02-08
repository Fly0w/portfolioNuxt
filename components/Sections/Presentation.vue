<template>
  <section id="landing-section">
    <header>
      <div>
        <h1 class="font-secondary">{{ dataPresentation.name.fr }}</h1>
        <h2 v-if="lang === 'ja'" class="font-tertiary">
          {{ dataPresentation.name.ja }}
        </h2>
      </div>
      <p class="title font-tertiary">{{ dataPresentation.title[lang] }}</p>
      <NuxtLink to="#projects" class="projects-button font-primary">
        {{ dataPresentation.button[lang] }}
        <img
          class="icon-right"
          alt="right arrow"
          src="/icons/arrow-right.svg"
        />
      </NuxtLink>
    </header>
    <NuxtImg
      class="img-florian"
      alt="Drawing of Florian Budniewski"
      src="/img/body drawing no-bg.webp"
      loading="lazy"
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
  .title {
    font-size: clamp(30px, 5vw, 70px);
  }
  h1 {
    letter-spacing: 3px;
  }

  .title {
    max-width: 90%;
  }

  .projects-button {
    margin-top: 20px;
    width: fit-content;
    font-size: clamp(16px, 1.5vw, 36px);
    display: flex;
    align-items: center;
    gap: 15px;

    transition: all 0.3s ease-in-out;

    &:hover {
      gap: 50px;
    }

    .icon-right {
      height: 30px;
      width: 30px;
    }
  }
}
.img-florian {
  width: clamp(200px, 40vw, 400px); /* Limite la largeur */
  height: auto; /* Garde le ratio de l'image */
  object-fit: contain; /* Évite l’étirement en gardant l’image dans ses limites */
  flex-shrink: 0; /* Empêche la réduction de l'image dans le flex */
}

@media screen and (max-width: 768.98px) {
  section {
    padding: 2rem 0 0rem 2rem;
  }

  #landing-section {
    gap: 20px;
  }

  header {
    gap: 30px;

    h1 {
      font-size: clamp(30px, 10vw, 40px);
    }

    .title {
      font-size: clamp(20px, 5vw, 40px);
    }

    .projects-button {
      font-size: clamp(12px, 1.5vw, 24px);

      &:hover {
        gap: 15px;
      }

      .icon-right {
        height: 20px;
        width: 20px;
      }
    }
  }

  .img-florian {
    width: clamp(100px, 35vw, 300px); /* Limite la largeur */
  }
}
</style>
