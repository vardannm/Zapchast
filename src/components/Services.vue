<template>
  <div class="services">
    <h2 class="services-headline">Our Services</h2>
    <transition-group name="fade" tag="div" class="services-list">
      <router-link 
        v-for="(service, index) in services" 
        :key="service.title" 
        :to="{ name: 'service-details', params: { serviceName: service.title.toLowerCase() } }"
        class="service-item"
      >
        <img :src="service.image" :alt="service.title" class="service-image" />
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-description">{{ service.description }}</p>
      </router-link>
    </transition-group>
  </div>
</template>

<script setup>
import servicesData from './Json/Services.json';

const { services } = servicesData;
</script>

<style scoped>
.services {
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.services-headline {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.service-item {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  opacity: 0; /* Start with opacity 0 to animate in */
  animation: fadeIn 1.5s ease forwards; /* Apply animation directly */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.service-title {
  font-size: 1.5rem;
  margin: 10px 0;
}

.service-description {
  font-size: 1rem;
  color: #555;
}
</style>
