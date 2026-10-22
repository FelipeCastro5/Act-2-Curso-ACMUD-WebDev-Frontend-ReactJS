import { useState, useEffect, useRef } from 'react';

function RastreadorMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const cajaRef = useRef(null);

  useEffect(() => {
    const caja = cajaRef.current;
    if (!caja) return;

    console.log('Componente montado -> listener agregado');

    const actualizarPosicion = (e) => {
      const rect = caja.getBoundingClientRect();
      setPos({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top)
      });
    };

    caja.addEventListener('mousemove', actualizarPosicion);

    // Limpieza al desmontar
    return () => {
      console.log('Componente desmontado -> listener eliminado');
      caja.removeEventListener('actualizarPosicion', actualizarPosicion);
      caja.removeEventListener('mousemove', actualizarPosicion);
    };
  }, []);

  return (
    <div>
      <div ref={cajaRef} className="caja-mouse">
        <span>Mueve el cursor dentro de esta caja</span>
      </div>

      <p className="coords">
        Coordenadas: X: {pos.x}px | Y: {pos.y}px
      </p>
    </div>
  );
}

export default RastreadorMouse;
