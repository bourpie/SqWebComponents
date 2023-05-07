import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sq-button')
export class SqButton extends LitElement {

  @property({type: String}) label = 'My button'
  @property() variant = "primary"
  @property() href = null

  render() {
    return html`
    <button class=${['ripple', `variant--${this.variant}`].join(' ')}>${this.label}</button>
  `
  }

  static styles = css`
    :host {
      --bg-color: #df6200;
      --bg-color-hover: #c35600;
      --bg-color-active: #df6100;
      --bg-color-white: #FFFFFF;
      --bg-color-active-outline: #df6100;
    }
    button {
      border-style: solid;
      border-width: 2px;
      border-radius: 4px;
      padding: 14px 24px;
      font-size: 18.67px;
      font-weight: bold;
      cursor: pointer;
    }

    .variant--primary {
      border-color: var(--bg-color);
      background-color: var(--bg-color);
      color: var(--bg-color-white);
    } 

    .variant--outline {
      border-color: var(--bg-color);
      background-color: var(--bg-color-white);
      color: var(--bg-color);
    } 

    .variant--outline:hover {
      color: var(--bg-color-white);
    }

    .ripple {
      background-position: center;
      transition: background 0.8s;
    }
    .ripple:hover {
      border-color: var(--bg-color-hover);
      background: var(--bg-color-hover) radial-gradient(circle, transparent 1%, var(--bg-color-hover) 1%) center/15000%;
    }

    .ripple:active {
      background-color: var(--bg-color-active);
      background-size: 100%;
      transition: background 0s;
    }

  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-button': SqButton
  }
}