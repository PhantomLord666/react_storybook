import React from 'react';
import FloatingActionButton from './FloatingActionButton';

export default {
  title: 'Components/Buttons/FloatingActionButton',
  component: FloatingActionButton,
  argTypes: {
    label: { control: 'text', defaultValue: 'Action' },
    icon: { control: 'text', defaultValue: '➕' }, 
    color: {
      control: { type: 'select', options: ['primary', 'secondary', 'danger', 'success', 'info', 'outline'] },
    },
    hideLabelOnHover: { control: 'boolean', defaultValue: false },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean', defaultValue: false },
    fixed: { control: 'boolean', defaultValue: false },  
  },
};

const Template = (args) => (
  <div style={{
    position: 'relative',
    backgroundColor: '#f0f0f0',  // Fondo claro para probar contraste
    height: '200px',  // Altura para permitir espacio visual
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <span style={{ position: 'absolute', fontSize: '18px', color: '#333' }}>
      Texto de Fondo Detrás del Botón
      

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat nisl. Etiam lobortis ante a egestas aliquam. Maecenas nec turpis bibendum sem blandit cursus. Aliquam vitae ante placerat, tristique mi id, lobortis magna. Mauris ac fringilla ex. Vivamus ut ullamcorper diam, eu hendrerit sapien. Mauris ac dui eget ante rutrum bibendum. Etiam consequat sapien vel laoreet facilisis. In porttitor, lorem sit amet faucibus aliquam, massa turpis congue justo, porta consectetur massa nibh at eros. Morbi viverra nisl non risus convallis tempus. Nam metus nisl, dictum eleifend pretium nec, dignissim sed tellus. In maximus nisl nec dolor consectetur, eget vestibulum ante dictum. Aenean ligula nisi, mattis eu tincidunt sed, convallis ac nisl.

Cras accumsan ac odio ut bibendum. Phasellus a feugiat augue. Curabitur eget est ut ipsum pulvinar fringilla at vitae mi. Morbi sit amet sapien sed tellus malesuada ullamcorper ac elementum lorem. Duis sit amet lacinia magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam porttitor at tellus quis ullamcorper. Vestibulum accumsan blandit lobortis. Nunc tristique neque eleifend suscipit iaculis. Maecenas et nunc magna. Nulla tincidunt tellus velit, sit amet mattis nulla accumsan in. Ut vel erat leo. Maecenas eget leo vel urna maximus blandit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis mauris enim, nec sagittis elit vehicula sed. Sed euismod sit amet ipsum ut iaculis. Sed ornare euismod orci, sed suscipit magna lobortis sit amet. Duis consectetur in lacus sed mollis. Pellentesque fringilla ullamcorper finibus. Sed arcu nisl, sagittis eu felis nec, lobortis malesuada eros. Morbi volutpat nec purus sit amet lacinia. Suspendisse sapien massa, pulvinar sed volutpat id, viverra vel justo. Nulla tristique bibendum dolor, vitae tempus mi cursus vestibulum. Aliquam commodo suscipit lectus, in aliquam leo sagittis sit amet. Vestibulum non justo vel nibh malesuada efficitur.

Nam rutrum justo ac libero volutpat dapibus et ac mauris. Duis vel dolor semper dolor aliquet accumsan. Aenean faucibus mauris non ipsum eleifend, quis sodales nulla gravida. Maecenas tincidunt dignissim neque, id hendrerit libero suscipit ac. Nullam accumsan lectus quis nisi placerat tempus. Morbi urna ipsum, rutrum id augue eget, vulputate dignissim dolor. Aenean sed dui eu lorem convallis maximus. Quisque porta sapien at pharetra sollicitudin. Ut id tristique neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras non urna at tellus rutrum mollis. Aenean egestas ex risus, ac eleifend magna cursus nec. Duis efficitur feugiat mollis. Nunc nibh dui, maximus eget ex non, molestie fringilla orci.

Sed tempor scelerisque porttitor. Praesent suscipit nulla nisi, non malesuada tellus facilisis posuere. Donec tincidunt consequat hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus ac magna vestibulum tempus. Duis aliquet lacus eu aliquam pellentesque. Sed vel lorem ac dui faucibus semper eu id odio. Quisque dictum fringilla iaculis. Pellentesque sapien urna, tempus vitae odio ut, finibus varius sem. Vivamus nulla sem, ullamcorper vitae felis ac, condimentum hendrerit orci. Donec sagittis erat vel neque sagittis, vitae pellentesque diam imperdiet. Cras feugiat sapien nec libero interdum hendrerit. Fusce at mollis massa.
    </span>
    <FloatingActionButton {...args} />
  </div>
);

export const Info = Template.bind({});
Info.args = {
  label: 'Info',
  icon: 'ℹ️',
  color: 'info',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline',
  icon: '➕',
  color: 'outline', // Usamos 'outline' como color
};

export const HideLabelOnHover = Template.bind({});
HideLabelOnHover.args = {
  label: 'Hover Me',
  icon: '➕',
  hideLabelOnHover: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Add Item',
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  label: '',
  icon: '➕', // Botón solo con ícono
};

export const IconAndLabel = Template.bind({});
IconAndLabel.args = {
  label: 'Action Button',
  icon: '➕', // Botón solo con ícono
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: 'Add to Cart',
}; 

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Action',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Action',
  color: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Action',
  color: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success Action',
  color: 'success',
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Action',
  disabled: true,
};
