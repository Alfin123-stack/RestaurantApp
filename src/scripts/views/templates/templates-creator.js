import CONFIG from '../../globals/config'

const createdCardresto = (resto) =>
    `
    <div class="card-resto-2" tabindex="0">
    <div class="card-head">
        <picture>
            <source loading="lazy" type="image/jpeg" media="(max-width: 600px)" srcset="${CONFIG.BASE_IMG_URL_SMALL}${resto.pictureId}">
            <img loading="lazy" src="${CONFIG.BASE_IMG_URL}${resto.pictureId}" alt="Picture resto">
        </picture>
    </div>

    <div class="body-card">
        <div class="nama-resto">
            <h3 class="title-resto" tabindex="0"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
        </div>
        <div class="lokasi-resto">
            <span tabindex="0">RP - ${resto.city} - <span>⭐️</span> ${resto.rating}</span>
        </div>
        <div class="jam-resto">
            <button class="waktu-resto" type="button">18.15</button>
            <button class="waktu-resto" type="button">18.15</button>
            <button class="waktu-resto" type="button">18.15</button>
        </div>
    </div>
  </div>
        `

const createdItemDetailTemplate = (resto) => `
        <div class="detail-item">
        <div class="detail-img">
            <picture>
                <source loading="lazy" type="image/jpeg" media="(max-width: 600px)" srcset="${CONFIG.BASE_IMG_URL_SMALL}${resto?.pictureId}">
                <img loading="lazy" src="${CONFIG.BASE_IMG_URL}${resto?.pictureId}" 
                    alt="Detail Resto">
            </picture>
        </div>

        <div class="wrap-about-desc">
            <div class="detail-about">
                <h1 tabindex="0" ><i class="fa-solid fa-shop"></i>${resto?.name}</h1>
                <div class="wrap-rating-msg-location">
                    <p tabindex="0"><span>⭐️</span>4.5</p>
                    <p tabindex="0"><i class="fa-solid fa-utensils resto"></i> ${resto?.categories[0].name}</p>
                    <p tabindex="0"><i class="fa-solid fa-location-dot location"></i> ${resto?.city}</p>
                    <p tabindex="0"><i class="fa-solid fa-message message"></i> ${resto?.address}</p>
                </div>
            </div>

            <div class="detail-menu">
                <h2 tabindex="0">Menu : </h2>
                <div class="allMenu">
                    <div class"menuFoods">
                        <p tabindex="0" ><i class="fa-solid fa-bowl-food"></i> Foods : <ul id="foods"></ul></p>
                    </div>
                    <div class"menuDrinks">
                        <p tabindex="0"><i class="fa-solid fa-mug-saucer"></i> Drinks : <ul id="drinks"></ul></p>
                    </div>
                
                </div>
            </div>

            <div class="detail-desc">
                <h2 tabindex="0">Description : </h2>
                <p tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero ipsam illo est distinctio nostrum quibusdam impedit nulla laborum commodi facere consequatur, officia, nisi autem expedita dolorem numquam quia quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem ut laboriosam. Dicta quam tenetur sapiente, laudantium nostrum architecto error!</p>
            </div>
        </div>


        <div class="detail-review">
            <h2 tabindex="0">Reviews</h2>
            <div class="wrap-review">
                <div class="review-star">
                    <h3 tabindex="0">${resto?.rating}</h3>
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                </div>

                <div class="wrap-review-m">
                    <div class="review-m">
                        <span>5</span>
                        <div class="long-m meter-1"></div>
                    </div>
                    <div class="review-m">
                        <span>4</span>
                        <div class="long-m meter-2"></div>
                    </div>
                    <div class="review-m">
                        <span>3</span>
                        <div class="long-m meter-3"></div>
                    </div>
                    <div class="review-m">
                        <span>2</span>
                        <div class="long-m meter-4"></div>
                    </div>
                    <div class="review-m">
                        <span>1</span>
                        <div class="long-m meter-5"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="detail-comments">
            <h2 tabindex="0">Comments</h2>

            <form action="" class="form-comments" id="formComments">
                <input type="text" placeholder="Masukkan Nama" required id="reviewerName">
                <input type="text" id="reviewerComment" required placeholder="Tambahkan Komentarmu...">
                <button type="submit">Submit</button>
            </form>

            <div class="all-comments" id="allComments">

            </div>
        </div>

        </div>
`
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa-regular fa-heart"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

const createCommentTemplate = (customerReviews) => `
<div class="card-comment" tabindex="0">
<div class="user-comment">
    <div class="icon-user-comments"><span>M</span></div>

    <span id="customer-name" tabindex="0">${customerReviews.name}</span>
</div>

<div class="rating-tgl-comment">
    <span>⭐️⭐️⭐️⭐️⭐️</span>
    <span tabindex="0">${customerReviews.date}</span>
</div>

<div class="review-comment">
    <p tabindex="0" id="customer-comment">${customerReviews.review}</p>
</div>
</div>

`
const cardRestoTemplate = (data) =>
    `
    <div class="card-resto" tabindex="0">
        <div class="head-card">
            <h2 tabindex="0">${data.name}</h2>
        </div>
        <div class="body-card">
            <picture>
              <img loading="lazy" src="${data.pictureId}" alt="Picture resto">
            </picture>
            <div class="overlay">
              <div class="rating">
                  <span>⭐️</span>
                  <span class="rating-star"tabindex="0">${data.rating}</span>
              </div>
              <div class="place">
                  <i class="fa-solid fa-location-dot rating-location"></i>
                  <span tabindex="0">${data.city}</span>
              </div>
            </div>
        </div>
      </div>
    `
const cardFoodTemplate = (menu) =>
`
    <div class="food-card" tabindex="0">
        <div class="head-food-card">
            <picture>
                <img loading="lazy" src="${menu.Image}" alt="">
            </picture>
        </div>
        <div class="body-food-card">
            <h3 tabindex="0">${menu.Title}</h3>
        </div>
    </div>
`

const loading = async () => `
<div class="alfin" id="loading" >
<div class="loadingio-spinner-reload-9ta8b6qllib"><div class="ldio-5eim2yrpq9n">
    <div><div></div><div></div><div></div></div>
    </div></div>
</div>
`

const errorRequest = (error) => `
    <div class="error-request">
        <div class="statustext">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Whoops!! Error Request</span>
        </div>
        <p>${error}</p>
    </div>
`
const emptyLike = () => `
    <section class="empty-like">
        <h1 class="judul-empty">Restoran tidak ditemukan</h1>
        <button type="button"  onclick="location.href='#/home';">Ayo cari</button>
    </section>
`

export {
  createdCardresto,
  createdItemDetailTemplate,
  createCommentTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  cardRestoTemplate,
  cardFoodTemplate,
  loading,
  errorRequest,
  emptyLike
}
