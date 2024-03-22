const drawer = {
  init ({ button, drawer, close, mainContent, nextPage }) {
    button.addEventListener('click', (event) => {
      this.__toogleDrawer({ event, button, close, drawer, mainContent })
    })

    close.addEventListener('click', (event) => {
      this.__closerDrawer({ event, button, close, drawer, mainContent })
    })
    mainContent.addEventListener('click', (event) => {
      this.__closerDrawer({ event, button, close, drawer, mainContent })
    })

    nextPage.addEventListener('click', (event) => {
      this.__closerDrawer({ event, button, close, drawer, mainContent })
    })
  },

  __toogleDrawer ({ event, button, close, drawer, mainContent }) {
    event.stopPropagation()
    button.style.display = 'none'
    close.style.display = 'block'
    drawer.classList.toggle('open')
    mainContent.classList.toggle('body')
  },

  __closerDrawer ({ event, button, close, drawer, mainContent }) {
    event.stopPropagation()
    close.style.display = 'none'
    button.style.display = 'block'
    drawer.classList.remove('open')
    mainContent.classList.remove('body')
  }
}

export default drawer
