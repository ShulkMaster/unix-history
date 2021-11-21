import unixLogo from 'assets/unix-logo.png';
import {Escape} from 'components/console/escape';

export const Unix = () => {
  return (
    <div>
      <img src={unixLogo} alt="unix logo"/>
      <p>Unix fue un sistema operativo nacido en 1969, UNIX fue creado por miembros de los laboratorios Bell de
        AT&T</p>
      <p>El propósito era crear un buen sistema operativo, multitarea y multiusuario, rápido y seguro. En parte, UNIX
        (que se bautizó primero como UNICS) fue la respuesta a un proyecto fallido, MULTICS (Multiplexed Information and
        Computing Service) que en los años 60 intentaron crear el MIT, los laboratorios Bell de AT&T y la General
        Electric. A pesar de esta alianza prometedora, el resultado fue un sistema operativo caro y lento</p>
      <h2>Caracteristicas</h2>
      <ul>
        <li>Sencillo</li>
        <li>Multiusuario</li>
        <li>Tiempo compartido</li>
        <li>Escrito en assembly luego en C</li>
        <li>Permitia concatena entradas y salidas de programas sencillos para armar programas mas complejos</li>
        <li>Micro kernel</li>
      </ul>
      <Escape next="background"/>
    </div>
  );
};
