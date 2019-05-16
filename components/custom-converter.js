import { LitElement, html } from 'lit-element';


class CustomConverter extends LitElement {

  static get properties() {
    {
      return {
        prop1: {
          reflect: true,
          converter: {
            fromAttribute: (value, type) => {
              // `value` is a string
              // Convert it to a value of type `type` and return it
              console.log('----PROP1 fromAttribute.');
              console.log('Processing:', value, typeof (value));
              let retVal = String(value);
              console.log('Returning:', retVal, typeof (retVal));
              return retVal;
            },
            toAttribute: (value, type) => {
              // `value` is of type `type` 
              // Convert it to a string and return it
              console.log('----PROP1 toAttribute.');
              console.log('Processing:', value, typeof (value));
              let retVal = Number(value);
              console.log('Returning:', retVal, typeof (retVal));
              return retVal;
            }
          }
        },

        prop2: {
          // reflect: true,
          converter(value) {
            console.log('PROP2 converter.');
            console.log('Processing:', value, typeof (value));

            let retVal = String(value);
            console.log('Returning:', retVal, typeof (retVal));
            return retVal;
          }
        },
        prop3: {
          type: Array,
          attribute: false,
          converter: {
            fromAttribute: (value, type) => {
              // `value` is a string
              // Convert it to a value of type `type` and return it
              console.log('PROP3 fromAttribute.');
              console.log('Processing:', value, typeof (value));
              let retVal = JSON.parse(value)
              console.log('Returning:', retVal, typeof (retVal));
              return retVal;
            },
            // toAttribute: (value, type) => {
            //   // `value` is of type `type` 
            //   // Convert it to a string and return it
            //   console.log('PROP3 toAttribute.');
            //   console.log('Processing:', value, typeof (value));
            //   let retVal = String(value);
            //   console.log('Returning:', retVal, typeof (retVal));
            //   return retVal;
            // }
          }
        }
      }
    }
  }

  constructor() {
    super();
    this.prop1 = "holi";
    this.prop2 = "bye"
    this.prop3 = ["pera", "manzana", "platano"]
  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  render() {

    return html`
    <p>PROP1: ${this.prop1}</p>
    <p>PROP2: .${this.prop2}</p>
    <p>PROP3: ${this.prop3.map(item => html`<span> ${item}</span>`)}</p>
    
    
    <button @click="${this.changeProperties}">change properties</button>
    <button @click="${this.changeAttributes}">change attributes</button>
    `;
  }



  changeAttributes() {
    let randomString = Math.floor(Math.random() * 100).toString();
    this.setAttribute('prop1', 'prop1 ' + randomString);
    this.setAttribute('prop2', 'prop2 ' + randomString);
    this.requestUpdate();
  }

  changeProperties() {
    let randomString = Math.floor(Math.random() * 100).toString();
    this.prop1 = 'prop1 ' + randomString;
    this.prop2 = 'prop2 ' + randomString;
  }
}
customElements.define('custom-converter', CustomConverter);
