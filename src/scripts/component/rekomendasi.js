class RekomendasiSection extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
      <style>
          *{
            margin : 0;
            padding : 0;
            box-sizing : border-box;
          }
          :host {
            display :block;
            margin-top: 2rem;
            width: 100%;
            height: 300px;
            color: white;
            background-image: url(./images/heros/hero-image_4.webp);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }
          :host .Rekomendasi h2 {
            font-size: 1.8rem;
            font-weight: 900;
            z-index: 1;
          }
          :host .button-rekomen {
            min-width: 44px;
            min-height: 44px;
            border: none;
            padding: 1em 2em;
            font-family: inherit;
            font-size: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            z-index: 1;
            font-weight: 500;
            cursor: pointer;
            transition: 0.5s;
            background-color: #ffc221;
            color: white;
          }
          :host .button-rekomen:hover {
            background-color: #ffbb00;
          }/*# sourceMappingURL=rekomendasi.css.map */
      </style>

      <section class="Rekomendasi" id="rekomendasi" tabindex="0">
        <h2 tabindex="0">
            " Rekomendasi tempat makan yang harus kamu cobain "
        </h2>
        <button type="button" class="button-rekomen">
            Click Here
        </button>
    </section>
    `
  }
}

customElements.define('rekomendasi-section', RekomendasiSection)

export default RekomendasiSection
