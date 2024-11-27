
import React from "react";
import SpeedDial from "./SpeedDial";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"; // Usamos iconos para las acciones

export default {
  title: "Components/Buttons/SpeedDial",
  component: SpeedDial,
};

const actions = [
  { label: "Add", icon: <FaPlus />, onClick: () => alert("Add clicked!") },
  { label: "Edit", icon: <FaEdit />, onClick: () => alert("Edit clicked!") },
  { label: "Delete", icon: <FaTrash />, onClick: () => alert("Delete clicked!") },
];

const Template = (args) => <SpeedDial {...args} />;

export const Default = Template.bind({});
Default.args = {
  actions,
};

export const EmptyActions = Template.bind({});
EmptyActions.args = {
  actions: [],
};

