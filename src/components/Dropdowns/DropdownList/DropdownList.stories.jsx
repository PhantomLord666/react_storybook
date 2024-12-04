// DropdownList.stories.jsx
import React from "react";
import { DropdownList } from "./DropdownList";

export default {
  title: "Components/Dropdowns/DropdownList",
  component: DropdownList,
};

const Template = (args) => <DropdownList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ],
  placeholder: "Choose an option",
  onSelect: (item) => alert(`Selected: ${item.label}`),
};
