/** @type { import('@storybook/react').Preview } */
import '../build/css/variables.css'; // Asegúrate de que la ruta sea correcta

import { themes } from '@storybook/theming';
import { actions } from '@storybook/addon-actions';
import { withTests } from '@storybook/addon-jest';
import { fn } from '@storybook/test';

const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Century+Gothic&display=swap'; // Cambia a la fuente que desees
document.head.appendChild(googleFontsLink);

export const parameters = {
  actions: {
    handles: ['mouseover', 'click'], // Add specific actions here
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
  },
  // Define los temas para Storybook
  docs: {
    theme: themes.light, // El tema predeterminado
  },
};

export const decorators = [
  (Story, context) => {
    // Cambiar el tema en función del fondo seleccionado (light o dark)
    //const theme = context.parameters.backgrounds.values[1].value === '#000000' ? 'dark' : 'light';
   // const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const theme1= 'dark';
    const theme2= 'light';
    if (theme2 === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    return <Story />;
  },
];
