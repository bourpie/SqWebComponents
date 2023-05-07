import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './SqIcon'

export default {
    title: 'Icône',
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
          control: { type: 'select' },
          options: [
                'chevron',
                'play' 
            ],
        },
        direction: {
            control: { type: 'select' },
            options: [
                  'left',
                  'right',
                  'down',
                  'up',
              ],
          },
        state: {
            control: { type: 'select' },
            options: [
                  'default',
                  'hover',
                  'active',
                  'focus',
              ],
          },
      },
    render: (args) => html`
        <sq-icon 
            state=${args.state} 
            direction=${args.direction} 
            name=${args.name} />`,
  } as Meta

  export const Default: StoryObj = {
    name: 'Default',
    args: {
        name: 'chevron'
    }
  }

