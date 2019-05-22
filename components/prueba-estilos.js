import { LitElement, html, css } from 'lit-element';

class PruebaEstilos extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
      }

      .content-box {
        box-sizing : content-box;
        width: 500px;
        height: 500px;
        padding: 10px;
        border: 15px solid blue;
        background: yellow;
      }

      p::before {
        content: "antes";
        border: 1px solid #000;
        font-size: 24px;
      }

      p::after {
        content: "despues";
        border: 1px solid #fff;
        font-size: 24px;
      }

      p::selection {
        color: red;
        background: green;
      }

      .border-box {
        box-sizing : content-box;
        width: 500px;
        height: 500px;
        padding: 10px;
        background: red;
      }

      input[type="checkbox"]:checked ~ label {
        color: purple;
        font-weight: bold;
      }

      input[type="text"]:disabled {
        border: 1px solid red;
      }

      input[placeholder="amazing"] {
        color: pink;
        font-weight: bold;
      }

      input[type="number"]:in-range {
        color: green;
      }

      input[type="number"]:out-of-range {
        color: red;
        font-weight: bold;
      }

      div ul li:nth-child(2) {
        background: purple;
      }

      div ul li:nth-last-child(odd) {
        background: orange;
      }

      div ul li:nth-child(3n+1) {
        background: yellow;
      }

      .caja {
        width: 200px;
        height: 200px;
        background: blue;
        margin: 0 auto;
      }

      form {
        margin: 0 auto;
        width: 400px;
        padding: 15px;
        margin-top: 27px;
      }

      form button {
        display: block;
        width: 100%;
        background: green;
        color:#fff;
      }

      .caja:hover{
        background: darkred;
      }

      button:hover {
        background: yellow;
        color:#000;
      }

      button:active {
        background: blue;
      }

      input[placeholder="nombre"]:hover {
        border: 2px solid orange;
      }

      input[placeholder="nombre"]:focus {
        border: 2px solid black;
      }
    `;
  }

  render() {
    return html`
        <div class="content-box">
          <p>
            maklMA nlkaNLKN AK AKMAM.a lmañlmañlsañlaMÑALmsa laasmasmñaÑLÑLAÑALÑA KLAKAKMSÑMAÑMSÑAMLÑ MAÑMÑL
            laasmasmñaÑLÑLAÑALÑA mklaKMÑM ÑMALMÑAMSMÑL MAÑMÑLMÑL. jnalkALKALKALKL +AKMAM+AKASKSALKSA MASNSLAS LAK
            mas lsansksksm ÑMALMÑAMSMÑLMÑLMAS mklaKMÑMMÑLAMÑLAMALÑMÑL MSALMÑALMS ALMSÑ.
          </p>
        </div>
        <div class="border-box"></div>
        <input type="text" placeholder="$1">
        <input type="text" placeholder="amazing" disabled>
        <input type="checkbox" class="option">
        <div></div>
        <label>Hola caracola, bye bye ola</label>
        <input type="number" min="1" max="9">
        
        <div>
          <ul>
            <li>hijo 1</li>
            <li>hijo 2</li>
            <li>hijo 3</li>
            <li>hijo 4</li>
            <li>hijo 5</li>
          </ul>
        </div>
        
        <div class="caja"></div>
        <form>
          <input type="text" placeholder="nombre">
          <input type="text" placeholder="apellido">
          <button>Enviar</button>
        </form>
    `;
  }

}
customElements.define('prueba-estilos', PruebaEstilos);
