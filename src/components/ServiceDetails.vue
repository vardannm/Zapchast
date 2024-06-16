<template>
    <div class="service-details">
      <p class="service-title">{{ serviceTitle }}</p>
      <div class="products-list">
        <div 
          v-for="product in products" 
          :key="product.name" 
          class="product-item"
          @click="addToBag(product)"
        >
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h3 class="product-title">{{ product.name }}</h3>
          <p class="product-price">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import servicesData from './Json/Services.json'
  import { useBagStore } from './bagStore.js'
  
  const route = useRoute()
  const serviceName = route.params.serviceName
  const service = servicesData.services.find(s => s.title.toLowerCase() === serviceName.toLowerCase())
  
  const serviceTitle = computed(() => service.title)
  const products = computed(() => service.products)
  
  const bagStore = useBagStore()
  
  function addToBag(product) {
    bagStore.addToBag(product)
  }
  </script>
  
  <style scoped>
  .service-details {
    padding: 50px 20px;
    text-align: center;
    background-color: #f9f9f9;
    height:85vh;
  }
  
  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .service-title{
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
  .product-item {
    width: 300px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: left;
    cursor: pointer;
  }
  
  .product-item:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .product-title {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  
  .product-price {
    font-size: 1rem;
    color: #555;
  }
  </style>
  