import Reacr from "react"
import { Default } from '../../Navigation/Carousel/Carousel.stories.jsx' 
import { SelectableChip, DisabledChip } from '../../Buttons/Chips/Chips.stories.jsx'
import { DefaultAccordion, FilledAccordionWithTable } from "../../Navigation/Accordion/Accordion.stories.jsx" 
import { FaInfoCircle, FaFolderOpen } from 'react-icons/fa';
import { Outline, Primary } from '../../Buttons/Buttons/Button/Button.stories.jsx'
import { WithGradient } from '../../Notifications/ProgressBar/ProgressBar.stories.jsx'
import './Product01.css';

export default {
  title: "Organisms/Product01" 
};

const defaultSlides = [
  'https://www.vapeandoando.com/cdn/shop/files/Waka-Titan-3.jpg?v=1729635451&width=1100',
  'https://www.vapeandoando.com/cdn/shop/files/Waka-Titan-6.jpg?v=1729635458&width=1100',
  'https://www.vapeandoando.com/cdn/shop/files/Waka-Titan-5.jpg?v=1729635455&width=1100', 
];

const defaultArgs = {
  title: 'DESCRIPCIÒN',
  icon: FaInfoCircle,
  children: <><p>Más duración, más satisfacción, ¡¡¡más WAKA!!! increíble durabilidad de hasta 30 mil puffs, con el mejor sabor.</p><p>Cuenta con pantalla de LED para dar seguimiento a la carga y al nivel de e-juice, resistencia dual mesh y funciona entre 15W y 25W.</p><p>Tiene 20ml de nicsalt de la mejor calidad y un tiempo de carga de solo 15 minutos.</p><p>¡No esperes más y compra tu Waka 30000!</p></>,
  variant: 'default',
  rightContent: { showIcon: true },
};

const defaultArgs2 = {
  title: 'CARACTERISTICAS',
  icon: FaFolderOpen,
  children: <><ul><li>Hasta 30,000 puffs (caladas)</li></ul></>,
  variant: 'default',
  rightContent: { showIcon: true },
};

const defaultArgs3 = {
  title: 'INCLUYE',
  icon: FaInfoCircle,
  children: <><ul><li>Waka soPro Titan 30000</li></ul></>,
  variant: 'default',
  rightContent: { showIcon: true },
};

const proBarArgs = {
  value: 35,
  max: 100,
  label: '',
  size: 'small',
  gradientStart: 'cyan',
  gradientEnd: 'purple',
  indeterminate: false,
  showLabel: false,
};

export const Producto = ({label="Cherry Soda Ice"}) => (
  <div className="container">
    <div className="asdf">
      <Default slides={defaultSlides} />
    </div>
    <div className="content">
       <div className="content-intern">
         <h4>Waka soPro Titan 30000</h4>
         <span>$470</span>
          <p></p>
          <div>
            <SelectableChip label={label} selectable="true" /> 
            <DisabledChip label='Strawberry Kiwi Ice' disabled="true" /> 
            <SelectableChip label='Strawberry Mango Ice' selectable="true" /> 
            <SelectableChip label='Watermelon Ice' selectable="true" /> 
            <SelectableChip label='Peach Blue Raspberry Ice' selectable="true" /> 
          </div>
          <div>
            <p>Waka soPro Titan 30000 - desata la furia del vapeo.</p>
            <p>Waka, la marca más vendida de vapes desechables, sorprende con una bestia del vapeo, el Waka soPro Titan 30000, ofrece la característica calidad y sabor pero ahora con mucho más duración, ¡¡HASTA 30,000 puffs de satisfacción garantizada!!</p>
            <p>Con 2 modos de uso:</p>
            <ul>
              <li>Eco - hasta 30,000 puffs 3% nicotina</li>
              <li>Boost - hasta 20,000 puffs 5% nicotina</li>
            </ul>
            <p>Una maravilla de tecnología y desempeño, que carga en sólo 15 minutos y está diseñado para satisfacer hasta al vapeador más exigente y con una duración como ningún otro.</p>
            <p>Descubre todos los <a href="#">vapes desechables</a> que Vapeando Ando tiene para ti</p>
          </div>
          <p>&nbsp;</p>
          <DefaultAccordion {...defaultArgs}/>
          <DefaultAccordion {...defaultArgs2}/>
          <DefaultAccordion {...defaultArgs3}/>
          <Outline label="AGREGAR AL CARRITO" variant="outline"/>
          <p></p>
          <Primary label="COMPRAR AHORA" variant="primary"/>
          <p> Dese prisa, solo quedan 7 artículos en stock! </p>
          <WithGradient {...proBarArgs} />
        </div>
      </div>
  </div>
);

/*
export default Producto;
*/
