import { LitElement, html } from "lit-element";


class HelloWorld extends LitElement {

  static get properties() {
    return {
      text: { type: String, reflect: true },
      number: { type: Number },
      value: { type: String },
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

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', newval);
    super.attributeChangedCallback(name, oldval, newval);
  }




  render() {
    return html`
  <p>${this._text}</p>
  <p>${this.number}</p>
  <button @click="${this.superChachi}">Click me Super!</button>
  <button @click="${this.megaGuay}">Click me Mega!</button>
  <input type="text" value="${this.value}" @input="${this.inputChange}">
  
  
  <ul>
    <li slot="slide">Slide 1</li>
    <li slot="slide">Slide 2</li>
    <li slot="slide">Slide 3</li>
  </ul>
  `
  }

  superChachi() {
    let event = new CustomEvent('my-event', {
      detail: {
        message: 'Something SUPER important happened',
      }
    });
    this.dispatchEvent(event);
  }


  megaGuay() {
    let click = new Event('click', {
      detail: {
        message: 'Something MEGA important happened',
      }
    });
    this.dispatchEvent(click);
  }

  inputChange(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.value
    }));
  }

  clickHandler() {
    this.number += 1
  }

}

customElements.define('hello-world', HelloWorld);
