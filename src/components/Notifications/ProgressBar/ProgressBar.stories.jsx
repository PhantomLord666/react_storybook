import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Components/Notifications/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number', min: 0, max: 100 } },
    label: { control: 'text' },
    variant: { 
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    showLabel: { control: 'boolean' },
    gradientStart: { control: 'color' },
    gradientEnd: { control: 'color' },
    indeterminate: { control: 'boolean' },
    indeterminateStart: { control: 'color' },
    indeterminateEnd: { control: 'color' },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  max: 100,
  label: '',
  variant: 'primary',
  size: 'medium',
  showLabel: true,
  gradientStart: '',
  gradientEnd: '',
  indeterminate: false,
  indeterminateStart: '#007bff',
  indeterminateEnd: '#6c757d',
};

export const WithGradient = Template.bind({});
WithGradient.args = {
  value: 75,
  max: 100,
  label: '',
  size: 'medium',
  gradientStart: '#ff7e5f',
  gradientEnd: '#feb47b',
  indeterminate: false,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  value: 0,
  max: 100,
  label: 'Loading...',
  variant: 'primary',
  size: 'medium',
  showLabel: true,
  indeterminate: true,
  indeterminateStart: '#ff7e5f',
  indeterminateEnd: '#feb47b',
};

export const Variants = () => (
  <>
    <ProgressBar value={70} max={100} variant="primary" size="medium" />
    <ProgressBar value={50} max={100} variant="secondary" size="medium" />
    <ProgressBar value={90} max={100} variant="success" size="medium" />
    <ProgressBar value={30} max={100} variant="danger" size="medium" />
    <ProgressBar value={60} max={100} variant="warning" size="medium" />
    <ProgressBar value={80} max={100} variant="info" size="medium" />
  </>
);

export const Sizes = () => (
  <>
    <ProgressBar value={70} max={100} variant="primary" size="small" />
    <ProgressBar value={50} max={100} variant="primary" size="medium" />
    <ProgressBar value={90} max={100} variant="primary" size="large" />
  </>
);

