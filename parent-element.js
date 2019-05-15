import { LitElement, html } from 'lit-element';
import './simple-element.js';

class ParentElement extends LitElement {
  render() {
    return html`
      <simple-element country="España" population="46.62 millones" monarchy provinces='["A Coruña", "Albacete", "Burgos", "Álava"]'
        demonyms='{ "avila": "abulense", "badajoz": "pacense" }'></simple-element>
    `;
  }
}
customElements.define('parent-element', ParentElement);
