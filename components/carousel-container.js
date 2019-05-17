import { LitElement, html } from 'lit-element';
import './carousel-slide';


class CarouselContainer extends LitElement {

  static get properties() {
    return {

    }
  }

  constructor() {
    super();

  }

  render() {
    return html`
      <carousel-slide text="hello world" number="44"></carousel-slide>
    `;
  }


}
customElements.define('carousel-container', CarouselContainer);

// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").addEventListener("click", function() {alert("hola")})
// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").text = "bea"
