import API_ENDPOINT from '../globals/api-endpoints'
class Comment {
  static async pushComment (data) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()
      console.log('Success:', result)
    } catch (error) {
      window.alert(error)
      console.error('Error:', error)
    }
  }
}

export default Comment
