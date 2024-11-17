<template>
  <section id="values">
    <h3 class="section-header font-tertiary">Values</h3>
    <div class="content">
      <div class="selected-content">Text here</div>
      <div class="selector">
        <div class="circle-relative">
          <div class="value-box value1">value1</div>
          <div class="value-box value2">value2</div>
          <div class="value-box value3">value3</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.content {
  display: flex;
  align-items: start;
}

.selected-content {
  flex: 1;
}

.selector {
  padding-bottom: 1rem;
  width: 150px;
  .circle-relative {
    --size-wheel: 500px;

    position: relative;
    height: var(--size-wheel);
    width: var(--size-wheel);
    border: solid var(--primary) 2px;
    border-radius: 100%;

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
      font-family: "Questrial";

      &:hover {
        transform: scale(1.05);
      }
    }

    .value1 {
      top: 0px;
      left: 45px;
    }

    .value2 {
      top: calc((var(--size-wheel) - var(--size-box)) / 2);
      left: -50px;
    }

    .value3 {
      bottom: 0px;
      left: 45px;
    }
  }
}
</style>
