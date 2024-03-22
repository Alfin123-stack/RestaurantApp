import { errorRequest } from '../views/templates/templates-creator'
const errorInitiator = {
  notifyTouser (error) {
    const navbar = document.querySelector('header')
    const ul = document.querySelector('.ulToggle')
    const main = document.querySelector('#utama')
    main.innerHTML = errorRequest(error.status)
    ul.style.display = 'none'
    navbar.style.display = 'none'
  }
}

export default errorInitiator
