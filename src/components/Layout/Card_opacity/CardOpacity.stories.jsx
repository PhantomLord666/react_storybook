// src/components/CardOpacity/CardOpacity.stories.js
import React from 'react';
import CardOpacity from './CardOpacity';

export default {
  title: 'Components/Layout/CardOpacity',
  component: CardOpacity,
};


const Template = (args) => (
  <div
    style={{
      position: 'relative',
      minHeight: '100vh', // El div ocupa todo el alto del viewport
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'end',
    }}
  >
    {/* Video de fondo */}
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Hace que el video cubra todo el área del div
      }}
    >
   
      <source src="//www.vapeandoando.com/cdn/shop/videos/c/vp/8d70ad153adc4aad8edb3431f3e06eca/8d70ad153adc4aad8edb3431f3e06eca.HD-1080p-7.2Mbps-37095668.mp4?v=0" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Contenedor del componente CardOpacity */}
    <CardOpacity {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
  color: '#fff',
  title: 'Geekvape B100',
  description: 'Vapeador anti fugas, resistente a golpes, a prueba de agua y polvo IPV6, con producción de vapor y sabor inigualables',
  buttonText: 'COMPRAR AHORA',
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  background: 'rgba(255, 0, 0, 0.5)', // Semi-transparent red
  color: '#fff',
  title: 'Custom Card Title',
  description: 'This card has a custom background.',
  buttonText: 'Learn More',
};

