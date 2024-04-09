<script setup></script>

<template>
  <form class="search-container center nav-box">
    <img src="../../assets/search.svg" class="logo search-icon" alt="search" />

    <input class="nav-input" type="text" placeholder="Szukaj" />
  </form>
</template>

<style scoped>
.search-container {
  height: 48px;
  width: 100%;
  background-color: rgb(241, 241, 241);
  border-radius: 24px;
}

.search-icon {
  margin-left: -8px;
}

.nav-input {
  width: 90%;
  margin-right: auto;
  border: 0;
  height: 24px;
  background-color: inherit;
  outline: none;
  font-size: 16px;
}
</style>
