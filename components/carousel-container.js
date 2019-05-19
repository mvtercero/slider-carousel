import { LitElement, html, css } from 'lit-element';
import './carousel-slide';


class CarouselContainer extends LitElement {

  static get styles() {
    return css`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
    }

    div > ::slotted(:not([selected])) {
      display: none;
    }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
    <div>
      <slot></slot>
    </div>
    `;
  }


}
customElements.define('carousel-container', CarouselContainer);

// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").addEventListener("click", function() {alert("hola")})
// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").text = "bea"
