// Avatar.stories.jsx
import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Components/Layout/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    variant: {
      control: { type: "select", options: ["circle", "square"] },
    },
    status: {
      control: { type: "select", options: ["online", "offline", "busy", null] },
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  variant: "circle",
  src: "https://via.placeholder.com/150",
  alt: "Avatar",
  status: null,
};

export const Online = Template.bind({});
Online.args = {
  size: "medium",
  variant: "circle",
  src: "https://via.placeholder.com/150",
  alt: "Avatar",
  status: "online",
};

export const Offline = Template.bind({});
Offline.args = {
  size: "medium",
  variant: "square",
  src: "https://via.placeholder.com/150",
  alt: "Avatar",
  status: "offline",
};

export const Busy = Template.bind({});
Busy.args = {
  size: "large",
  variant: "circle",
  src: "https://via.placeholder.com/150",
  alt: "Avatar",
  status: "busy",
};

