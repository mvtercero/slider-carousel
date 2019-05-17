import { LitElement, html } from "lit-element";


class CarouselSlide extends LitElement {

  static get properties() {
    return {
      text: { type: String, reflect: true },
      number: { type: Number },
    }
  }

  constructor() {
    super();
  }

  set text(val) {
    let oldval = this._text
    this._text = val.toUpperCase()
    this.requestUpdate("text", oldval)
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
  <p>${this._text}</p>
  <p>${this.number}</p>
  <button @click="${this.superChachi}">Click me Super!</button>
  <button @click="${this.megaGuay}">Click me Mega!</button>
  
  `
  }
}

customElements.define('carousel-slide', CarouselSlide);
