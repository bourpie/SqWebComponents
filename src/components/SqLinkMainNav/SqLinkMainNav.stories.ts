import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './SqLinkMainNav'

export default {
    title: 'Lien mega menu',
    parameters: {
      layout: 'padded',
      argTypes: {
        href: {type: String},
        label:  {type: String},
      }
    },
    tags: ['autodocs'],
    render: () => html`
        <sq-link-main-nav href="/" label="Produits" />`,
  } as Meta

  export const Default: StoryObj = {
    name: 'Default',
  }

