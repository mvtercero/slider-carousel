import { LitElement, html, css } from 'lit-element';
import './carousel-slide';


class CarouselContainer extends LitElement {

  static get properties() {
    return {

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

  }

  render() {
    return html`
    <div class="container">
      <carousel-slide text="hello world" number="44"></carousel-slide>
      <button>"<"LEFT</button> <button>RIGHT">"</button>
    </div>
      
    `;
  }


}
customElements.define('carousel-container', CarouselContainer);

// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").addEventListener("click", function() {alert("hola")})
// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").text = "bea"
