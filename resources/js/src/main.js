
import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax);

// axios
import axios from "./axios.js"
Vue.prototype.$http = axios;


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// i18n
import i18n from './i18n/i18n'

// Filters
import './filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// Import and use the auth mixin in all components.
import AuthMixin from './mixins/auth.js';
Vue.mixin(AuthMixin);

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


// Feather font icon
require('../../assets/css/iconfont.css');

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
