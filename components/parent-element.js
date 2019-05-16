import { LitElement, html } from 'lit-element';
import './custom-converter';
import './simple-element';
import './random-link';
import './observed-attributes';
import './reflected-attributes';

class ParentElement extends LitElement {
  render() {
    return html`
      <!-- <simple-element country="España" population="46.62 millones" monarchy provinces='["A Coruña", "Albacete", "Burgos", "Álava"]'
                                                                                                                              demonyms='{ "avila": "abulense", "badajoz": "pacense" }'></simple-element> -->
      <!-- <random-link ejemplo="escopeta"></random-link>
                                                                                    <custom-converter prop1="fruta" .prop2="verdura" prop3='["chocolate", "avellana", "azúcar", "9", "3" ]'></custom-converter>
                                                                                   -->
      <!-- <observed-attributes prop1="soy atributo 1" prop2="soy atributo 2" prop3="soy atributo 3"></observed-attributes> -->
      <reflected-attributes hola-que-tal="44 millones"></reflected-attributes>
    `;
  }
}
customElements.define('parent-element', ParentElement);
