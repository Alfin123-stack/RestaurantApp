class FooterCopyright extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
      *{
          margin : 0;
          padding : 0;
          box-sizing : border-box;
        }
        footer{
            width: 100%;
            padding: 1.2rem;
            font-size: 1rem;
            color: #ffc221;
            background-color: white;
            text-align: center;
            font-weight: 500;
        }
        }
      </style>
      <footer tabindex="0">
        Copyright © 2024 - Restoo Apps
    </footer>`
  }
}

customElements.define('footer-copyright', FooterCopyright)
export default FooterCopyright
