import { LitElement, html, css } from "lit-element";

// return html`
// <style>
//   li {
//     background-image: url(${this.image});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: 50% 60%;
//   }
// </style>


class CarouselSlide extends LitElement {

  static get properties() {
    return {
      selected: {
        type: Boolean,
      },

      image: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
        :host {
          box-sizing: border-box;
          display: block;
          height: 0;
          opacity: 0;
          overflow: hidden;
          position: relative;
          transition: opacity 1.5s ease-in-out;
          width: 100%
        }
        
        :host([selected="true"]) {
          height: auto;
          opacity: 1;
        }

        img {
          display: block;
          width: 100%;
        }
      }
    `;
  }

  render() {
    return html`
      <li>
        <img src="${this.image}">
      </li>
      `;
  }
}

customElements.define('carousel-slide', CarouselSlide);
