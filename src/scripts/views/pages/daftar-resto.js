import DaftarResto from '../../data/daftar-restaurant'
import '../../component/containerCardResto'
import '../../component/containerRecomendFood'
const daftarResto = {
  async render () {
    return `
        <!-- awal card resto -->
        <container-cardresto class="exploreResto" id="explore">
        </container-cardresto>
        <!-- akhir card resto -->
        `
  },

  async afterRender () {
    const restaurants = await DaftarResto.listResto()
    const restaurantsContainer = document.querySelector('container-cardresto')
    restaurantsContainer.restaurant = restaurants
  },

  async renderMainHome () {
    return `
    <!-- awal hero or landingpage -->
    <hero-element></hero-element>
    <!-- akhir hero or landingpage -->

    <!-- awal rekomendasi makanan-->
    <section class="food-recomend">
        <h2 tabindex="0">Cari Makanan Yang kamu mau</h2>
        <container-cardfoodrecomend  class="allFood">
            
        </container-cardfoodrecomend>
    </section>
    <!-- akhir rekomondasi makanan -->

    <!-- awal explore -->
    <section class="explore" id="explore">
        <h2 tabindex="0" class="judul-explore">Explore Your Restaurant</h2>
        
    </section>
    <!-- akhir explore -->
    

    <!-- awal footer -->
    <footer-copyright></footer-copyright>
    <!-- akhir footer -->
    `
  }
}

export default daftarResto
