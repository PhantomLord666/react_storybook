import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Button from './components/Buttons/Buttons/Button/Button.jsx';
import ButtonGroup from './components/Buttons/Buttons/ButtonGroup/ButtonGroup.jsx';
import Chips from './components/Buttons/Chips/Chips.jsx'; // Asegúrate de que la ruta sea correcta h
import FloatingActionButton from './components/Buttons/FloatingActionButton/FloatingActionButton.jsx'; // Asegúrate de que la ruta sea correcta h
import Tooltip from './components/Layout/Tooltip/Tooltip.jsx' 
import Accordion from './components/Navigation/Accordion/Accordion.jsx'
import { FaCheckCircle, FaInfoCircle, FaFolderOpen } from 'react-icons/fa';
import Message from './components/Notifications/Message/Message.jsx'

const args = {
  buttons: [
    { label: 'Button A' },
    { label: 'Button A' },
    { label: 'Button A' },
  ],
  mode: 'multiple',
};


const args2 = {
  buttons: [
    { label: 'left', variant: "outline"   },
    { label: 'center', variant: "outline" },
    { label: 'right', variant: "outline"  },
  ],
};

const args3 = {
  buttons: [
    { label: '', variant: "just_icon", size: "medium-i", icon: "🎃" },
    { label: '', variant: "just_icon", size: "medium-i", icon: "🎃" },
    { label: '', variant: "just_icon", size: "medium-i", icon: "🎃" },
  ],
};

const buttons = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];

const tableArgs = {
  title: 'Accordion with Table',
  icon: FaFolderOpen,
  variant: 'default',
  isTable: true,
  children: (
    <>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>30</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>25</td>
          <td>Los Angeles</td>
        </tr>
        <tr>
          <td>Michael Brown</td>
          <td>28</td>
          <td>Chicago</td>
        </tr>
      </tbody>
    </>
  ),
};

const msgArgs = {
  type: 'success',
  variant: 'text',
  icon: <FaCheckCircle />,
  children: 'Operation successful!',
  onClose: () => alert('Message closed!'),
  align: "left",
}

const defaultArgs = {
  title: 'Default Accordion',
  icon: FaInfoCircle,
  children: <p>This is the content of the accordion.</p>,
  variant: 'default',
};


  const handleChipSelect = (isSelected) => {
  };

  const maliciousHtmlContent = "<script>alert('Hacked!');</script><strong>Texto seguro</strong>";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Button label="Comprar ahora" variant="primary" size="large" />
    <p>&nbsp;</p>
    <Button label="" variant="just_icon" size="large-i" icon="🎃"/>
    <p>&nbsp;</p>
    <Button label="Cancel" variant="danger" size="medium" icon="🎃"/>
    <p>&nbsp;</p>
    <Message {...msgArgs}/>
    <p>&nbsp;</p>
    <Message {...msgArgs} variant="filled"/>
    <p>&nbsp;</p>
    <Message {...msgArgs} variant="outlined"/>
    <p>&nbsp;</p>
    <>
    <Accordion  {...defaultArgs} />
    <Accordion  {...tableArgs} />
    <Accordion  {...defaultArgs} />
    <Accordion  {...tableArgs} />
    </>
    <p>&nbsp;</p>
    <ButtonGroup {...args}/>
    <p>&nbsp;</p>
    <ButtonGroup {...args2}/>
    <p>&nbsp;</p>
    <Chips label="Selectable Chip" selectable={true} onSelect={handleChipSelect} />
    <p>&nbsp;</p>
    <FloatingActionButton label="Action Button" icon= '➕'  hideLabelOnHover= 'true' />
    <p>&nbsp;</p>
    <Tooltip text="asdf" htmlContent= "<div class='card 1'><div class='card_image'><img src='https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif' /></div><div class='card_title title-white'><p>Card Title</p></div></div>" 
      position= 'top' color= 'green' size= 'medium' trigger= 'click' >
              <button>Click para ver el menú</button>
    </Tooltip>
    <Tooltip text="asdf" htmlContent= {maliciousHtmlContent} 
      position= 'top' color= 'green' size= 'medium' trigger= 'click' >
              <button>Click para ver el menú</button>
    </Tooltip>
  </StrictMode>
)


