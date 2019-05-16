import { LitElement, html } from "lit-element";


class ObservedAttributes extends LitElement {

  static get properties() {
    return {
      prop1: { attribute: true },
      prop2: { attribute: false },
      prop3: { attribute: "prop-3" }
    }
  }

  constructor() {
    super();
    this.prop1 = "soy prop1";
    this.prop2 = "soy prop2";
    this.prop3 = "soy prop3";
  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  render() {
    return html`
    <p>${this.prop1}</p>
    <p>${this.prop2}</p>
    <p>${this.prop3}</p>
    <button @click="${this.changeAttributes}">change attributes</button>
    `
  }

  changeAttributes() {
    let randomString = Math.floor(Math.random() * 100).toString();
    this.setAttribute('prop1', 'prop1 ' + randomString);
    this.setAttribute('prop2', 'prop2 ' + randomString);
    this.setAttribute('prop3', 'prop3 ' + randomString);
    this.requestUpdate();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    });
  }
}

customElements.define('observed-attributes', ObservedAttributes);
