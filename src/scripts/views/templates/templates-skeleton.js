const templateSkeletonCardRestoExplore = () => `
<div class="card-resto-2" tabindex="0">
<div class="card-head">
    <picture>
        <img class=" skeleton" alt>
    </picture>
</div>

<div class="body-card">
    <div class="nama-resto">
      <div class="skeleton skeleton-text skeleton-text__body"></div>
    </div>
    <div class="lokasi-resto">
      <div class="skeleton skeleton-text skeleton-text__body"></div>
    </div>
    <div class="jam-resto">
        <button class="skeleton waktu-resto" type="button"></button>
        <button class="skeleton waktu-resto" type="button"></button>
        <button class="skeleton waktu-resto" type="button"></button>
    </div>
</div>
</div>`

const templateSkeletonFoodRecomend = () => ` 
<div class="food-card" tabindex="0">
    <div class="head-food-card">
        <picture>
            <img class="skeleton" alt>
        </picture>
    </div>
    <div class="body-food-card">
        <h3 tabindex="0"></h3>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
    </div>
</div>`

const templateSkeletonHero = () =>
`
    <section class="hero" tabindex="0">
        <picture>
            <img class="skeleton" alt=>
        </picture>
        <div class="over-lay">
            <div class="skeleton skeleton-text skeleton-text__body"></div>
            <div class="skeleton skeleton-text skeleton-footer"></div>
            <div class="skeleton skeleton-text skeleton-text__body"></div>
        </div>
    </section>
`
export { templateSkeletonFoodRecomend, templateSkeletonCardRestoExplore, templateSkeletonHero }
