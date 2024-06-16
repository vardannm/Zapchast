<template>
  <div class="hero">
    <div class="hero-content">
      <div class="content">
        <h1 class="text-4xl font-bold text-sky-1000 mb-4">Welcome to Our Website</h1>
        <p class="text-3xl text-sky-900 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <router-link to="/about" ><button><span>Read More</span></button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  background-image: url('C:/Users/User/Desktop/animals/animals/assets/pictures/hero.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.hero-content {
  text-align: center;
}

.content {
  border: solid transparent 1px;
  width: 100%;
  background-color: #e7e7e7dc;
  padding: 2rem; /* Add padding to give some space inside the content box */
}



button {
  border-radius: 4px;
  background-color: #126472;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 32px;
  padding: 16px;
  width: 220px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 36px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
}

button{
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button:after {
  content: '»';
  position: absolute;
  opacity: 0;  
  top: 14px;
  right: -20px;
  transition: 0.5s;
}

button:hover{
  padding-right: 24px;
  padding-left:8px;
}

button:hover:after {
  opacity: 1;
  right: 10px;
}
</style>
