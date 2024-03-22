const assert = require('assert')

/* eslint-disable no-undef */
Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('Liking one restaurant', async ({ I }) => {
  I.waitForElement('.judul-empty', 5)
  I.see('Restoran tidak ditemukan', '.judul-empty')

  I.amOnPage('/#/home')

  I.seeElement('#loading')

  I.waitForVisible('.title-resto', 5)
  I.seeElement('.title-resto')
  const firstRestaurant = locate('.title-resto a')
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.waitForElement('#likeButton', 5)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.waitForVisible('.card-resto-2', 5)
  I.seeElement('.card-resto-2')
  const likedRestaurantTitle = await I.grabTextFrom('.title-resto')
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})

Scenario('Unliking one restaurant', async ({ I }) => {
  I.waitForElement('.judul-empty', 5)
  I.see('Restoran tidak ditemukan', '.judul-empty')

  I.amOnPage('/#/home')
  I.seeElement('#loading')

  I.waitForVisible('.title-resto', 5)
  I.seeElement('.title-resto')
  const firstRestaurant = locate('.title-resto a')
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.waitForElement('#likeButton', 5)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.waitForVisible('.card-resto-2', 5)
  I.seeElement('.card-resto-2')
  const likedRestaurantTitle = await I.grabTextFrom('.title-resto')
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)

  const firstFavoriteRestaurant = locate('.title-resto a')
  I.click(firstFavoriteRestaurant)

  I.waitForElement('#likeButton', 5)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')

  I.waitForElement('.judul-empty', 5)
  I.see('Restoran tidak ditemukan', '.judul-empty')
})
