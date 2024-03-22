import { cardRestoTemplate } from '../views/templates/templates-creator'
import data from '../../public/data/DATA.json'
class ContainerCardFeaturedRestaurant extends HTMLElement {
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
      :host {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        -moz-column-gap: 1.5rem;
             column-gap: 1.5rem;
        overflow-x: scroll;
        padding: 10px !important;
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
      :host .card-resto {
        width: 360px;
      }/*# sourceMappingURL=featuredResto.css.map */
      .card-resto{
        width: 100%;
        height: 300px;
        margin-bottom: 1rem;
        border-radius: 2rem;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: all .8s;
      
        &:hover{
          transform: translateY(-10px);
        }
      
        position: relative;
        .head-card{
          padding: 40px;
          text-align: center;
          background-color: #ffc221;
          color: white;
          h2{
            font-size: 1.2rem;
          }
        }
      
        .body-card{
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
      
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
      
          .over-lay{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
          
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .rating{
            background-color: white;
            padding: 10px;
            width: 30%;
            color: black;
            border-radius: 10px;
            text-align: center;
      
            position: absolute;
            bottom: 0;
            right: 0;
      
            margin-bottom: 4rem;
            margin-right: 1rem;
      
            @media screen and (min-width :600px) {
              width: 35%;
          }
            i{
              color: #ffc221;
              margin-right: 1rem;
            }
            span{
              color: #ffc221;
            }
            span{
              font-weight: bolder;
              font-size: .9rem;
            }
            .rating-star{
              color: black;
            }
            .rating-location{
              font-size: .9rem;
              color : red;
            }
        }
      
          .place{
            background-color: white;
            padding: 10px;
            width: 30%;
            color: black;
            border-radius: 10px;
            text-align: center;
      
            position: absolute;
            bottom: 0;
            right: 0;
            
            margin-right: 1rem;
            margin-bottom: 1rem;
      
            @media screen and (min-width :600px) {
              width: 35%;
          }
            i{
              color: red;
              margin-right: .5rem;
            }
            svg{
              color: red;
            }
            span{
              font-weight: bolder;
              font-size: .8rem;
            }
          }
      
        }
      }
      
        </style>
    `
    data?.restaurants?.forEach(restaurant => {
      this.shadowDOM.innerHTML += cardRestoTemplate(restaurant)
    })
  }
}

customElements.define('container-cardfeaturedrestaurant', ContainerCardFeaturedRestaurant)

export default ContainerCardFeaturedRestaurant
