import React from 'react';
import Chips from './Chips';

export default {
  title: 'Components/Buttons/Chips',
  component: Chips,
  argTypes: {
    label: { control: 'text', defaultValue: 'Chip' },
    icon: { control: 'text', defaultValue: '🔷' },
    closable: { control: 'boolean', defaultValue: false },
    selectable: { control: 'boolean', defaultValue: false },
    selected: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    onClose: { action: 'closed' },
    onSelect: { action: 'selected' },
  },
};

const Template = (args) => <Chips {...args} />;

export const BasicChip = Template.bind({});
BasicChip.args = {
  label: 'Basic Chip',
};

export const ClosableChip = Template.bind({});
ClosableChip.args = {
  label: 'Closable Chip',
  closable: true,
};

export const SelectableChip = Template.bind({});
SelectableChip.args = {
  label: 'Selectable Chip',
  selectable: true,
};

export const SelectedChip = Template.bind({});
SelectedChip.args = {
  label: 'Selected Chip',
  selectable: true,
  selected: true,
};

export const DisabledChip = Template.bind({});
DisabledChip.args = {
  label: 'Disabled Chip',
  disabled: true,
};

export const ChipWithIcon = Template.bind({});
ChipWithIcon.args = {
  label: 'Chip with Icon',
  icon: '🌟',
};

export const SelectableWithIcon = Template.bind({});
SelectableWithIcon.args = {
  label: 'Selectable Chip with Icon',
  icon: '🌟',
  selectable: true,
};
