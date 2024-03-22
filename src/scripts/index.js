import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import App from './views/app.js'
import swRegister from './utils/sw-register.js'
import Navigation from './component/navigation.js'
import Hero from './component/hero.js'
import Booking from './component/booking.js'
import commentSubmit from './utils/comments-initiator.js'
import Skipcontent from './component/skipcontent.js'
import FooterCopyright from './component/footer.js'

// Select the custom element
const myCustomElement = document.querySelector('navigation-bar')
// Access the Shadow DOM
const shadowRoot = myCustomElement.shadowRoot

const app = new App({
  button: shadowRoot.querySelector('#hamburgerMenu'),
  drawer: shadowRoot.querySelector('.ulToggle'),
  close: shadowRoot.querySelector('#CloseMenu'),
  mainContent: document.querySelector('#utama'),
  nextPage: shadowRoot.querySelector('.ulToggle ul')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', async () => {
  await swRegister()
  app.renderPage()
})

window.addEventListener('submit', () => {
  app.renderPage()
})

console.log('Hello Coders! :)')
