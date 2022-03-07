import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Timer = Template.bind({});
Timer.args = {
  
};

export const Secondary = Template.bind({});
Secondary.args = {
};
