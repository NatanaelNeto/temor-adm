import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdWarningRound, OiBlocked, PrInfo } from "oh-vue-icons/icons";

addIcons(PrInfo, MdWarningRound, OiBlocked);

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.mount("#app")