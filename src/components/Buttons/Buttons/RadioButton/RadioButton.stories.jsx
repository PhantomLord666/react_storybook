import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/Buttons/Button/RadioButton',
  component: RadioButton,
  argTypes: {
    selectedValue: { control: 'text' }, // Permite cambiar el valor seleccionado desde los controles
  },
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);

  const handleChange = (value) => {
    setSelectedValue(value); // Actualiza el valor seleccionado
  };

  return (
    <div>
      <RadioButton
        name="radioGroup"
        label="Option 1"
        value="option1"
        selectedValue={selectedValue}
        onChange={handleChange}
      />
      <RadioButton
        name="radioGroup"
        label="Option 2"
        value="option2"
        selectedValue={selectedValue}
        onChange={handleChange}
      />
      <RadioButton
        name="radioGroup"
        label="Option 3"
        value="option3"
        selectedValue={selectedValue}
        onChange={handleChange}
      />
    </div>
  );
};

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  selectedValue: 'option1', // Valor seleccionado por defecto
};
