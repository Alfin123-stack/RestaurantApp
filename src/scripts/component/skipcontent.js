class Skipcontent extends HTMLElement {
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
      :host a{
        position: absolute;
        top: -100px;
        left: 0;
        background-color: white;
        color: #D24545;
        padding: 8px;
        z-index: 99999;
        padding: 1rem;
    
      }
       
      :host a:focus {
         top: 0;
      }
    </style>
    <a href="#utama" class="skip-link">Menuju ke konten</a>`
  }
}

customElements.define('skip-content', Skipcontent)
export default Skipcontent
