<template>
  <div class="lightbox">
    <img :src="img.url" alt="" class="thumb" @click="modalIsVisible = true">
    <transition name="fade">
      <div class="modal" v-if="modalIsVisible">
        <div class="overlay" @click="modalIsVisible = false"></div>
        <div class="content">
          <img :src="img.url" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
