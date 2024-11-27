// Badge.stories.js
import React from 'react';
import { FaCheck, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import Badge from './Badge';

export default {
  title: 'Components/Notifications/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
  text: 'Default Badge',
  variant: 'default',
  color: 'primary',
};

export const OutlinedBadge = Template.bind({});
OutlinedBadge.args = {
  text: 'Outlined Badge',
  variant: 'outlined',
  color: 'secondary',
};

export const FilledBadge = Template.bind({});
FilledBadge.args = {
  text: 'Filled Badge',
  variant: 'filled',
  color: 'success',
  icon: FaCheck,
  iconPosition: 'left',
};

export const WarningBadgeWithIcon = Template.bind({});
WarningBadgeWithIcon.args = {
  text: 'Warning',
  variant: 'filled',
  color: 'warning',
  icon: FaExclamationTriangle,
  iconPosition: 'right',
};

export const LargeDangerBadge = Template.bind({});
LargeDangerBadge.args = {
  text: 'Danger',
  variant: 'default',
  color: 'danger',
  size: 'large',
  icon: FaInfoCircle,
  iconPosition: 'left',
};
