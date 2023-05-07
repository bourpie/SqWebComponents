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
          options: ['default', 'header-secondary'],
        },
      },
    render: (args) => html`<sq-link href="javascript:void(0)" variant=${args.variant}>${args.label}</sq-link>`,
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