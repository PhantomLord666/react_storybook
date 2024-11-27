import React from 'react';
import SplitButton from './SplitButton';

export default {
  title: 'Components/Buttons/Button/SplitButton',
  component: SplitButton,
  argTypes: {
    label: { control: 'text' },
    onPrimaryAction: { action: 'Primary action' },  // Simulación de acción
    options: { 
      control: 'object',
      defaultValue: [
        { label: 'Option 1', icon: '🍕', onClick: () => alert('Option 1 clicked!') },
        { label: 'Option 2', icon: '🍔', onClick: () => alert('Option 2 clicked!') },
        { label: 'Option 3', icon: '🌮', onClick: () => alert('Option 3 clicked!') },
      ]
    },
  },
};

const Template = (args) => <SplitButton {...args} />;

export const DefaultSplitButton = Template.bind({});
DefaultSplitButton.args = {
  label: 'Action',
  options : [
        { label: 'Option 1', icon: '🍕', onClick: () => alert('Option 1 clicked!') },
        { label: 'Option 2', icon: '🍔', onClick: () => alert('Option 2 clicked!') },
        { label: 'Option 3', icon: '🌮', onClick: () => alert('Option 3 clicked!') },
      ],
};

