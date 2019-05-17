import { LitElement, html } from 'lit-element';
import './custom-converter';
import './simple-element';
import './random-link';
import './observed-attributes';
import './reflected-attributes';
import './hello-world';


class ParentElement extends LitElement {

  static get properties() {
    return {
      miDato: { type: String }
    }
  }

  constructor() {
    super();
    this.miDato = 'Valor de inicialización';
  }


  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', () => { console.log("click estandar") });
  }
  disconnectedCallback() {
    this.removeEventListener('click', () => { console.log("remove click estandar") });
    super.disconnectedCallback();
  }

  render() {
    return html`
      <hello-world text="hello world" number="44" .value=${this.miDato} @change="${this.inputCambiado}" @my-event="${(e) => { console.log(e.detail.message) }}"></hello-world>
      <p>El dato escrito es ${this.miDato}</p>
      
      <slot name="slide"></slot>
 
    `;
  }

  inputCambiado(e) {
    this.miDato = e.detail;
  }
}
customElements.define('parent-element', ParentElement);

// document.querySelector("parent-element").shadowRoot.querySelector("hello-world").addEventListener("click", function() {alert("hola")})
// document.querySelector("parent-element").shadowRoot.querySelector("hello-world").text = "bea"
