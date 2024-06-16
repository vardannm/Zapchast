<template>
  <Hero />
  <div class="home">
    <p class="home-headline text-sky-1000 text-4xl font-bold">{{ homeHeadline }}</p>
    <div class="content">
      <p class="content-text">{{ homeText }}</p>
      <img src="../../assets/pictures/home1.png" alt="Home Image" />
      </div>
      </div>
      <Info />
</template>

<script setup>
import content from './Json/Home.json'
import Hero from './Hero.vue'
import Info from './Info.vue';
// Destructure the JSON object to get the text content
const { homeHeadline, homeText } = content
</script>

<style scoped>
.home {
  height: 90vh;
  background: #e7f8fd;
  background-image: url('@/assets/pictures/bottom.png');
  background-size: cover;
  background-position: center;
}
.content {
  display: flex;
  gap: 200px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 70%;
}
.content-text {
  width: 400px;
  text-align: center;
  font-size: 20px;
  line-height: 25px;
}
.home-headline {
  padding-top:20px;
  text-align: center;
  font-size: 50px;
  line-height: 60px;
}

</style>
