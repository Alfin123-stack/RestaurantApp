"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[460],{683:()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,t(o.key),o)}}function t(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:String(t)}function r(n){var e="function"==typeof Map?new Map:void 0;return r=function(n){if(null===n||!function(n){try{return-1!==Function.toString.call(n).indexOf("[native code]")}catch(e){return"function"==typeof n}}(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,t)}function t(){return function(n,e,t){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var a=new(n.bind.apply(n,r));return t&&i(a,t.prototype),a}(n,arguments,a(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i(t,n)},r(n)}function o(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(o=function(){return!!n})()}function i(n,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},i(n,e)}function a(n){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},a(n)}var u=function(t){function r(){var e,t,i,u;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=this,i=r,i=a(i),e=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e)}(t,o()?Reflect.construct(i,u||[],a(t).constructor):i.apply(t,u))).shadowDOM=e.attachShadow({mode:"open"}),e}var u,c;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&i(n,e)}(r,t),u=r,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n        *{\n          margin : 0;\n          padding : 0;\n          box-sizing : border-box;\n        }\n        :host header{\n          width: 100%;\n          padding: 20px;\n          background-color: #ffc221;\n          color: white;\n          position: fixed;\n          box-shadow: 0 -5px 5px 5px rgba(0, 0, 0, 0.2);\n          display: flex;\n          justify-content: space-between;\n          z-index: 99;\n        }\n        @media screen and (min-width: 768px) {\n          :host  header{\n            padding: 20px 80px;\n          }\n        }\n        :host  header .logo span {\n          font-size: 1.5rem;\n          font-weight: bolder;\n        }\n        :host header  #hamburgerMenu {\n          color: white;\n          font-size: 25px;\n          cursor: pointer;\n          min-width: 44px;\n          min-height: 44px;\n          display: inline-block;\n          padding: 10px;\n          border: none;\n          background: transparent;\n          z-index: 999;\n        }\n\n        :host header  #CloseMenu {\n          color: white;\n          font-size: 25px;\n          cursor: pointer;\n          min-width: 44px;\n          min-height: 44px;\n          display: inline-block;\n          padding: 10px;\n          border: none;\n          background: transparent;\n          z-index: 999;\n          display: none;\n        }\n        @media screen and (min-width: 768px) {\n          :host  header #hamburgerMenu {\n            display: none;\n            color: #ffc221;\n            cursor: auto;\n          }\n          :host  header #CloseMenu {\n            display: none;\n            color: #ffc221;\n            cursor: auto;\n          }\n        }\n\n      }\n        :host  #hamburgerMenu svg {\n          color: white;\n          font-size: 25px;\n        }\n        :host  header nav {\n          position: absolute;\n          right: 0;\n          transform: translateX(500px);\n          width: 50vw;\n          transition: all 0.5s;\n        }\n        @media screen and (min-width: 768px) {\n          :host  header nav {\n            transform: translateX(0);\n            flex-direction: row;\n            position: static;\n            width: 70%;\n          }\n        }\n        :host  header nav ul {\n          padding: 10px;\n          height: 100vh;\n          margin-top: 3em;\n          list-style: none;\n          display: flex;\n          flex-direction: column;\n          background-color: #ffc221;\n        }\n        @media screen and (min-width: 768px) {\n          :host  header nav ul {\n            height: auto;\n            padding: 0;\n            margin-top: 0;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            text-align: center;\n          }\n        }\n        :host  header nav ul li #home {\n          color: black;\n        }\n        :host  header nav ul li a {\n          min-width: 44px;\n          min-height: 44px;\n          display: inline-block;\n          padding: 10px;\n          font-weight: 500;\n          text-decoration: none;\n          color: white;\n          font-size: 1rem;\n          transition: all 0.2s;\n        }\n        @media screen and (min-width: 768px) {\n          :host  nav ul li a {\n            font-size: 0.9rem;\n          }\n        }\n        @media screen and (min-width: 992px) {\n          :host  nav ul li a {\n            font-size: 1rem;\n          }\n        }\n        :host  nav ul li a:hover {\n          color: black;\n        }\n\n        .open {\n          transform: translateX(0) !important;\n        }\n        \n        .body {\n          opacity: 0.5;\n        }\n        \n        </style>\n\n\n        <header>\n        <div class="logo">\n            <span tabindex="0">Restoo Apps</span>\n        </div>\n        \x3c!-- awal hamburger menu --\x3e\n        <button title="burger" id="hamburgerMenu">\n            ☰\n        </button>\n        <button title="close" id="CloseMenu">\n            ✖\n        </button>\n        \x3c!-- akhir hamburger menu --\x3e\n        <nav class="ulToggle" tabindex="0">\n            <ul>\n                <li><a id="home" href="#/home">Home</a></li>\n                <li><a href="#/favorite">Favorite</a></li>\n                <li><a href="https://www.linkedin.com/in/muhammad-alfin-alfarizi-51a79a256/" target="_blank">About Us</a></li>\n                <li><a href="#explore">Explore Restaurant</a></li>\n                <li><a href="#rekomendasi">Rekomendasi</a></li>\n                <li><a href="#booking">Booking Tempat</a></li>\n            </ul>\n        </nav>\n    </header>\n            '}}])&&e(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),r}(r(HTMLElement));customElements.define("navigation-bar",u)},547:()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,t(o.key),o)}}function t(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:String(t)}function r(n){var e="function"==typeof Map?new Map:void 0;return r=function(n){if(null===n||!function(n){try{return-1!==Function.toString.call(n).indexOf("[native code]")}catch(e){return"function"==typeof n}}(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,t)}function t(){return function(n,e,t){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var a=new(n.bind.apply(n,r));return t&&i(a,t.prototype),a}(n,arguments,a(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i(t,n)},r(n)}function o(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(o=function(){return!!n})()}function i(n,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},i(n,e)}function a(n){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},a(n)}var u=function(t){function r(){var e,t,i,u;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=this,i=r,i=a(i),e=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e)}(t,o()?Reflect.construct(i,u||[],a(t).constructor):i.apply(t,u))).shadowDOM=e.attachShadow({mode:"open"}),e}var u,c;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&i(n,e)}(r,t),u=r,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowRoot.innerHTML='\n      <style>\n          *{\n            margin : 0;\n            padding : 0;\n            box-sizing : border-box;\n          }\n          :host {\n            display :block;\n            margin-top: 2rem;\n            width: 100%;\n            height: 300px;\n            color: white;\n            background-image: url(./images/heros/hero-image_4.webp);\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-position: center;\n            background-attachment: fixed;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            text-align: center;\n          }\n          :host .Rekomendasi h2 {\n            font-size: 1.8rem;\n            font-weight: 900;\n            z-index: 1;\n          }\n          :host .button-rekomen {\n            min-width: 44px;\n            min-height: 44px;\n            border: none;\n            padding: 1em 2em;\n            font-family: inherit;\n            font-size: 1rem;\n            margin-top: 1rem;\n            border-radius: 8px;\n            z-index: 1;\n            font-weight: 500;\n            cursor: pointer;\n            transition: 0.5s;\n            background-color: #ffc221;\n            color: white;\n          }\n          :host .button-rekomen:hover {\n            background-color: #ffbb00;\n          }/*# sourceMappingURL=rekomendasi.css.map */\n      </style>\n\n      <section class="Rekomendasi" id="rekomendasi" tabindex="0">\n        <h2 tabindex="0">\n            " Rekomendasi tempat makan yang harus kamu cobain "\n        </h2>\n        <button type="button" class="button-rekomen">\n            Click Here\n        </button>\n    </section>\n    '}}])&&e(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),r}(r(HTMLElement));customElements.define("rekomendasi-section",u)},933:()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,t(o.key),o)}}function t(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:String(t)}function r(n){var e="function"==typeof Map?new Map:void 0;return r=function(n){if(null===n||!function(n){try{return-1!==Function.toString.call(n).indexOf("[native code]")}catch(e){return"function"==typeof n}}(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,t)}function t(){return function(n,e,t){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var a=new(n.bind.apply(n,r));return t&&i(a,t.prototype),a}(n,arguments,a(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i(t,n)},r(n)}function o(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(o=function(){return!!n})()}function i(n,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},i(n,e)}function a(n){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},a(n)}var u=function(t){function r(){var e,t,i,u;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=this,i=r,i=a(i),e=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e)}(t,o()?Reflect.construct(i,u||[],a(t).constructor):i.apply(t,u))).shadowDOM=e.attachShadow({mode:"open"}),e}var u,c;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&i(n,e)}(r,t),u=r,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n    <style>\n    *{\n        margin : 0;\n        padding : 0;\n        box-sizing : border-box;\n      }\n      :host a{\n        position: absolute;\n        top: -100px;\n        left: 0;\n        background-color: white;\n        color: #D24545;\n        padding: 8px;\n        z-index: 99999;\n        padding: 1rem;\n    \n      }\n       \n      :host a:focus {\n         top: 0;\n      }\n    </style>\n    <a href="#utama" class="skip-link">Menuju ke konten</a>'}}])&&e(u.prototype,c),Object.defineProperty(u,"prototype",{writable:!1}),r}(r(HTMLElement));customElements.define("skip-content",u)}}]);
//# sourceMappingURL=app~134d84ee.36afbdb2bf41b30cdc47.js.map