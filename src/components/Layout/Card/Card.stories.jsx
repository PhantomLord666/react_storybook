// Card.stories.jsx
import React from "react";
import { Card } from "./Card";

export default {
  title: "Components/Layout/Card",
  component: Card,
  argTypes: {
    layout: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  layout: "vertical",
  image: "https://via.placeholder.com/600x400",
  title: "Vertical Card",
  description: "This is a vertical card layout. Perfect for compact designs.",
  footer: "Footer content",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  layout: "horizontal",
  image: "https://via.placeholder.com/600x400",
  title: "Horizontal Card",
  description:
    "This is a horizontal card layout. Great for showcasing content side by side.",
  footer: "Footer content",
};

