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
        box-sizing: content-box;
        display: block;
        margin-bottom: 22px;
        position: relative;
        transition: all .5s ease-in-out;
        width: 100%;
      }

      ul {
        background-color: #DDD;
        border: 10px solid #DDD;
        box-sizing: border-box;
        margin: 0 auto;
        overflow: hidden;
        padding: 0;
        width: 100%;
        z-index: 1; 
      }

      button {
        position: absolute;
        top: calc(50% - 20px);
        padding: 0;
        line-height: 40px;
        border: none;
        background: none;
        color: #DDD;
        font-size: 40px;
        font-weight: bold;
        opacity: 0.7;
        outline:none;
      }

      button:hover,
      button:focus {
        opacity: 1;
      }

      #prevBtn {
        left: 12px;
      }

      #nextBtn {
        right: 12px;
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
        <button id="prevBtn" @click=${this.goToPrevSlide}>&#x276E;</button>
        <button id="nextBtn" @click=${this.goToNextSlide}>&#x276F;</button>
      </div>
    `;
  }

}
customElements.define('carousel-container', CarouselContainer);
