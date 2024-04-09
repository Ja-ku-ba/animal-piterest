<script setup>
import Searchbar from "./elements/Searchbar.vue"
</script>

<template>
  <nav class="navbar-container">
    <ul class="center">
      <li class="center logo-wrapper">
        <img src="../assets/dog_icon.svg" class="logo" alt="Strona główna" />
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
      <li>
        <Searchbar />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar-container {
  position: sticky;
  height: 80px;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  font-weight: 600;
}

.center {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  align-items: center;
}

.logo-wrapper {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 24px solid transparent;
  background-clip: content-box;
  transition: transform 0.5s ease;
}

.logo-wrapper:hover {
  border: 24px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
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
</style>
