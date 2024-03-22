import Comment from '../data/comment-restaurant'
const commentSubmit = {
  init (id) {
    const form = document.querySelector('#formComments')
    form.addEventListener('submit', async () => {
      const nama = document.querySelector('#reviewerName').value
      const comment = document.querySelector('#reviewerComment').value
      const data = {
        id,
        name: nama,
        review: comment
      }
      console.log(data)
      await Comment.pushComment(data)
      form.reset()
      window.location.reload()
    })
  }
}

export default commentSubmit
