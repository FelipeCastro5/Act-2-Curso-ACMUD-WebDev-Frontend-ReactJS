import { useState } from 'react';
import RastreadorMouse from './components/RastreadorMouse';
import './styles.css';

function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <h2>Actividad 2 - useState y useEffect con limpieza</h2>
      
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Desmontar componente' : 'Montar componente'}
      </button>

      {mostrar ? (
        <RastreadorMouse />
      ) : (
        <p style={{ color: 'red', marginTop: '15px' }}>
          El componente no está montado (listener removido). Revisa la consola F12.
        </p>
      )}
    </div>
  );
}

export default App;
