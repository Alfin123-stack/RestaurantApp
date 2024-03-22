import API_ENDPOINT from '../globals/api-endpoints'
import errorInitiator from '../utils/error-initiator'

class DaftarResto {
  static async listResto () {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTO)
      const responseJson = await response.json()
      return responseJson.restaurants
    } catch (error) {
      errorInitiator.notifyTouser(error)
      console.error(error)
    }
  }

  static async detailResto (id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id))
      const responseJson = await response.json()
      return responseJson.restaurant
    } catch (error) {
      errorInitiator.notifyTouser(error)
      console.error(error)
    }
  }
}

export default DaftarResto
