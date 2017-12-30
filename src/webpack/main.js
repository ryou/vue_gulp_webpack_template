import Vue from 'vue';

import AppComponent from './components/App/template.vue';
import GalleryComponent from './components/Gallery/template.vue';
import LightBoxComponent from './components/LightBox/template.vue';

Vue.component('gallery-component', GalleryComponent);
Vue.component('lightbox-component', LightBoxComponent);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render(h) {
    return h(AppComponent);
  },
});
