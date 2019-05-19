import { LitElement, html, css } from 'lit-element';
import './carousel-slide';


class CarouselContainer extends LitElement {
  static get properties() {
    return {
      currentSlide: {
        type: Number,
      },

      totalSlides: {
        type: Number,
      },

      time: {
        type: Number,
        value: 4,
      },

      interval: {
        type: Function,
      },

    };
  }

  constructor() {
    super();
    this.currentSlide = 0;
    this.totalSlides = this.querySelectorAll('carousel-slide').length;
  }

  connectedCallback() {
    super.connectedCallback();
    this.time = this.time || 4;
    this.setSelectedAttribute(0);
    this.initSlider();
  }

  setSelectedAttribute(selectedSlide) {
    this.querySelectorAll('carousel-slide').forEach((slide, index) => {
      slide.setAttribute('selected', index === selectedSlide);
    });
    this.currentSlide = selectedSlide;
  }


  initSlider() {
    this.interval = setInterval(this.goToNextSlide.bind(this), this.time * 1000);
  }

  pauseSlider() {
    clearInterval(this.interval);
    this.interval = null;
  }

  goToNextSlide() {
    const selectedSlide = this.currentSlide >= this.totalSlides - 1 ? 0 : this.currentSlide + 1;
    this.setSelectedAttribute(selectedSlide);
  }

  goToPreviousSlide() {
    const currentSlide = this.currentSlide <= 0 ? this.totalSlides - 1 : this.currentSlide - 1;
    this.setSelectedAttribute(selectedSlide);
  }


  static get styles() {
    return css`
      :host {
        border: 1px solid red;
        box-sizing: content-box;
        display: block;
        transition: all .5s ease-in-out;
        position: relative;
        display: inline-block;
        margin-bottom: 22px;
        width: 100%;
      }

      ul {
        position: relative;
        height: 420px;
        z-index: 1;
        background-color: #3a3a3a;
        border: 10px solid #3a3a3a;
        margin: 0 auto;
        padding: 0;
        overflow: hidden;
        box-sizing: border-box;
      }
      
      ::slotted(carousel-slide) {
        left: 0;
        position: relative;
        top: 0;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div>
        <ul>
          <slot></slot>
        </ul>
      
        <button @click=${this.goToPrevSlide}>PREV</button>
        <button @click=${this.goToNextSlide}>NEXT</button>
      </div>
    `;
  }

}
customElements.define('carousel-container', CarouselContainer);

// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").addEventListener("click", function() {alert("hola")})
// document.querySelector("carousel-container").shadowRoot.querySelector("carousel-slide").text = "prueba"
