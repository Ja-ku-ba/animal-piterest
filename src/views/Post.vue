<script setup>
const props = defineProps({
  animal: {
    type: String,
  },
})
</script>

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
        <span class="navigation--right center-inline button-box">{{
          $route.params.id
        }}</span>
        <button class="center-inline">
          <span class="save-item-button post-content-button button-box"
            >Zapisz</span
          >
        </button>
      </nav>
      <div class="about-user-bar center-inline">
        <img src="../assets/icons/account.svg" />
        <div class="about-user-info">
          <span>Creator</span>
          <span>1,8tys. obserwujących</span>
        </div>
        <button class="button-box foolow-profile-buuton post-content-button">
          Obserwuj
        </button>
      </div>
      <ul class="coments-container">
        <li v-for="i in 5" class="coment center-inline">
          <div class="coment-body">
            <img src="../assets/icons/account.svg" />
            <span>Creator &nbsp</span>
            <p>Lorem ipsum dorem pipsum</p>
          </div>
          <div class="coment-info center-inline">
            <span>1 rok</span>
            <div class="coment-like center-inline">
              <img src="../assets/icons/heart.svg" />
              <span>3</span>
            </div>
            <img src="../assets/icons/3dots.svg" />
          </div>
        </li>
      </ul>
      <form class="add-coment-container">
        <textarea
          class="add-coment-input"
          placeholder="Dodaj komentarz"
          rows="3"
        ></textarea>
      </form>
    </aside>
  </div>
</template>

<style>
.coments-container {
  list-style: none;
  padding: 0;
  overflow-y: scroll;
  max-height: 500px;
}

.coment {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.coment-body {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin: 10px 0;
}

.coment-body span {
  font-weight: 600;
  margin-left: 8px;
}

.coment-body p {
  margin: 0;
}

.coment-info {
  margin: -15px 0 0 45px;
}

.coment-info img {
  width: 18px !important;
  height: 18px !important;
}

.coment-like {
  margin: 0 20px;
}

.add-coment-container {
  width: 100%;
  margin-top: auto;
}

.add-coment-input {
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 16px;
}
</style>

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
  border-radius: 32px 0 0 32px !important;
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

.button-box {
  border-radius: 24px;
  padding: 0 24px;
  font-size: 18px;
}

.post-content-button {
  height: 48px;
  display: flex;
  align-items: center;
  text-wrap: nowrap;
}

.save-item-button {
  color: white;
  background-color: rgb(230, 0, 35);
}

.navigation img {
  width: 48px;
  height: 48px;
}

.about-user-bar {
  margin: 16px 12px 32px 0;
}

.about-user-bar img {
  width: 48px;
  height: 48px;
  margin: 8px;
}

.about-user-info {
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

.foolow-profile-buuton {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
