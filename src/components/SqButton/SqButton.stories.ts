import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './SqButton'

export default {
  title: 'Bouton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline'],
    },
  },
  render: (args) => html`<sq-button variant=${args.variant} name=${args.label}></sq-button>`,
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  args: {
    label: 'Primary',
    variant: 'primary'
  },
}
export const Outline: StoryObj = {
  name: 'Outline',
  args: {
    label: 'Outline',
    variant: 'outline'
  },
}
