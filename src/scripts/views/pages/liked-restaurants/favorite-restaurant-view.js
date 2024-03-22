class FavoriteRestaurantView {
  getTemplate () {
    return `
    <!-- awal card resto -->
    <section class="favoriteResto" id="favoriteResto">
        <input id="query" type="text" placeholder="Search here.....">
        <h1 tabindex="0">Your Favorite Resto</h1>
        <container-cardresto class="exploreResto" id="explore">
        </container-cardresto>
    </section>
    <!-- akhir card resto -->
    `
  }

  runWhenUserIsSearching (callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value)
    })
  }

  showFavoriteRestaurants (restaurants) {
    document.getElementById('explore').restaurant = restaurants
  }

  _getEmptyRestaurantTemplate () {
    return `
    <section class="empty-like">
      <i class="fa-solid fa-store"></i>
      <h1>Belum ada restoran yang kamu favoritkan</h1>
      <button type="button"  onclick="location.href='#/home';">Ayo cari</button>
    </section>
    `
  }
}

export default FavoriteRestaurantView
