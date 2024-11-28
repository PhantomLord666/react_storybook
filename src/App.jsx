import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chips from './components/Buttons/Chips/Chips'; // Asegúrate de que la ruta sea correcta

function App() {
  const [count, setCount] = useState(0)

  // Estado para controlar la visibilidad del chip closable
  const [isChipVisible, setIsChipVisible] = useState(true);

  // Función para manejar el cierre del chip
  const handleChipClose = () => {
    setIsChipVisible(false);
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <div>
      <h1>Hello, React!</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
           <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       <h1>Chips Example with Closable Chip</h1>
      
      {/* Solo renderizamos el chip si isChipVisible es true */}
      {isChipVisible && (
        <Chips
          label="Closable Chip"
          closable={true}
          onClose={handleChipClose}
        />
      )}
      


    </>
  )
}

export default App
