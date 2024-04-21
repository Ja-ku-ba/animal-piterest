<template>
  <div class="post-container">
    <img
      class="post-page-image"
      :src="`/src/assets/images/${$route.params.id}.jpg`"
    />
    <aside class="post-content">
      <nav class="navigation">
        <button>
          <img class="nav-post-icon" src="../assets/icons/download.svg" />
        </button>
        <button class="navigation--left">
          <img class="nav-post-icon" src="../assets/icons/3dots.svg" />
        </button>
        <span class="navigation--right">{{ $route.params.id }}</span>
        <button>Zapisz</button>
      </nav>
      <div>
        <img src="../assets/icons/account.svg" />
        <div>
          <span>Creator</span>
          <span>1,8tys. obserwujących</span>
        </div>
        <button>Obserwuj</button>
      </div>
      <ul>
        <li>
          <img src="../assets/icons/account.svg" />
          <span>Creator</span>
          <p>Lorem ipsum dorem pipsum</p>
          <div>
            <span>1 rok</span>
            <img src="../assets/icons/heart.svg" />
            <span>3</span>
            <img src="../assets/icons/3dots.svg" />
          </div>
        </li>
      </ul>
      <section>napisz komentarz</section>
    </aside>
  </div>
</template>

<script setup>
const props = defineProps({
  animal: {
    type: String,
  },
})
</script>

<style scoped>
.post-container {
  background-color: whitesmoke;
  border-radius: 32px;
  width: 1016px;
  margin: auto;
  margin-top: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 20px 0px;
  display: flex;
}

.post-page-image {
  width: 468px;
  height: 100%;
  border-radius: 16px !important;
  margin: 20px;
}

button {
  border: none;
  background-color: whitesmoke;
}

.post-content {
  width: 508px;
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.post-content img {
  width: 36px;
  height: 36px;
}

.navigation {
  display: flex;
  flex-direction: row;
  justify-items: center;
  padding: 12px 12px 0 0;
}

.nav-post-icon {
  border: 8px solid transparent !important;
  margin-left: -8px;
}

.nav-post-icon:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 34px;
}

.navigation--left {
  margin-right: auto;
}

.navigation--right {
  margin-left: auto;
}

.navigation .navigation button img {
  width: 48px;
  height: 48px;
}
</style>
