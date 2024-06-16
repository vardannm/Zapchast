<template>
    <div class="bag-dropdown">
      <div class="dropdown-header">
        <h3>Your Bag</h3>
        <button @click="$emit('close')">Close</button>
      </div>
      <div class="dropdown-content">
        <div v-if="items.length === 0">Your bag is empty.</div>
        <div v-else>
          <div v-for="(item, index) in items" :key="index" class="bag-item">
            <img :src="item.image" :alt="item.name" class="item-image" />
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p>{{ item.price }}</p>
              <button @click="removeFromBag(index)">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useBagStore } from '../components/bagStore.js'
  
  const bagStore = useBagStore()
  
  function removeFromBag(index) {
    bagStore.removeFromBag(index)
  }
  
  const items = bagStore.items
  </script>
  
  <style scoped>
  .bag-dropdown {
    position: absolute;
    top: 40px;
    right: 0;
    width: 300px;
    max-height: 400px;
    overflow-y: auto;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #126472;
    color: white;
  }
  
  .dropdown-content {
    padding: 10px;
  }
  
  .bag-item {
    display: flex;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  
  .item-image {
    width: 50px;
    height: 50px;
  }
  
  .item-details {
    flex: 1;
  }
  
  .item-details h4 {
    margin: 0;
    font-size: 16px;
  }
  
  .item-details p {
    margin: 5px 0 0;
    color: #555;
  }
  </style>
  