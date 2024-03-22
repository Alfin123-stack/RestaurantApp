import FavoriteRestaurant from '../../data/favorite-restaurant'
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter'
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter'
import FavoriteRestaurantView from './liked-restaurants/favorite-restaurant-view'

const view = new FavoriteRestaurantView()

const favorite = {
  async render () {
    return view.getTemplate()
  },

  async afterRender () {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurant })
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurant })
  }
}

export default favorite
