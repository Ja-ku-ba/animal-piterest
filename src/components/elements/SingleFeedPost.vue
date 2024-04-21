<template>
  <span class="post-cateogry" :class="[hover ? 'show' : 'hide']">Caterory</span>
  <img
    @load="setLimit"
    class="feed-post"
    :src="`/src/assets/images/${animal}.jpg`"
    :id="`${uuid}`"
    @mouseover="hover = true"
    @mouseout="hover = false"
  />
  <span class="post-creator" :class="[hover ? 'show' : 'hide']">Creator</span>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue"
const instance = getCurrentInstance()

const uuid = ref(instance.uid)
const height = ref(null)
const hover = ref(false)

function setLimit(e) {
  height.value = e.target.height
  const rowEnd = Math.ceil(height.value / 10) + 2
  e.target.parentElement.style = `grid-row-end: span ${rowEnd}`
}

const props = defineProps({
  animal: {
    type: String,
  },
  hover: {
    type: Boolean,
  },
})
</script>

<style scoped>
.card {
  padding: 0;
  margin: 15px 10px;
  border-radius: var(--card_border_radius);
  background-color: wheat;
  overflow: hidden;
  z-index: 1;
}

.feed-post {
  border-radius: 16px;
  width: var(--card-with);
  z-index: 1;
  position: relative;
  top: 0;
}

.feed-post:hover {
  -webkit-filter: brightness(50%);
}

.show {
  position: absolute;
  z-index: 2;
}

.hide {
  z-index: 0;
  display: none;
}

.post-cateogry {
  color: white;
  z-index: 2;
  top: 10px;
  left: 10px;
  font-size: 30px;
}

.post-creator {
  color: white;
  z-index: 2;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
}
</style>
