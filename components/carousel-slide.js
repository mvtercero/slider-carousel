import { LitElement, html, css } from "lit-element";

//TO-DO: Preguntar cómo hacer el background-image: url(${this.image})

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
    .image-position {
      background-size: cover,
      background-repeat: no-repeat,
      background-position: 50% 60%
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <li class="slide" class="image-position">
      <img src=${this.image} alt="">
    </li>
  `
  }
}

customElements.define('carousel-slide', CarouselSlide);
