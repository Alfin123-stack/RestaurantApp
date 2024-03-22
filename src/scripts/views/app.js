import drawer from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import { loading } from './templates/templates-creator'

class App {
  constructor ({ drawer, button, close, mainContent, nextPage }) {
    this._button = button
    this._drawer = drawer
    this._close = close
    this._mainContent = mainContent
    this._nextPage = nextPage

    this._initialAppShell()
  }

  _initialAppShell () {
    drawer.init({
      button: this._button,
      drawer: this._drawer,
      close: this._close,
      mainContent: this._mainContent,
      nextPage: this._nextPage
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]

    if (url === '/' || url === '/home') {
      await this._renderhome(page)
    } else if (url === '/detail/:id') {
      await this._renderDetail(page)
    } else {
      await this._renderFavorite(page)
    }
  }

  async _renderhome (page) {
    const home = document.querySelector('#utama')
    home.innerHTML = await loading()
    setTimeout(async () => {
      home.innerHTML = await page.renderMainHome()
      const allRestaurant = document.querySelector('.explore')
      allRestaurant.innerHTML += await page.render()
      await page.afterRender()
      this._skipelement()
    }, 1000)
  }

  async _renderDetail (page) {
    const detail = document.querySelector('#utama')
    detail.innerHTML = await page.render()
    await page.afterRender()
    this._skipelement()
  }

  async _renderFavorite (page) {
    const detail = document.querySelector('#utama')
    detail.innerHTML = await loading()
    setTimeout(async () => {
      detail.innerHTML = await page.render()
      await page.afterRender()
      this._skipelement()
    }, 1000)
  }

  _skipelement () {
    const myCustomElement = document.querySelector('skip-content')
    // Access the Shadow DOM
    const shadowRoot = myCustomElement.shadowRoot
    const skipLinkElem = shadowRoot.querySelector('a')
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#utama').focus()
    })
  }
}

export default App
