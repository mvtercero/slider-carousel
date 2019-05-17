import { LitElement, html, css } from "lit-element";

//TO-DO: Preguntar cómo hacer el background-image: url(${this.image})
// background-image: url("https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg");
// background-size: cover;
// background-repeat: no-repeat;
// background-position: 50% 60%;

class CarouselSlide extends LitElement {
  static get properties() {
    return {
      image: { type: String },
      key: { type: Number }
    }
  }

  static get styles() {
    return css`
    li {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      border: 1px solid yellow;
    }
    
    img {
      width: 100%;
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <li>
      <img src=${this.image} alt="">
    </li>
  `
  }
}

customElements.define('carousel-slide', CarouselSlide);
