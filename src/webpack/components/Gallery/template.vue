<template>
  <div class="gallery">
    <div class="item" v-for="img in images">
      <lightbox-component :img="img"></lightbox-component>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style scoped src="./style.css"></style>
