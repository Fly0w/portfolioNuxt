<template>
  <div>
    <div class="test">
      <img src="/img/FacetoFace.jpg" alt="" />
      <img src="/img/BrandJapan.jpg" alt="" />
    </div>
    <div class="test1">
      <img src="/img/FacetoFace.jpg" alt="" />
      <img src="/img/BrandJapan.jpg" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.test {
  display: flex;
  width: 100%;
  height: 400px;
  padding: 2rem;
  gap: 30px;
  margin-top: 200px;

  img {
    object-fit: cover;
    height: 100%;
    border: solid;

    &:nth-child(1) {
      flex: 2;
    }

    &:nth-child(2) {
      flex: 1;
    }
  }
}

.test1 {
  display: flex;
  width: 100%;
  height: 400px;
  padding: 2rem;
  gap: 30px;

  img {
    object-fit: cover;
    height: 100%;
    border: solid;

    &:nth-child(1) {
      flex: 1;
    }

    &:nth-child(2) {
      flex: 2;
    }
  }
}
</style>
