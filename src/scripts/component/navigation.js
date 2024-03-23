class Navigation extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
        <style>
        *{
          margin : 0;
          padding : 0;
          box-sizing : border-box;
        }
        :host header{
          width: 100%;
          padding: 20px;
          background-color: #ffc221;
          color: white;
          position: fixed;
          box-shadow: 0 -5px 5px 5px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: space-between;
          z-index: 99;
        }
        @media screen and (min-width: 768px) {
          :host  header{
            padding: 20px 80px;
          }
        }
        :host  header .logo span {
          font-size: 1.5rem;
          font-weight: bolder;
        }
        :host header  #hamburgerMenu {
          color: white;
          font-size: 25px;
          cursor: pointer;
          min-width: 44px;
          min-height: 44px;
          display: inline-block;
          padding: 10px;
          border: none;
          background: transparent;
          z-index: 999;
        }

        :host header  #CloseMenu {
          color: white;
          font-size: 25px;
          cursor: pointer;
          min-width: 44px;
          min-height: 44px;
          display: inline-block;
          padding: 10px;
          border: none;
          background: transparent;
          z-index: 999;
          display: none;
        }
        @media screen and (min-width: 768px) {
          :host  header #hamburgerMenu {
            display: none;
            color: #ffc221;
            cursor: auto;
          }
          :host  header #CloseMenu {
            display: none;
            color: #ffc221;
            cursor: auto;
          }
        }

      }
        :host  #hamburgerMenu svg {
          color: white;
          font-size: 25px;
        }
        :host  header nav {
          position: absolute;
          right: 0;
          transform: translateX(500px);
          width: 50vw;
          transition: all 0.5s;
        }
        @media screen and (min-width: 768px) {
          :host  header nav {
            transform: translateX(0);
            flex-direction: row;
            position: static;
            width: 70%;
          }
        }
        :host  header nav ul {
          padding: 10px;
          height: 100vh;
          margin-top: 3em;
          list-style: none;
          display: flex;
          flex-direction: column;
          background-color: #ffc221;
        }
        @media screen and (min-width: 768px) {
          :host  header nav ul {
            height: auto;
            padding: 0;
            margin-top: 0;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: center;
          }
        }
        :host  header nav ul li #home {
          color: black;
        }
        :host  header nav ul li a {
          min-width: 44px;
          min-height: 44px;
          display: inline-block;
          padding: 10px;
          font-weight: 500;
          text-decoration: none;
          color: white;
          font-size: 1rem;
          transition: all 0.2s;
        }
        @media screen and (min-width: 768px) {
          :host  nav ul li a {
            font-size: 0.9rem;
          }
        }
        @media screen and (min-width: 992px) {
          :host  nav ul li a {
            font-size: 1rem;
          }
        }
        :host  nav ul li a:hover {
          color: black;
        }

        .open {
          transform: translateX(0) !important;
        }
        
        .body {
          opacity: 0.5;
        }
        
        </style>


        <header>
        <div class="logo">
            <span tabindex="0">Restoo Apps</span>
        </div>
        <!-- awal hamburger menu -->
        <button title="burger" id="hamburgerMenu">
            ☰
        </button>
        <button title="close" id="CloseMenu">
            ✖
        </button>
        <!-- akhir hamburger menu -->
        <nav class="ulToggle" tabindex="0">
            <ul>
                <li><a id="home" href="#/home">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/muhammad-alfin-alfarizi-51a79a256/" target="_blank">About Us</a></li>
                <li><a href="#explore">Explore Restaurant</a></li>
            </ul>
        </nav>
    </header>
            `
  }
}

customElements.define('navigation-bar', Navigation)
export default Navigation
