import UrlParser from '../../routes/url-parser'
import DaftarResto from '../../data/daftar-restaurant'
import { createCommentTemplate } from '../templates/templates-creator'
import commentSubmit from '../../utils/comments-initiator'
import LikeButtonInitiator from '../../utils/like-initiator'
import '../../component/detail'

const Detail = {
  async render () {
    return `
      <!-- awal detail -->
      <container-detail class="detail" id="detail">
      </container-detail>
      <div id="likeButtonContainer"></div>
      <!-- akhir detail -->
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await DaftarResto.detailResto(url.id)

    this._renderDetailPage(restaurant)

    this._renderAllComment(restaurant)

    this._renderAlldrinks(restaurant)

    this._renderAllfoods(restaurant)

    commentSubmit.init(url.id)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating
      }
    })
  },

  _renderDetailPage (restaurant) {
    console.log(restaurant.customerReviews)
    const restaurantContainer = document.querySelector('container-detail')
    restaurantContainer.detail = restaurant
  },

  _renderAllfoods (restaurant) {
    const foods = restaurant.menus.foods
    for (const food of foods) {
      const li = document.createElement('li')
      li.setAttribute('tabindex', '0')
      li.innerText = food.name
      console.log(li)
      const containerFoods = document.querySelector('#foods')
      containerFoods.append(li)
    }
  },

  _renderAlldrinks (restaurant) {
    const drinks = restaurant.menus.drinks
    for (const drink of drinks) {
      const li = document.createElement('li')
      li.setAttribute('tabindex', '0')
      li.innerText = drink.name
      console.log(li)
      const containerFoods = document.querySelector('#drinks')
      containerFoods.append(li)
    }
  },

  _renderAllComment (comment) {
    comment.customerReviews.forEach(review => {
      const commentsContainer = document.querySelector('#allComments')
      commentsContainer.innerHTML += createCommentTemplate(review)
    })
  }
}

export default Detail
