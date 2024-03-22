import { cardFoodTemplate } from '../views/templates/templates-creator'
import { templateSkeletonFoodRecomend } from '../views/templates/templates-skeleton'
import menu from '../../public/data/FOOD.json'

class ContainerCardFoodRecomend extends HTMLElement {
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
    return `
    <style>
      *{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
      }
        :host {
        width: 100%;
        height: auto;
        padding: 10px !important;
        display: grid;
        grid-template-columns: repeat(19, 1fr);
        overflow-x: scroll;
        -moz-column-gap: 2.5rem;
            column-gap: 2.5rem;
        /* Track */
        /* Handle */
        /* Handle on hover */
        }
        :host::-webkit-scrollbar {
        height: 7px;
        width: 7px;
        background: #ffc221;
        }
        :host::-webkit-scrollbar-track {
        background: #f1f1f1;
        }
        :host::-webkit-scrollbar-thumb {
        background: #ffc221;
        }
        :host::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
        :host::-webkit-scrollbar-thumb:horizontal {
        background: #ffc221;
        border-radius: 3px;
        }
        :host::-webkit-scrollbar-thumb:horizontal {
        background: #ffc221;
        border-radius: 5px;
        }
        
        .food-card {
            cursor: pointer;
            width: 100px;
            transition: all 0.5s;
          }
          @media screen and (min-width: 768px) {
            .food-card {
              width: 150px;
            }
          }
          .food-card:hover {
            transform: scale(1.1);
          }
          .food-card .head-food-card {
            width: 100%;
            height: 100px;
            border-radius: 50%;
            overflow:hidden;
          }
          @media screen and (min-width: 768px) {
            .food-card .head-food-card {
              height: 150px;
            }
          }
          .food-card .head-food-card img{
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
          }
          .food-card .body-food-card h3 {
            text-align: center;
            margin-top: 1rem;
            font-size: 0.7rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
          }
          @media screen and (min-width: 768px) {
            .food-card .body-food-card h3 {
              font-size: 0.8rem;
              -webkit-line-clamp: 3;
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
            </style>
    `
  }

  async render () {
    this.shadowDOM.innerHTML = this.styleCard()

    await menu?.d?.forEach(menuresto => {
      this.shadowDOM.innerHTML += templateSkeletonFoodRecomend()
    })

    setTimeout(() => {
      this.shadowDOM.innerHTML = this.styleCard()
      menu?.d?.forEach(menuresto => {
        this.shadowDOM.innerHTML += cardFoodTemplate(menuresto)
      })
    }, 300)
  }
}

customElements.define('container-cardfoodrecomend', ContainerCardFoodRecomend)

export default ContainerCardFoodRecomend
