<template>
  <section id="landing-section">
    <header>
      <h1 class="font-secondary">Florian Budniewski</h1>
      <h2 class="font-tertiary">Welcome to my frontend developer portfolio</h2>
      <NuxtLink to="#projects" class="projects-button font-primary">
        View my projects
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

<script setup lang="ts"></script>

<style scoped>
section {
  padding: 6rem 0 3rem 5rem;
}

#landing-section {
  display: flex;
  justify-content: end;
}

header {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  h1,
  h2 {
    font-size: clamp(30px, 5vw, 100px);
  }
  h1 {
    letter-spacing: 3px;
  }

  .projects-button {
    align-self: self-start;
    font-size: 1.5vw;
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
