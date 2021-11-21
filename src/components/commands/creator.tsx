import {Escape} from 'components/console/escape';

export const Creator = () => {
  return (
    <div>
      <h2>Kenneth Lane Thompson</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Ken_Thompson_02.jpg" alt="Kenneth Lane Thompson"/>
      <p>
        En 1965 se diploma en ciencias y en 1966 consigue un máster en ingeniería eléctrica y ciencias de la
        computación, por la universidad de California.</p>
      <p>
        En los años 60, Thompson trabajo el sistema operativo Multics. Mientras escribía Multics,
        Thompson creó el lenguaje de programación B, al que llamó así por su esposa, Bonnie, el cual sería el precursor
        del C. Thompson abandono el desarrollo de Multics por su creciente complejidad, y en 1969 crean el sistema
        operativo
        UNIX junto a Dennis Ritchie.</p>
      <p>A finales de 2000, Thompson se retiró de los laboratorios de Bell, para trabajar en Entrisphere donde estuvo
        hasta 2006. Actualmente trabaja para Google en el desarrollo del lenguaje Go</p>
      <br/>
      <h2>Dennis Ritchie</h2>
      <img src="http://upload.wikimedia.org/wikipedia/commons/e/e6/Dennis_Ritchie.jpg" alt="denis"/>
      <p>
        <i>9 de septiembre de 1941 - 12 de octubre de 2011</i>
      </p>
      <p>es conocido sobre todo por ser el creador del lenguaje de programación C y cocreador, junto con Ken Thompson,
        del sistema operativo Unix. También fue coautor junto con Brian Kernighan del manual El lenguaje de programación
        C
      </p>
      <p>
        Recibió el Premio Turing de 1983 por su desarrollo de la teoría de sistemas operativos genéricos y su
        implementación en la forma del sistema Unix.
      </p>
      <Escape next="reasons"/>
    </div>
  );
};
