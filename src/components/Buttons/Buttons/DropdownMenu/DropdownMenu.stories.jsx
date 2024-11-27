import React from 'react';
import DropdownMenu from './DropdownMenu';

export default {
  title: 'Components/Buttons/Button/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    label: { control: 'text' },
    items: { 
      control: 'object',
      defaultValue: [
        { label: 'Option 1', icon: '🍕' },
        { label: 'Option 2', icon: '🍔' },
        { label: 'Option 3', icon: '🌮' },
      ]
    },
    trigger: {
      control: { type: 'radio' },
      options: ['hover', 'click'],  // Control para seleccionar entre hover y click
      defaultValue: 'hover',
    },
  },
};

const Template = (args) => <DropdownMenu {...args} />;

export const DefaultDropdownMenu = Template.bind({});
DefaultDropdownMenu.args = {
  label: 'Menu',
  trigger: 'hover',  // Valor predeterminado para el trigger
  items: [
    { label: 'Option 1', icon: '🍕' },
    { label: 'Option 2', icon: '🍔' },
    { label: 'Option 3', icon: '🌮' },
  ],
};

