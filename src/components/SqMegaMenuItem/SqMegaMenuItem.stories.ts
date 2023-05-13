import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './SqMegaMenuItem'

export default {
    title: 'Megamenu Item',
    parameters: {
      layout: 'padded',
      argTypes: {
        href: {type: String},
        label:  {type: String},
      }
    },
    tags: ['autodocs'],
    render: () => html`
      <sq-megamenu-item href="/" label="Produits">
        <div style="display: flex">
              <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
              </ul>
              <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
              </ul>
              <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
              </ul>
        </div>
      </sq-megamenu-item>`,
  } as Meta

  export const Default: StoryObj = {
    name: 'Default',
  }

