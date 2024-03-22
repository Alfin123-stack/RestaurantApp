import { createdCardresto, emptyLike } from '../views/templates/templates-creator'
import { templateSkeletonCardRestoExplore } from '../views/templates/templates-skeleton'

class ContainerCardResto extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set restaurant (resto) {
    this._resto = resto
    this.render()
  }

  styleCard () {
    return `<style>
    *{
      margin : 0;
      padding : 0;
      box-sizing : border-box;
    }
    :host {
      display: grid;
      grid-template-columns: 1fr;
    }
    @media screen and (min-width: 600px) {
      :host {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    }
    @media screen and (min-width: 992px) {
      :host {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
      }
    }

    .card-resto-2 {
      width: 100%;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      overflow: hidden;
      margin-bottom: 1rem;
      transition: all 0.8s;
    }
    .card-resto-2:hover {
      transform: translateY(-20px);
    }
    .card-resto-2 .card-head {
      width: 100%;
      height: 180px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .card-head img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .card-resto-2 .body-card {
      width: 100%;
      padding: 20px;
    }
    .card-resto-2 .body-card .nama-resto {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-resto-2 .body-card .nama-resto h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .card-resto-2 .body-card .nama-resto h3 a {
      min-width: 44px;
      min-height: 44px;
      display: inline-block;
      text-decoration: none;
      color: black;
      transition: 0.3s;
    }
    .card-resto-2 .body-card .nama-resto h3 a:hover {
      color: rgb(59, 54, 54);
    }
    .card-resto-2 .body-card .lokasi-resto span {
      font-size: 1rem;
      font-weight: 500;
    }
    .card-resto-2 .body-card .lokasi-resto i{
      color: #ffc221;
      font-size:1rem
    }
    .card-resto-2 .body-card .jam-resto {
      margin-top: 1rem;
      display: flex;
      -moz-column-gap: 1rem;
           column-gap: 1rem;
      width: 100%;
    }
    .card-resto-2 .body-card .jam-resto .waktu-resto {
      cursor: pointer;
      min-width: 44px;
      min-height: 44px;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      color: white;
      background-color: #ffc221;
      border: none;
      font-family: inherit;
      font-size: 1rem;
      width: 100%;
      transition: all 0.2s;
    }
    .card-resto-2 .body-card .jam-resto .waktu-resto:hover {
      background-color: #fcb900;
    }

    .empty-like{
      height: 70vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      row-gap: 1.5rem;
      font-size: 1rem;
      grid-column: 1;

      @media screen and (min-width : 992px) {
        grid-column:2;
      }
  
      .judul-empty{
        color: #ffc221;
        a{
          text-decoration: none;
          color: black;
        }
      }
  
      button{
          border: none;
          min-width: 44px;
          min-height: 44px;
          padding: .8rem 1.8rem;
          cursor: pointer;
  
          font-family: inherit;
          font-size: .8rem;
          background-color: #ffc221;
          color: white;
          border-radius: 10px;
          transition: .3s all;
  
          &:hover{
              background-color: #f9b700;
          }
      }
  }

    .skeleton {
      animation: skeleton-loading 1s linear infinite alternate;
    }
    
    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 80%);
      }
      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
    
    .skeleton-text {
      width: 100%;
      height: 0.7rem;
      margin-bottom: 0.5rem;
      border-radius: 0.25rem;
    }
    
    .skeleton-text__body {
      width: 75%;
    }
    
    .skeleton-footer {
      width: 30%;
    }

    img[alt] {
      text-indent: -10000px;
    }
    
</style>`
  }

  render () {
    if (this._resto?.length > 0) {
      console.log(this._resto)
      this._renderFavoriteRestaurant()
    } else {
      this._renderEmptyFavoriteRestaurant()
    }
  }

  _renderEmptyFavoriteRestaurant () {
    this.shadowDOM.innerHTML = this.styleCard()
    this.shadowDOM.innerHTML += emptyLike()
  }

  _renderFavoriteRestaurant () {
    this.shadowDOM.innerHTML = this.styleCard()

    this._resto?.forEach(resto => {
      this.shadowDOM.innerHTML += templateSkeletonCardRestoExplore()
    })

    setTimeout(() => {
      this.shadowDOM.innerHTML = this.styleCard()
      this._resto?.forEach(resto => {
        this.shadowDOM.innerHTML += createdCardresto(resto)
      })
    }, 300)
  }
}

customElements.define('container-cardresto', ContainerCardResto)

export default ContainerCardResto
