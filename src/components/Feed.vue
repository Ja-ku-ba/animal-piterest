<template>
  <div class="pin_container">
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/dog.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/bear.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/peungin.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/fox.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/hamster.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/cat.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/bear.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/peungin.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/hedgehog.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/deer.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/bear.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/peungin.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/dog.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/bear.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/peungin.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/bear.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/peungin.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/bear.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/peungin.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/dog.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/bear.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/peungin.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/bear.jpg" />
    </div>
    <div class="card">
      <img @load="setBorder" class="img" src="../assets/images/peungin.jpg" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const height = ref(null)
function setBorder(e) {
  height.value = e.target.height
  const rowEnd = Math.ceil(height.value / 10) + 2
  console.log(rowEnd)
  e.target.parentElement.style = `grid-row-end: span ${rowEnd}`
}
</script>

<style scoped>
.pin_container {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: var(--row_increment);
  justify-content: center;
}

.card {
  padding: 0;
  margin: 15px 10px;
  border-radius: var(--card_border_radius);
  background-color: wheat;
}

.img {
  border-radius: 16px;
  width: var(--card-with);
}
</style>
