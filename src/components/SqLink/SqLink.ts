import {html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sq-link')
export class SqLink extends LitElement {
    @property() label = 'Mon lien'
    @property() href = '#/'
    @property() variant = 'default'
    render() {
        return html`
            <a 
                class=${[`variant--${this.variant}`].join(' ')} 
                href=${this.href}>
                    ${this.label}
            </a>
        `
    }

    static styles = css`
        :host {
            --color: rgba(0, 0, 22, 1);
            --hover-color: rgb(195, 86, 0);
            --border-color: rgba(195, 86, 0, 1);
            --color-visited: rgba(65, 117, 140, 1);
            --font-family: Roboto, sans-serif;
            --bg-color: #df6200;
            --bg-color-hover: #c35600;
            --bg-color-active: #df6100;
            --bg-color-white: #FFFFFF;
            --bg-color-active-outline: #df6100;
        }

        a {
            font-family: var(--font-family);
            letter-spacing: .01rem;
            line-height: 1.5;
            transition: all 0.4s ease-in;
        }

        .variant--default {
            font-size: 1rem;
            color: var(--color);
            text-decoration: underline;
            text-underline-offset: 4.5px;
            text-decoration-color: var(--border-color);
            background: transparent;
        }

        .variant--default:hover {
            text-decoration-thickness: 2px;
            background: rgba(0, 0, 0, 0.05);
        }

        .variant--lien:active {
            text-decoration-thickness: 2px;
            background: rgba(0, 0, 0, 0.1);
        }
        .variant--lien:visited {
            color: var(--color-visited);
            text-decoration-color: var(--color-visited);
        }
        .variant--header-secondary {
            font-size: 1rem;
            color: var(--color);
            text-decoration: none;
        }
        .variant--header-secondary:hover {
            color: var(--hover-color);
        }
        .variant--header-primary {
            font-size: 1.167rem;
            letter-spacing: .011875rem;
            line-height: 1.375rem;
            color: var(--color);
            text-decoration: none;
        }
        .variant--header-primary:hover {
            color: var(--hover-color);
        }
        .variant--btn-primary,
        .variant--btn-outline {
            border-style: solid;
            border-width: 2px;
            border-radius: 4px;
            padding: 14px 24px;
            font-size: 18.67px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
        }
        .variant--btn-primary {
            border-color: var(--bg-color);
            background-color: var(--bg-color);
            background-position: center;
            transition: background 0.8s;
            color: white;
        }

        .variant--btn-primary:hover {
            border-color: var(--bg-color-hover);
            background: var(--bg-color-hover) radial-gradient(circle, transparent 1%, var(--bg-color-hover) 1%) center/15000%;
        }

        .variant--btn-primary:active {
            background-color: var(--bg-color-active);
            background-size: 100%;
            transition: background 0s;
        }
        .variant--btn-outline {
            border-color: var(--bg-color);
            background-color: var(--bg-color-white);
            color: var(--bg-color);
        }
        .variant--btn-outline:hover {
            background-color: var(--bg-color);
            color: var(--bg-color-white);
        } 
    `
}