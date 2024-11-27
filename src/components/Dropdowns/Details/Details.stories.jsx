// Details.stories.js
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Usa algún ícono de react-icons
import Details from './Details';

export default {
  title: 'Components/Dropdrowns/Details',
  component: Details,
};

const Template = (args) => <Details {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'More Information',
  content: 'This is the content that appears when you expand the details.',
  icon: FaInfoCircle,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  title: 'No Icon Example',
  content: 'This is the content that appears when you expand the details.',
};

