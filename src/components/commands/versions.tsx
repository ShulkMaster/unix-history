import {Escape} from 'components/console/escape';

export const Versions = () => {
  return (
    <div>
      <h2>Version 1</h2>
      <p>
        La primera verion de UNIX vio la luz en noviembre de 1971, en muchas formas nos recuerda a los sistemas
        UNIX y LINUX modernos pero a su vez tambien tenia cosas que lo hacian muy diferente, muchos programas que
        hoy se dan por centado como <i>PWD</i> o <i>VI</i> aun no existian, no poseia nada de TCP/IP stack,
        tampoco tenia compilador para C, ademas fue el UNIX con el kernel mas pequeño.
      </p>
      <p>
        Otros comandos de llamaban distinto por ejemplo para cambiar directorio no se usaba <i>CD</i> sino <i>CHDIR</i>
      </p>
      <h2>Version 2</h2>
      <p>
        En 1972 se comenzo el desarollo del lenguaje <i>C</i> y con el desarrollo del lenguajes surgio unix en su
        segunda
        version ahora con un compilador de C interado el cual los usuarios podian usar para crear sus propios programas
      </p>
      <h2>version 3</h2>
      <p>
        Siguiendo las pasos de su antecesor la tercera version incluyo un Depurador para <i>C</i>
      </p>
      <h2>Version 4</h2>
      <p>
        Lanzada en noviembre de 1973 se reescribio el codigo del nucleo usando <i>C</i> en lugar de <i>assembly</i>
        ya que el sistema se habia vuelto muy popular y el uso de <i>C</i> les permitio tener mucha portabilidad
      </p>
      <h2>Version 5</h2>
      <p>
        Esta fue la primera version en ser liberada para universidades selectas, que les permitia a los usuarios y
        estudiantes
        poder hechar un vistazo y estudiar el sistema operativo, como el funcionamiento de ciertos comandos
        como <i>print</i>
        y <i>mork</i>
      </p>
      <h2>Version 6</h2>
      <p>
        Despues de la version 5 UNIX atrajo bastante atencion en el sector educativo, en uno de ellos John Lyons
        lanzo un libro en el cual documentaba el codigo de unix version 6 linea a linea para permitirles a los
        estudiantes
        tener una mayor comprension del sistema.
      </p>
      <p>
        En esta version unix tambien entro en terreno comercial ya que posia ciertas funciones de utilidad
        como <i>crawl</i>, <i>chgroup</i> y llamadas al sistema <i>trace</i>
      </p>
      <p>
        Ademas la primera version de <strong>BSD</strong> se baso en unix 6 por eso esta version es importante
        para la posteriores guerras unix.
      </p>
      <h2>Version 7</h2>
      <p>
        Lanzado en 1979 es conocido como el ultimo unix verdadero, ademas fue el primero en usar la <i>Bourne
        shell</i> y expandio
        los comandos de usuario desde 81 a 136 y llamadas al sistema de 43 a 47, ademas de ir bundle con programas como:
        <ul>
          <li>tail</li>
          <li>make</li>
          <li>tower</li>
        </ul>
      </p>
      <p>
        Ademas incorporo el protocolo <i>UUCP</i> que permitia intercambio de archivos entre sistemas UNIX y comandos
        ejecutdos remotamente</p>
      <p>
        Otro cambio importante fue el lincensiamiento, parcialmente en respuesta a John Lyons que tenia u libro
        que describia el sistema en mucho detalle, al parecer mucho como para los ojos de AT&T.
      </p>
      <h2>Ramificaciones</h2>
      <p>De la version 7 de unix nacieron 2 ramificaciones importantes</p>
      <p>
        <ol>
          <li>3BDS: 1979: Berkeley's UNIX</li>
          <li>Unix Sytem III: 1981: sucesor mantenido por AT&T</li>
        </ol>
        ambos sistemas evolucionaron rapidamente, 3BSD a 4BSD en 1980 y System 3 en System 5 1983
        una batalla de innovacion se genero entre ambos grupos, SystemIII se veia a si mismo como el estandard de unix
        mientras que DBS fue la primera de las dos en tener un stack para TCP/IP
      </p>
      <p>System III y SystemV se volverian la base para los unix comerciales mas exitosos como</p>
      <ul>
        <li>HP: HP-UX</li>
        <li>IMB: Solaris</li>
        <li>Bell Labs: Unixware</li>
      </ul>
      <img
        className="img-preview-kernel"
        src="https://sio2sio2.github.io/doc-linux/_images/Unix_history-simple.svg"
        alt="versions"/>
      <Escape next="context"/>
    </div>
  );
};
