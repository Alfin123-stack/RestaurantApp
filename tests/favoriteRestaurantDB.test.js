/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract'
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant'

describe('Favorite restaurant Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurant.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurant)
})
