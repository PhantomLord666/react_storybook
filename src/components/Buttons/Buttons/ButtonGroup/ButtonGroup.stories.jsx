// ButtonGroup.stories.js
import React from 'react';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'Components/Buttons/Button/ButtonGroup',
  component: ButtonGroup,
  };

const Template = (args) => <ButtonGroup {...args} />;

const buttons = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];

export const DefaultGroup = Template.bind({});
DefaultGroup.args = {
  buttons,
  mode: 'default',
};

export const SingleSelectionGroup = Template.bind({});
SingleSelectionGroup.args = {
  buttons,
  mode: 'single',
};

export const MultipleSelectionGroup = Template.bind({});
MultipleSelectionGroup.args = {
  buttons,
  mode: 'multiple',
};

