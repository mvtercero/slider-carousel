import { LitElement, html } from 'lit-element';


class SimpleElement extends LitElement {
  static get properties() {
    return {
      country: { type: String, reflect: true },
      population: { type: Number, reflect: true },
      monarchy: { type: Boolean, reflect: true },
      provinces: { type: Array },
      demonyms: { type: Object, reflect: true }
    };
  }

  constructor() {
    super();
    this.country = "";
    this.population = 0;
    this.monarchy = false;
    this.provinces = [];
    this.demonyms = {};
  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  render() {
    return html`
      <p>Hello world</p>
      <p>País: ${this.country}</p>
      <p>Población: ${this.population}</p>
      <p>Monarquía: ${this.monarchy}</p>
      <p>Provincias: ${this.provinces.map((province, index) => html`<span>[${index}]:${province}&nbsp;</span>`)}</p>
      <p>Genticilios: ${Object.keys(this.demonyms).map((demonym, index) => html`<span>[${index}]:${demonym}&nbsp;`)}</span></p>
      
      <button @click="${this.changeAttributes}">change attributes</button>
  `;
  }


  changeAttributes() {
    let randy = Math.floor(Math.random() * 10);
    let myBool = this.getAttribute('monarchy');

    this.setAttribute('country', randy.toString());
    this.setAttribute('population', randy.toString());
    this.setAttribute('monarchy', myBool ? '' : null);
    this.setAttribute('provinces', JSON.stringify([...this.provinces, randy]));
    this.setAttribute('demonyms',
      JSON.stringify(Object.assign({}, this.demonyms, { [randy]: randy })));
    this.requestUpdate();
  }

  changeProperties() {
    let randy = Math.floor(Math.random() * 10);
    let myBool = this.monarchy;

    this.country = randy.toString();
    this.population = randy;
    this.monarchy = !myBool;
    this.provinces = [...this.provinces, randy];
    this.demonyms = Object.assign({}, this.demonyms, { [randy]: randy });
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    });
  }
}

customElements.define('simple-element', SimpleElement);
