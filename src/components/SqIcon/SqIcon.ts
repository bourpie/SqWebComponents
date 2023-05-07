import {html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sq-icon')
export class SqIcon extends LitElement {
    @property() name = "chevron"
    @property() direction = "right"
    @property() state = "right"
    render() {
        return html`
        <span 
            aria-hidden="true" 
            class=${[
                'icon',
                `${this.state}`,
                `${this.name}`, 
                `${this.direction}`
                ].join(' ')}>
        </span>
     `
    }

    static styles = css`
        :host {
            --play-bg-color: #F2F2F2;
            --play-color: #1D2141;
            --play-hover-color: #C35600;
            --play-active-color: #C35600;
            --play-transform-rotate: rotate(90deg);
        }
        .icon {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            background-size: cover;
        }
        .chevron, .play {
            background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Arrow / Chevron_Right_MD'%3E%3Cpath id='Vector' d='M10 8L14 12L10 16' stroke='%231D2141' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E");
        }
        .play {
            background-color: var(--play-bg-color);
            border-radius: 50%;
            
        }
        .left {
            transform: rotate(180deg)
        }
        .right {
            transform: rotate(0)
        }
        .down {
            transform: rotate(90deg)
        }
        .up {
            transform: rotate(270deg);
        }
        .hover{
            background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Arrow / Chevron_Right_MD'%3E%3Cpath id='Vector' d='M10 8L14 12L10 16' stroke='%23C35600' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E");
        }
        .play.active{
            background-color: var(--play-active-color);
            background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Arrow / Chevron_Right_MD'%3E%3Cpath id='Vector' d='M10 8L14 12L10 16' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E");
        }
    `
}