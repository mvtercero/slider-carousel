import { LitElement, html, css } from "lit-element";


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
          display: block;
          height: 0;
          opacity: 0;
          position: relative;
          transition: opacity 1.5s ease-in-out;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
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
