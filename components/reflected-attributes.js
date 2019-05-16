import { LitElement, html } from "lit-element";


class ReflectedAttributes extends LitElement {

  static get properties() {
    return {
      prop1: { reflect: true },
      prop2: { type: Number },
      holaQueTal: { attribute: "hola-que-tal", type: String }
    }
  }

  constructor() {
    super();
    this.holaQueTal = "soygkggk";

  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.prop1);
    console.log(this.prop2);
    console.log(this.holaQueTal);
  }

  attributeChangedCallback(name, oldval, newval) {
    // console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  render() {
    return html`
    <p>${this.prop1}</p>
    <p>${this.prop2}</p>
    <button @click="${this.changeProperty}">change property</button>
    `
  }

  changeProperty() {
    let randomString = Math.floor(Math.random() * 100).toString();
    this.myProp = 'prop1 ' + randomString;
  }
}

customElements.define('reflected-attributes', ReflectedAttributes);
