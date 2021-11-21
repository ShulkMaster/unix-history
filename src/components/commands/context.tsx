import {Escape} from '../console/escape';

export const Context = () => {
  return (
    <div>
      <p>
        Dado que a partir de la Version 7 de unix el lincensiamiento unicamente distribuia los binarios
        Richard Stallman decidio reescribir el sistema UNIX como free software. En aquel entonces la mayor
        parte del esfuerzo se reescribir el sotware y libreria como open source entre ellos

        y esto con el fin de replicar las que Unix ya poseia y algunos de sus comandos comunes.
      </p>
      <ul>
        <li>Text editor</li>
        <li>Compilers</li>
        <li>Utilidades</li>
        <li>shell</li>
      </ul>
      <p>
        Aunque el desarrollo de herramientas iba muy rapido, el del kernel era mucho mas lento,
        aqui es donde entra Linus Torvals y su kernel el cual esta inspirado en MINIX otro Unix clone el
        cual fue desarrollado basandose en Unix verion 7.
      </p>
      <p>
        A este le faltaban muchas de las cosas con las que el usurio esperaba interactuar y asi es como en 1991
        surge el proyecto GNU/Linux combinando ambos.
      </p>
      <br/>
      <h2>Legado</h2>
      <p>
        50 años despues el legado de UNIX aun se mantiene vivo como uno de los sistemas operativos
        mas influyentes en la historia, y muchas de sus caracteristicas oroginales hacen posible el entorno
        de computacion que conocemos hoy en dia
      </p>
      <h1>Gracias ✨😎✨</h1>
      <Escape/>
    </div>
  );
};
