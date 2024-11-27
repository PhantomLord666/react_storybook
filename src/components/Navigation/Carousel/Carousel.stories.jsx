import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Components/Navigation/Carousel',
  component: Carousel,
  argTypes: {
    slides: {
      control: 'object',
      description: 'Array de elementos para renderizar en los slides (URLs de imágenes o nodos React).',
    },
    enableAutoplay: {
      control: 'boolean',
      description: 'Habilita/deshabilita el autoplay.',
    },
    infiniteLooping: {
      control: 'boolean',
      description: 'Habilita/deshabilita el looping infinito.',
    },
    showIndicators: {
      control: 'boolean',
      description: 'Muestra los indicadores de navegación.',
    },
    showPlayButton: {
      control: 'boolean',
      description: 'Muestra el botón para pausar/reanudar autoplay.',
    },
    showArrows: {
      control: 'boolean',
      description: 'Muestra las flechas de navegación.',
    },
    slideInterval: {
      control: { type: 'number', min: 1000, step: 500 },
      description: 'Intervalo de tiempo entre slides en milisegundos.',
    },
  },
};

const defaultSlides = [
  'https://www.vapeandoando.com/cdn/shop/files/Waka-Titan-3.jpg?v=1729635451&width=1100',
  "https://dreamlandadventuretourism.com/wp-content/uploads/2023/12/img-world-ticket-from-dream.webp",
  "https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9.jpg",
];

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  slides: defaultSlides,
  enableAutoplay: false,
  infiniteLooping: false,
  showIndicators: true,
  showPlayButton: true,
  showArrows: true,
  slideInterval: 3000,
};

export const AutoplayEnabled = Template.bind({});
AutoplayEnabled.args = {
  ...Default.args,
  enableAutoplay: true,
  infiniteLooping: true,
};

export const CustomSlides = Template.bind({});
CustomSlides.args = {
  slides: [
    <div style={{ backgroundColor: 'red', height: '300px', color: 'white' }}>Custom Slide 1</div>,
    <div style={{ backgroundColor: 'blue', height: '300px', color: 'white' }}>Custom Slide 2</div>,
    <div style={{ backgroundColor: 'green', height: '300px', color: 'white' }}>Custom Slide 3</div>,
  ],
  enableAutoplay: true,
  infiniteLooping: true,
  slideInterval: 2000,
};

