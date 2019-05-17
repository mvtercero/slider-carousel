import { LitElement, html, css } from 'lit-element';
import './carousel-slide';


class CarouselContainer extends LitElement {

  static get properties() {
    return {
      images: { type: Array },
      currentIndex: { type: Number }
    }
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }
    .container {
      width: 700px;
      height: 700px;
      border: 1px solid red;
      position: relative;
    }
    `;
  }

  constructor() {
    super();
    this.images = [
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ];
    this.currentIndex = 0;
  }

  goToPrevSlide() {
    console.log("hacia la slide previa")
  }

  goToNextSlide() {
    console.log("hacia la próxima slide")
  }

  render() {
    return html`
    <div class="container">
      <ul>
        ${this.images.map((image, index) => html`<carousel-slide image=${image} key=${index}></carousel-slide>`)}
      </ul>
    
      <button @click=${this.goToPrevSlide}>LEFT</button>
      <button @click=${this.goToNextSlide}>RIGHT</button>
    </div>
    `;
  }


}
customElements.define('carousel-container', CarouselContainer);

// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").addEventListener("click", function() {alert("hola")})
// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").text = "bea"
