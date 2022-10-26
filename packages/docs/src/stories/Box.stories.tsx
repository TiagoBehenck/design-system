import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@behenck/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Test of box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
