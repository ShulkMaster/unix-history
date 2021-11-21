import {Escape} from 'components/console/escape';

export const Reasons = () => {
  return (
    <div>
      <h2>Rasones</h2>
      <p>
        Tras la cancelacion del proyecto <b>MULTICS</b> Ken THomsomp y Denis Ritchie decidieron iniciar
        un nuevo proyecto con un enfoque distinto, ellos querian diseñar un <i>OS</i> que fuera mas sencillos
        y facil de operar, a la par de unos requerimientos de hardware menos demandantes.
      </p>
      <p>
        Esto resulto en un <i>Kernel</i> bastante pequeño desde el cual es equipo podia expandir el espacio de
        usuario como fuera necesario bajo demanda a travez de revisiones y nuevas versiones.
      </p>
      <p>
        El proyecto en 1970 aun no tenia nombre, hasta que Bren Kernighan sugirio
        <i>Uniplexed Information and Computing Service</i> abreviado <b>UNICS</b> que luego cambio a
        <b>UNIX</b>
      </p>
      <p>
        Las primeras versiones estuvieron escritas en assembly lo que lo convertia en un sitema con una huella de
        memoria bastante pequeña
      </p>
      <img
        src="https://i2.wp.com/architecnologia.es/wp-content/uploads/2019/09/dennis-ritchie-ken-thompson.jpg?fit=800%2C504&ssl=1"
        alt="unix"/>
      <p>Unix ejecutandoce en una PDP-11</p>
      <Escape next="versions"/>
    </div>
  );
};
