<script setup></script>

<template>
  <ul id="carusel-wrapper">
    <li class="carusel-item">
      <img class="carusel-image" src="../assets/images/dog.jpg" />
      <section class="carusel-text">
        <h1>Psy</h1>
        <span>Zobacz więcej</span>
      </section>
    </li>
    <li class="carusel-item">
      <img class="carusel-image" src="../assets/images/cat.jpg" />
      <section class="carusel-text">
        <h1>Koty</h1>
        <span>Zobacz więcej</span>
      </section>
    </li>
    <li class="carusel-item">
      <img class="carusel-image" src="../assets/images/hamster.jpg" />
      <section class="carusel-text">
        <h1>Chomiki</h1>
        <span>Zobacz więcej</span>
      </section>
    </li>
    <li class="carusel-item">
      <img class="carusel-image" src="../assets/images/peungin.jpg" />
      <section class="carusel-text">
        <h1>Pingwiny</h1>
        <span>Zobacz więcej</span>
      </section>
    </li>
    <li class="carusel-item">
      <img class="carusel-image" src="../assets/images/fox.jpg" />
      <section class="carusel-text">
        <h1>Lisy</h1>
        <span>Zobacz więcej</span>
      </section>
    </li>
    <li class="carusel-item">
      <img class="carusel-image" src="../assets/images/hedgehog.jpg" />
      <section class="carusel-text">
        <h1>Jeże</h1>
        <span>Zobacz więcej</span>
      </section>
    </li>
    <li class="carusel-item">
      <img class="carusel-image" src="../assets/images/deer.jpg" />
      <section class="carusel-text">
        <h1>Jelenie</h1>
        <span>Zobacz więcej</span>
      </section>
    </li>
    <li class="carusel-item">
      <img class="carusel-image item-element" src="../assets/images/bear.jpg" />
      <section class="carusel-text">
        <h1>Misie</h1>
        <span>Zobacz więcej</span>
      </section>
    </li>
  </ul>
</template>

<style scoped>
#carusel-wrapper {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 5px;
}

#carusel-wrapper::-webkit-scrollbar {
  height: 7px;
  width: 40px;
}

#carusel-wrapper::-webkit-scrollbar-track {
  margin: 0 40px;
}

#carusel-wrapper::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 7px;
  margin: 0 40px;

  background-color: rgba(0, 0, 0, 0.2);
}

.carusel-item {
  display: inline-block;
  width: 300px;
  height: 110px;
  margin-right: 10px;
  vertical-align: top;
  background-color: wheat;
  border-radius: 16px;
  cursor: pointer;
}

.carusel-image {
  background-size: cover;
  width: 80px;
  height: 90px;
  border: 1px solid rgba(255, 255, 255, 1) !important;
  border-radius: 20px;
  margin: 10px 28px;
}

.carusel-text {
  display: grid;
  margin-top: -84px;
  margin-left: 146px;
}

.carusel-text h1 {
  margin: 0;
}
</style>
