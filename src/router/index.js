import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Services from '../components/Services.vue'; // Import Services component
import Contact from '../components/Contact.vue';
import ServiceDetails from '../components/ServiceDetails.vue';
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/services', name: 'services', component: Services }, // Define Services route
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/services/:serviceName', name: 'service-details', component: ServiceDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
