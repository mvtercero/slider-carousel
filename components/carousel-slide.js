import { LitElement, html, css } from "lit-element";


class CarouselSlide extends LitElement {

  static get properties() {
    return {
      image: { type: String },
      key: { type: Number }
    }
  }

  static get styles() {

    return css`
    :host {
      display: block;
    }
    .slide {
      width: 100%;
      height: 100%;
      border: 1px solid blue;
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <li class="slide">
      <img src=${this.image} alt="">
    </li>
  `
  }
}

customElements.define('carousel-slide', CarouselSlide);
