import React, { useState } from 'react';
import ProgressButton from './ProgressButton';

export default {
  title: 'Components/Buttons/Button/ProgressButton',
  component: ProgressButton,
  argTypes: {
    label: { control: 'text' },
    isLoading: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [isLoading, setIsLoading] = useState(args.isLoading);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000); // Simula un proceso de 3 segundos
  };

  return <ProgressButton {...args} isLoading={isLoading} onClick={handleClick} />;
};

export const DefaultProgressButton = Template.bind({});
DefaultProgressButton.args = {
  label: 'Submit',
  isLoading: false,
};
