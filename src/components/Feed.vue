<template>
  <div class="pin_container" @load="randomizeAnimals">
    <router-link
      :to="{ path: `post/${animal}` }"
      class="card"
      v-for="animal in randomAniamls"
      :animal="animal"
    >
      <SingleFeedPost :animal="animal" />
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue"
import SingleFeedPost from "./elements/SingleFeedPost.vue"

const animals = [
  "bear",
  "cat",
  "deer",
  "dog",
  "fox",
  "hamster",
  "hedgehog",
  "peungin",
]

function shuffleArray(array) {
  const arr = []
  for (let n = 0; n < 20; n++) {
    for (let i = array.length - 1; i > 0; i--) {
      arr.push(array[Math.floor(Math.random() * (i + 1))])
    }
  }
  return arr
}
const randomAniamls = ref(shuffleArray(animals))
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
  position: relative;
  padding: 0;
  margin: 15px 10px;
  border-radius: var(--card_border_radius);
  background-color: wheat;
}
</style>
