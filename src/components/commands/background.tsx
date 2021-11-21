import {Escape} from 'components/console/escape';

export const Background = () => {
  return (
    <div>
      <h2>Background</h2>
      <br/>
      <h3>Time sharing</h3>
      <p>Desde finales de los años 50 las computadoras se habian vuelto lo sufucientemente rapidas como para que el
        hecho de cargar los programas fuese mas lento que ejecutarlos por lo que los sistemas operativos populares
        para la epoca solian usar un metodo de administracion llamado <i><b>Time sharing</b></i> que les permitia a
        multiples usuarios conectarse desde sus terminales y ejecutar los prgramas desde ahi los que les daba un
        feedback
        virtualmente inmediato sin necesidad de pasar dias o hasta semanas esperando el resultado que les enviase la
        persona
        que cargaba el procesamiento por lotes
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWWuEMQQoFMyhZuesK05NKcC2Pk6Opu-W8w&usqp=CAU"
        alt="time sharing"/>
      <p>Uno de los primeros en implementar esto fue un sistema llamado <i>compatible time sharing system</i> tambien
        conosido
        como <b>CTSS</b> desarollado por el <b>MIT</b> publicado en 1961.
        Su concepto evoluciono y fue la inspíracions para otro intento impulsado por AT&T llamado <b>MULTICS</b>
      </p>
      <h3>Multics</h3>
      <p>
        Su desarrollo comenzo en 1964 en una operacion conjunta entre MIT, General Electric y Bell Labs, que para su
        tiempo quizo introducir varios conceptos novedosos como:
      </p>
      <ul>
        <li>Time lock</li>
        <li>Multi level security</li>
        <li>Sistema de archivos gerarquicos</li>
      </ul>
      <p>
        Entre esas caracteristicas son las que impulsarian sistemas posteriores
      </p>
      <br/>
      <p>
        En este proyecto se encontraban trabajando <b>Kent Thompson</b> y <b>Dennis Ritchie</b> pero en 1969
        Bell Labs decidio para el proyecto debido a que la complejidad del sistema operativo era demaciada para
        seguir siendo desarrolada ademas que era demaciado exigente con los recursos.
      </p>
      <Escape next="creators"/>
    </div>
  );
};
