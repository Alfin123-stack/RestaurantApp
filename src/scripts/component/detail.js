import { createdItemDetailTemplate } from '../views/templates/templates-creator'
class ContainerDetail extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set detail (value) {
    this._detail = value
    this.render()
  }

  render () {
    this.innerHTML = createdItemDetailTemplate(this._detail)
  }
}

customElements.define('container-detail', ContainerDetail)

export default ContainerDetail
