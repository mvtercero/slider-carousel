import { LitElement, html } from 'lit-element';

class RandomLink extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      word: { type: String },
      ejemplo: { type: String }
    };
  }
  constructor() {
    super();
    this.url = (Math.round(Math.random())) ? 'https://desarrolloweb.com' : 'https://escuela.it';
    this.word = "cowabunga"
  }


  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  render() {
    return html`
      <a href="${this.url}">Enlace aleatorio</a>
      <p>${this.word}</p>
      <p>${this.ejemplo}</p>
    `;
  }
}

customElements.define('random-link', RandomLink);
