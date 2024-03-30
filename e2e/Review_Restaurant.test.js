const assert = require('assert')

/* eslint-disable no-undef */
Feature('Review Restaurant')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('Review restaurant', async ({ I }) => {
  I.waitForElement('#loading', 5)
  I.seeElement('#loading')

  I.waitForVisible('.title-resto a', 5)
  const firstRestaurant = locate('.title-resto a')
  I.click(firstRestaurant)

  I.waitForVisible('.form-comments', 5)

  I.seeElement('#reviewerName')
  I.fillField('#reviewerName', 'indah')

  const customerName = await I.grabValueFrom('#reviewerName')

  // Verifikasi nilai yang telah diambil
  console.log('The value of the customer field is:', customerName)

  I.seeElement('#reviewerComment')
  I.fillField('#reviewerComment', 'enak bangettt')

  const customerComment = await I.grabValueFrom('#reviewerComment')

  // Verifikasi nilai yang telah diambil
  console.log('The value of the Username comment is:', customerComment)

  const beforerVisibleComment = await I.grabNumberOfVisibleElements('.card-comment')
  console.log('jumlah comment sebelumnya : ' + beforerVisibleComment)

  I.click('Submit')

  I.waitForElement('.card-comment', 5)
  I.seeElement('.card-comment')

  const aftervisibleComment = await I.grabNumberOfVisibleElements('.card-comment')
  console.log('jumlah comment setelahnya : ' + aftervisibleComment)

  assert.notEqual(beforerVisibleComment, aftervisibleComment)

  I.seeElement('#customer-name')
  I.seeElement('#customer-comment')

  const commentReviewer = []
  for (let i = 0; i < aftervisibleComment; i++) {
    const visibleName = await I.grabTextFrom(locate('#customer-name').at(i + 1))
    const visibleComment = await I.grabTextFrom(locate('#customer-comment').at(i + 1))

    commentReviewer.push({
      name: visibleName,
      comment: visibleComment
    })
  }

  const filterComment = commentReviewer.filter(reviewer => reviewer.name === customerName && reviewer.comment === customerComment)

  console.log(filterComment[0].name)
  assert.strictEqual(filterComment[0].name, customerName)
  assert.strictEqual(filterComment[0].comment, customerComment)
})
