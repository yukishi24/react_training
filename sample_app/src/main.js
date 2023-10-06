import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import samplePage from './views/samplePage.vue';

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

  createApp(samplePage)
  .use(router)
  .use(vuetify)
  .mount('#app')