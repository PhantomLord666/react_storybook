import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Buttons/Button/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' }, // Control de Storybook para cambiar el estado del checkbox
  },
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked); // Actualiza el estado del checkbox
  };

  return <Checkbox label="I agree" checked={isChecked} onChange={handleCheckboxChange} />;
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  checked: false, // Estado inicial del checkbox
};
