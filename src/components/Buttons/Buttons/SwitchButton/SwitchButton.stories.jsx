import React, { useState } from 'react';
import SwitchButton from './SwitchButton';

export default {
  title: 'Components/Buttons/Button/SwitchButton',
  component: SwitchButton,
  argTypes: {
    isOn: { control: 'boolean' },  // Control para cambiar el estado del switch
  },
};

const Template = (args) => {
  const [isOn, setIsOn] = useState(args.isOn);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return <SwitchButton isOn={isOn} onToggle={handleToggle} />;
};

export const DefaultSwitch = Template.bind({});
DefaultSwitch.args = {
  isOn: false,
};
