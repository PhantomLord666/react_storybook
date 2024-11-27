// Button.stories.js
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Buttons/Button/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    icon: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  variant: 'danger',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Button',
  variant: 'outline',
};

export const Link = Template.bind({});
Link.args = {
  label: 'Link Button',
  variant: 'link',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'large',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  icon: '🚀',
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Hover State',
  variant: 'primary',
};
Hover.parameters = {
  pseudo: { hover: true }, // Storybook addon to simulate hover
};

export const Focused = Template.bind({});
Focused.args = {
  label: 'Focused State',
  variant: 'primary',
};
Focused.parameters = {
  pseudo: { focus: true }, // Simular estado de foco
};

export const Pressed = Template.bind({});
Pressed.args = {
  label: 'Pressed State',
  variant: 'primary',
};
Pressed.parameters = {
  pseudo: { active: true }, // Simular estado de presionado
};

export const JustIcon = Template.bind({});
JustIcon.args = {
  label: '',
  size: 'medium-i',
  variant: 'just_icon',
  icon: '🚀',
};
