import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./Routes"

const app = createApp(App)

app.use(router)
console.log(router)

app.mount("#app")
