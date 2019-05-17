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
    .container {
      border: 1px solid red;
      position: relative;
      -moz-perspective: 1300px;
      -ms-perspective: 1300px;
      -webkit-perspective: 1300px;
      perspective: 1300px;
      display: inline-block;
      text-align: left;
      margin-bottom: 22px;
      width: 100%;
    }

    ul {
      position: relative;
      height: 420px;
      z-index: 1;
      background-color: #3a3a3a;
      border: 10px solid #3a3a3a;
      margin: 0 auto;
      padding: 0;
      overflow: hidden;
      box-sizing: border-box;
      }
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
    this.currentIndex - 1
  }

  goToNextSlide() {
    console.log("hacia la próxima slide");
    this.currentIndex + 1
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
