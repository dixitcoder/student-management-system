/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from './router/index' // Import Vue Router instance

const app = createApp(App)

// Register plugins and components
registerPlugins(app)

// Use Vue Router
app.use(router)

// Mount the app
app.mount('#app')
