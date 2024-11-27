// BadgeWrapper.stories.js
import React from 'react';
import BadgeWrapper from './BadgeWrapper';
import { FaShoppingCart } from 'react-icons/fa';

export default {
  title: 'Components/Notifications/BadgeWrapper',
  component: BadgeWrapper,
};

const Template = (args) => (
  <BadgeWrapper {...args}>
  </BadgeWrapper>
);

export const DefaultBadgeOnImage = Template.bind({});
DefaultBadgeOnImage.args = {
  badgeText: 'New',
  badgeVariant: 'default',
  badgeColor: 'primary',
  badgePosition: 'top-right',
  children: <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="Target Image" style={{ width: '100%' }} />,
};

export const OutlinedBadgeOnButton = Template.bind({});
OutlinedBadgeOnButton.args = {
  badgeText: 'Sale',
  badgeVariant: 'outlined',
  badgeColor: 'danger',
  badgePosition: 'top-right',
  children: <button style={{ padding: '1em 1em', fontSize: '1em' }}>Buy Now</button>,
};

export const SuccessBadgeOnProduct = Template.bind({});
SuccessBadgeOnProduct.args = {
  badgeText: '17',
  badgeVariant: 'filled',
  badgeColor: 'success',
  badgePosition: 'top-right',
  children: <label style={{ fontSize: '1em' }}>Hello asdf </label>,
};

// Nueva historia con un icono como children
export const BadgeOnIcon = Template.bind({});
BadgeOnIcon.args = {
  badgeText: '5', // Podría ser un contador, como en un carrito de compras
  badgeVariant: 'filled',
  badgeColor: 'success',
  badgePosition: 'top-right',
  children: <FaShoppingCart size={30} style={{ color: '#333' }} />,
  small: true,
};
