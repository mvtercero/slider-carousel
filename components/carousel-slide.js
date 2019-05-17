import { LitElement, html, css } from "lit-element";


class CarouselSlide extends LitElement {

  static get properties() {
    return {
      text: { type: String },
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
    <div class="slide">
      <p>${this.text}</p>
    </div>
  `
  }
}

customElements.define('carousel-slide', CarouselSlide);
