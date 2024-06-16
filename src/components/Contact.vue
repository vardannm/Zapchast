<!-- Contact.vue -->

<template>
    <div class="contact">
      <h2 class="contact-headline">Contact Us</h2>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = () => {
    alert(`Message sent!\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`);
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
    height:84vh;
  }
  
  .contact-headline {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .form-group {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  label {
    font-size: 1.2rem;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #126472;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0f505c;
  }
  </style>
  