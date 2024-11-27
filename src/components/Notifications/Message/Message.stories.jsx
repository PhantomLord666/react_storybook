import React from 'react';
import Message from './Message';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

export default {
  title: 'Components/Notifications/Message',
  component: Message,
  argTypes: {
    type: {
      control: 'select',
      options: ['normal', 'success', 'info', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    onClose: { action: 'closed' },
  },
};

const Template = (args) => <Message {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: 'normal',
  variant: 'filled',
  children: 'This is a normal message.',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  variant: 'outlined',
  icon: <FaCheckCircle />,
  children: 'Operation successful!',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  variant: 'text',
  icon: <FaInfoCircle />,
  children: 'Some informational message.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  icon: <FaExclamationTriangle />,
  children: 'This is a warning!',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  icon: <FaTimesCircle />,
  children: 'An error occurred.',
};

export const WithCustomMessage = Template.bind({});
WithCustomMessage.args = {
  type: 'success',
  customMessage: 'Custom message with no children.',
};

export const WithTemplate = Template.bind({});
WithTemplate.args = {
  type: 'info',
  template: (
    <div>
      <strong>Custom Template:</strong> This is a template!
    </div>
  ),
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  type: 'info',
  variant: 'filled',
  children: 'This message has a close button.',
  onClose: () => alert('Message closed!'),
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  type: 'success',
  variant: 'outlined',
  children: 'This message does not have a close button.',
  onClose: undefined, // Explícitamente no proporcionamos onClose
};
