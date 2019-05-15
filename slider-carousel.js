import { LitElement, html, css } from "lit-element";

/**
 * `slider-carousel`
 * SliderCarousel
 *
 * @customElement
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

class SliderCarousel extends LitElement {
  static get is() {
    return "slider-carousel";
  }

  static get properties() {
    return {
      contentList: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .slide {
        color: blue;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    const childs = this.querySelectorAll('p');
    childs.forEach(element => {
      element.setAttribute('class', 'slide')
    });
  }

  render() {
    return html`
      <!-- <div class="csslider infinity" id="slider1"> -->
      <!-- <input type="radio" name="slides" id="slides_1" />
                                                                                                                                                                                            <input type="radio" name="slides" checked="checked" id="slides_2" />
                                                                                                                                                                                            <input type="radio" name="slides" id="slides_3" />
                                                                                                                                                                                            <input type="radio" name="slides" id="slides_4" />
                                                                                                                                                                                            <input type="radio" name="slides" id="slides_5" />
                                                                                                                                                                                            <input type="radio" name="slides" id="slides_6" /> -->
      <!-- <ul class="container">
                                                                                                                                                                                                    ${this.contentList.map(contentElement => html`<li class="item">${contentElement}</li>`)}
                                                                                                                                                                                                  </ul> -->
      <div class="slide">
        <slot></slot>
      </div>
      
      <!--       
                                                                                                                                                                                          
                                                                                                                                                                                            <div class="arrows">
                                                                                                                                                                                              <label for="slides_1"></label>
                                                                                                                                                                                              <label for="slides_2"></label>
                                                                                                                                                                                              <label for="slides_3"></label>
                                                                                                                                                                                              <label for="slides_4"></label>
                                                                                                                                                                                              <label for="slides_5"></label>
                                                                                                                                                                                              <label for="slides_6"></label>
                                                                                                                                                                                              <label class="goto-first" for="slides_1"></label>
                                                                                                                                                                                              <label class="goto-last" for="slides_6"></label>
                                                                                                                                                                                            </div>
                                                                                                                                                                                            <div class="navigation">
                                                                                                                                                                                              <div>
                                                                                                                                                                                                <label for="slides_1"></label>
                                                                                                                                                                                                <label for="slides_2"></label>
                                                                                                                                                                                                <label for="slides_3"></label>
                                                                                                                                                                                                <label for="slides_4"></label>
                                                                                                                                                                                                <label for="slides_5"></label>
                                                                                                                                                                                                <label for="slides_6"></label>
                                                                                                                                                                                              </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                          </div> -->
    `;
  }
}

window.customElements.define(SliderCarousel.is, SliderCarousel);
