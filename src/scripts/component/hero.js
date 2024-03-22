import { templateSkeletonHero } from '../views/templates/templates-skeleton'

class Hero extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  heroElement () {
    return `
    <section class="hero" tabindex="0">
    <picture>
      <source type="image/webp" media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.webp">
      <source type="image/webp" media="(min-width: 600px)" srcset='./images//heros/hero-image_2-large.webp' 
           alt="dirt rally poster">
      <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
      <source type="image/jpeg" media="(min-width: 600px)" srcset='./images/heros/hero-image_2-large.jpg' 
           alt="dirt rally poster">
           <img src='./images/heros/hero-image_2.jpg' 
           alt="">
    </picture>
    <div class="over-lay">
      <h1 tabindex="0">THE BEST RESTAURANT<br><span>IN YOUR TOWN</span></h1>
      <p tabindex="0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </div>
  </section>
                `
  }

  render () {
    this.innerHTML = templateSkeletonHero()

    setTimeout(() => {
      this.innerHTML = this.heroElement()
    }, 500)
  }
}

customElements.define('hero-element', Hero)
export default Hero
