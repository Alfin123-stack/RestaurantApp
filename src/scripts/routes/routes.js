import daftarResto from '../views/pages/daftar-resto'
import Detail from '../views/pages/detail-resto'
import favorite from '../views/pages/favorite-resto'

const routes = {
  '/': daftarResto,
  '/home': daftarResto,
  '/detail/:id': Detail,
  '/favorite': favorite
}

export default routes
