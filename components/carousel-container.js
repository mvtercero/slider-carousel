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
    };
  }

  constructor() {
    super();
    this.currentSlide = 0;
    this.totalSlides = this.querySelectorAll('carousel-slide').length;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setSelectedAttribute(0);
  }

  setSelectedAttribute(selectedSlide) {
    this.querySelectorAll('carousel-slide').forEach((slide, index) => {
      slide.setAttribute('selected', index === selectedSlide);
    });
    this.currentSlide = selectedSlide;
  }


  goToNextSlide() {
    console.log("click next slide")
    const selectedSlide = this.currentSlide >= this.totalSlides - 1 ? 0 : this.currentSlide + 1;
    this.setSelectedAttribute(selectedSlide);
  }

  goToPrevSlide() {
    console.log("click prev slide")
    const selectedSlide = this.currentSlide <= 0 ? this.totalSlides - 1 : this.currentSlide - 1;
    this.setSelectedAttribute(selectedSlide);
  }


  static get styles() {
    return css`
      :host {
        border: 1px solid red; 
        box-sizing: content-box;
        display: block;
        margin-bottom: 22px;
        position: relative;
        transition: all .5s ease-in-out;
        width: 100%;
      }

      ul {
        background-color: #3a3a3a;
        border: 10px solid #3a3a3a;
        box-sizing: border-box;
        margin: 0 auto;
        overflow: hidden;
        padding: 0;
        position: relative;
        width: 100%;
        z-index: 1; 
      }
      
      ::slotted(carousel-slide) {
        left: 0;
        top: 0;
        position: relative;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
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
