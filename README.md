# Actividad 2 - React

Ejercicio para la clase de React (ACM UD). 
Se implementa el uso de `useState` y `useEffect` con función de limpieza (cleanup).

### Funcionamiento:
- Hay un botón para montar y desmontar el componente `RastreadorMouse`.
- El componente escucha el movimiento del mouse solo dentro del recuadro.
- En la función de limpieza (`return` de `useEffect`) se elimina el listener con `removeEventListener` para evitar que siga corriendo cuando el componente se desmonte. Se puede ver en la consola.

### Ejecución:
```bash
npm install
npm run dev
```
