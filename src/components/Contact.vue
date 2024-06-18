<template>
  <div class="contact">
    <div class="login-field">
      <div class="login-background">
        <div class="login-title">
          <span>Contact Us</span>
        </div>
        <div class="login-form">
          <form @submit.prevent="handleSubmit">
            <div class="field form-group">
              <input type="text" id="name" v-model="form.name" placeholder="Name" required />
            </div>
            <div class="field form-group">
              <input type="email" id="email" v-model="form.email" placeholder="Email" required />
            </div>
            <div class="field form-group">
              <textarea id="message" v-model="form.message" placeholder="Message" required></textarea>
            </div>
            <div class="field button-field">
              <button class="button button-login" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <span class="square square-tl"></span>
      <span class="square square-tr"></span>
      <span class="square square-bl"></span>
      <span class="square square-br"></span>
      <span class="star star1"></span>
      <span class="star star2"></span>
      <span class="star star3"></span>
    </div>
   
   
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap');


.contact {
  background: linear-gradient(to right bottom, #bdeffc, #6aa3bd);
  position: relative;
  overflow: hidden; /* Ensure parent has overflow hidden */
}

.overflow-example {
  width: 100%;
  overflow-y: auto; /* Enable vertical scrolling */
  background: white;
  padding: 10px;
  box-shadow: 0 0 5px 0 rgba(22, 22, 22, 0.1);
}

.login-field {
  min-height: 76vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Ensure this also contains overflow */
}

.login-background {
  background: #fff;
  min-height: 600px;
  min-width: 400px;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border-radius: 10px;
  z-index: 5;
  display: flex;
  flex-flow: column;
  box-shadow: 0 0 5px 0 rgba(22, 22, 22, 0.1);
}

.login-title {
  position: relative;
  color: #ffffff;
  text-align: center;
  margin-top: 50px;
  padding: 10px;
  border-top: 5px solid rgba(255, 255, 255, 0.1);
  border-bottom: 5px solid rgba(255, 255, 255, 0.1);
}

.login-title span {
  font-size: 30px;
  letter-spacing: 3px;
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  flex-grow: 1;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.field {
  margin: 20px 0;
  text-align: center;
}

input,
textarea {
  font-family: Quicksand;
  border: 0px;
  padding: 20px 80px;
  border-radius: 10px;
  outline: none;
  text-align: center;
  box-shadow: 0 2px 5px 0 rgba(50, 50, 50, 0.2);
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7));
  backdrop-filter: blur(10px);
  color: #111;
  font-size: 16px;
}

textarea {
  padding: 20px;
  height: 150px;
  resize: none;
  width: 340px;
}

::placeholder {
  color: #666;
  letter-spacing: 2px;
}

.button-field {
  display: flex;
  flex-flow: column;
}

button {
  font-family: Quicksand;
  flex-grow: 1;
  border: 0px;
  padding: 15px 50px;
  outline: none;
  text-align: center;
  cursor: pointer;
  margin: 10px;
  transition: 1s;
  box-shadow: 0 2px 5px 0 rgba(50, 50, 50, 0.2);
  font-size: 16px;
  border-radius: 10px;
}

button:hover {
  transform: translateY(-3px);
  transition: 1s;
}

.button-login {
  background: linear-gradient(to right bottom, rgb(223, 55, 153), rgb(202, 44, 128));
  color: #fff;
}

.square {
  height: 100vh;
  width: 50vw;
  display: table;
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(45deg);
}

.square.square-tl {
  top: -80%;
  left: -10%;
  animation: bounce 6s infinite ease-in-out;
  background: rgb(34, 34, 34, 0.1);
  z-index: 50;
}

.square.square-tr {
  top: 0%;
  right: -30%;
  animation: bounce 5s infinite ease-in-out;
}

.square.square-bl {
  bottom: -70%;
  left: -15%;
  animation: bounce 4s infinite ease-in-out;
}

.square.square-br {
  bottom: 0%;
  right: -40%;
  animation: bounce 3s infinite ease-in-out;
  background: rgb(34, 34, 34, 0.1);
}

@keyframes bounce {
  0% {
    transform: translateY(0px) rotate(45deg);
  }
  50% {
    transform: translateY(20px) rotate(45deg);
    border-radius: 50px;
  }
  100% {
    transform: translateY(0px) rotate(45deg);
  }
}

.star {
  height: 50px;
  width: 50px;
  display: table;
  position: absolute;
  box-shadow: 0 0 5px 0 rgba(34, 34, 34, 0.5);
  transition: 0.5s;
}

.star1 {
  bottom: -10%;
  left: -30%;
  transform: rotate(-30deg);
  animation: sweep 4s infinite;
  background: rgba(34, 34, 34, 0.5);
}

.star2 {
  bottom: -30%;
  left: -10%;
  transform: rotate(-30deg);
  animation: sweep 3s infinite;
  background: rgb(255, 255, 255, 0.5);
}
.star3 {
  bottom: -50%;
  left: -60%;
  transform: rotate(-30deg);
  animation: sweep 3s infinite;
  background: rgb(255, 255, 255, 0.5);
}

@keyframes sweep {
  100% {
    bottom: 120%;
    left: 120%;
    transform: rotate(360deg);
  }
}
</style>
