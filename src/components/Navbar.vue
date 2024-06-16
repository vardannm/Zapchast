<template>
  <nav class="sticky top-0 bg-gray-800 p-8 opacity z-10">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Wrap Zapchast in router-link to go to home -->
      <router-link to="/" class="text-white text-4xl font-bold">
        Zapchast
      </router-link>
      <div class="hidden md:flex text-2xl space-x-10">
        <router-link
          to="/"
          class="text-white hover:text-gray-300 transition duration-300"
          :class="{ 'font-bold': $route.path === '/' }"
        >
          Home
        </router-link>
        <router-link
          to="/services"
          class="text-white hover:text-gray-300 transition duration-300"
          :class="{ 'font-bold': $route.path === '/services' }"
        >
          Services
        </router-link>
        <router-link
          to="/contact"
          class="text-white hover:text-gray-300 transition duration-300"
          :class="{ 'font-bold': $route.path === '/contact' }"
        >
          Contact
        </router-link>
        <div class="relative" @click="toggleBagDropdown">
          <i class="fas fa-shopping-bag text-white cursor-pointer"></i>
          <span class="bag-count">{{ bagItems.length }}</span>
          <BagDropdown v-if="isBagDropdownOpen" :items="bagItems" @close="toggleBagDropdown" />
        </div>
      </div>
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen" class="md:hidden">
      <router-link
        to="/"
        class="block text-white py-2 hover:bg-gray-700 transition duration-300"
        :class="{ 'font-bold': $route.path === '/' }"
      >
        Home
      </router-link>
      <router-link
        to="/services"
        class="block text-white py-2 hover:bg-gray-700 transition duration-300"
        :class="{ 'font-bold': $route.path === '/services' }"
      >
        Services
      </router-link>
      <router-link
        to="/contact"
        class="block text-white py-2 hover:bg-gray-700 transition duration-300"
        :class="{ 'font-bold': $route.path === '/contact' }"
      >
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import BagDropdown from './BagDropdown.vue'

const isMenuOpen = ref(false)
const isBagDropdownOpen = ref(false)
const bagItems = ref([]) // Initialize with empty array or fetched bag items

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function toggleBagDropdown() {
  isBagDropdownOpen.value = !isBagDropdownOpen.value
}
</script>

<style scoped>
.sticky {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10; /* Ensure the navbar stays on top */
}

.bag-icon {
  position: relative;
  cursor: pointer;
}

.bag-count {
  position: absolute;
  top: -15px;
  right: -30px;
  background: rgba(161, 195, 214, 0.384);
  color: white;
  border-radius: 50%;
  padding: 2px 15px;
  font-size: 20px;
}
</style>
