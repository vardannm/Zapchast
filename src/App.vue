<template>
  <div>
    <Navbar />
    <router-view /> 
    <!-- Other content -->
     <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
/* Add global styles here if needed */
</style>
