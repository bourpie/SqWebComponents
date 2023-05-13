import {html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sq-megamenu-item')
export class SqMegaMenuItem extends LitElement {   
    @property() label = 'Produits'
    @property() href = '/'

    handleEvent(e) {
        console.log(`Event type: ${e.type}`);

        if (e.type == "mouseover") {
			this.setAttribute('aria-expanded', "true");
		} else {
			this.setAttribute('aria-expanded', "false");
		}
    }
    
    render() {
        return html`
            <sq-link-main-nav 
                @mouseover="${this.handleEvent}"
                @mouseleave="${this.handleEvent}"
                href=${this.href} 
                label=${this.label}>
            </sq-link-main-nav>
            <slot class="panel"></slot>
     `
    }

    static styles = css`
        :host {
        }
        sq-link-main-nav+.panel { display: none; }
        sq-link-main-nav:hover+.panel { display: block;}
    `
}