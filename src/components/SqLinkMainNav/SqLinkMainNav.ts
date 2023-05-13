import {html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sq-link-main-nav')
export class SqLinkMainNav extends LitElement {   
    @property() label = 'Produits'
    @property() href = '/'

    render() {
        return html`
        <a href=${this.href}>
          ${this.label}
          <span class='icon-play'>
            <svg xmlns="http://www.w3.org/2000/svg" width="7.06" height="12.121" viewBox="0 0 7.06 12.121">
              <path id="icone-arrow-down" d="M9.292,4.646,4.646,0,0,4.646" transform="translate(6.06 1.414) rotate(90)" class='svg' fill="none" stroke="#1d2141" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </span>
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
            display: inline-flex;
            align-items: center;
            gap: .5rem;
            font-size: 1.167rem;
            letter-spacing: .011875rem;
            line-height: 1.375rem;
            color: var(--color);
            text-decoration: none;            
        }

        a:hover {
            color: var(--hover-color);
        }              
        a>span {
            display: inline-block;
            background: #f2f2f2;
            width: 2rem;
            height: 2rem;
            display: grid;
            place-items: center;
            border-radius: 50%;
            transform: rotate(90deg);
            transition: transform 0.4s ease-in-out;
        }

        a:hover>span  {
            transform: rotate(270deg);
        }

        .svg {
          transition: color 0.4s ease-in-out;
        }

        a:hover .svg  {
            stroke: var(--bg-color);
        }  

    `
}