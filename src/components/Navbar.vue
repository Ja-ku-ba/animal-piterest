<script setup>
import Searchbar from "./elements/Searchbar.vue"
</script>

<template>
  <nav class="navbar-container">
    <ul class="center nav-list-container">
      <li class="center icon-wraper">
        <img src="../assets/dog_icon.svg" class="icon" alt="Strona główna" />
      </li>
      <li class="center">
        <a class="main-page-link nav-box" href="/"
          ><span class="main-page-text">Strona główna</span></a
        >
      </li>
      <li class="center">
        <a class="create-page-link nav-box" href="/"
          ><span class="main-page-text">Utwórz</span></a
        >
      </li>
      <li class="searchbar-wraper">
        <Searchbar />
      </li>
      <li class="center icon-wraper">
        <img
          src="../assets/notifications.svg"
          class="icon"
          alt="Powiadomienia"
        />
      </li>
      <li class="center icon-wraper">
        <img src="../assets/chat.svg" class="icon" alt="Wiadomości" />
      </li>
      <li class="center icon-wraper">
        <img src="../assets/account.svg" class="icon" alt="Profil" />
      </li>
      <li class="center icon-wraper">
        <img src="../assets/arrow_drop_down.svg" class="icon" alt="Opcje" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0;
  height: 80px;
  /* width: calc(100% - 32px); */
  margin: 0;
  padding: 0 0 0 16px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
}

.center {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  align-items: center;
  margin: 0;
}

.nav-list-container {
  width: 100%;
}

.icon-wraper {
  margin: 0 -6px;
  border-radius: 50%;
  width: 0px;
  height: 0px;
  border: 24px solid transparent;
  background-clip: content-box;
  margin-right: 8px;
}

.icon-wraper:hover {
  border: 24px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
}

.icon {
  margin-left: -12px;
}

.searchbar-wraper {
  width: 100%;
  margin-right: 60px;
}

.nav-box {
  border-radius: 24px;
  padding: 0 24px;
}

.main-page-link {
  background-color: rgba(17, 17, 17, 17);
  color: white;
  height: 48px;
  display: flex;
  align-items: center;
}

.create-page-link {
  color: black;
}
</style>
