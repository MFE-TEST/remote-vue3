import { createApp } from 'vue';
import App from './App.vue';

function mount(el) {
  const app = createApp(App);
  app.mount(el);
}

const root = document.getElementById('_vue3_remote');

if (root) {
  mount(root);
}

export { mount };
