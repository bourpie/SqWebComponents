import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './SqLink'

export default {
    title: 'Lien',
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
          control: { type: 'select' },
          options: [
            'default', 
            'header-secondary',
            'header-primary',
            'btn-primary',
            'btn-outline',
          ],
        },
        nav: {
          control: 'string',
        },
      },
    render: (args) => html`
      <sq-link 
        href="javascript:void(0)"
        nav=${args.nav}
        variant=${args.variant}>
          ${args.label}
          ${args.nav === 'megamenu' ? 'allo' : ''}
      </sq-link>`,
  } as Meta

  export const Default: StoryObj = {
    name: 'Default',
    args: {
        variant: 'default'
    }
  }
  export const HeaderPrimary: StoryObj = {
    name: 'Entête primaire',
    args: {
        variant: 'header-primary'
    }
  }

  export const HeaderSecondary: StoryObj = {
    name: 'Entête secondaire',
    args: {
      variant: 'header-secondary'
    },
  }
  export const ButtonPrimary: StoryObj = {
    name: 'Bouton primaire',
    args: {
        variant: 'btn-primary'
    }
  }
  export const ButtonOutline: StoryObj = {
    name: 'Bouton outline',
    args: {
      variant: 'btn-outline'
    },
  }
  export const MainNav: StoryObj = {
    name: 'Lien navigation principale',
    args: {
      variant: 'header-primary',
      nav: 'megamenu'
    },
  }