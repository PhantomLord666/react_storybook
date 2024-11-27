import React from 'react';
import Timeline from './Timeline';

export default {
  title: 'Components/Layout/Timeline',
  component: Timeline,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    variant: {
      control: 'select',
      options: ['oppositeOff', 'opposite'],
    },
    alignment: {
      control: 'select',
      options: ['before', 'after', 'alternate', 'alternateReverse'],
    },
    color: { control: 'color' },
  },
};

const events = [
  { date: '2024-01-01', description: 'Inicio del proyecto' },
  { date: '2024-03-15', description: 'Primera fase completada' },
  { date: '2024-06-10', description: 'Segunda fase completada' },
  { date: '2024-12-20', description: 'Proyecto finalizado' },
];

const Template = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  events,
  orientation: 'vertical',
  variant: '',
  color: '#007bff',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Default.args,
  orientation: 'horizontal',
};


