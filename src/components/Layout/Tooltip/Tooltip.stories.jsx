// Tooltip.stories.jsx
import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Layout/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: 'text' },
    position: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
    color: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    trigger: {
      control: { type: 'select', options: ['hover', 'click'] },
    },
    isMenu: { control: 'boolean' },
    menuItems: { control: 'object' },
  },
};

const Template = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Tooltip {...args}>
      <button>"🎃" Hover or Click Me</button>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Tooltip text 🎃 ',
  position: 'top',
  color: 'black',
  size: 'medium',
  trigger: 'hover',
};

export const TooltipMenu = Template.bind({});
TooltipMenu.args = {
  isMenu: true,
  menuItems: ['Item 1   🎃', 'Item 2    🎃', 'Item 3    🎃'],
  position: 'bottom',
  color: 'blue',
  size: 'medium',
  trigger: 'hover',
};

export const LargeTooltipMenuClick = Template.bind({});
LargeTooltipMenuClick.args = {
  isMenu: true,
  menuItems: ['Action 1', 'Action 2', 'Action 3', 'Action 4'],
  position: 'right',
  color: 'green',
  size: 'large',
  trigger: 'click',
};

export const HTMLContent = Template.bind({});
HTMLContent.args = {
  htmlContent: "<div class='card 1'><div class='card_image'> <img src='https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif' /> </div><div class='card_title title-white'><p>Card Title</p></div></div>",
  position: 'right',
  color: 'green',
  size: 'medium',
  trigger: 'hover',
};
