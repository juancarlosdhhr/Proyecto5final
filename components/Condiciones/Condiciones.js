// Condiciones.js
import './Condiciones.css';

const template = () => `
  <section class="condiciones">

    <ol>
      <li>
        <h3>CONDICIONES LEGALES DE LA OFERTA:</h3>
        <p>
         PVP recomendado en PyB para un NUEVO FORMENTOR 1.5 TSI 110kW (150cv) Man (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Seat Financial Services incluidos en el precio). Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo de
          marca Cupra, así como para los familiares de estos de primer grado y cónyuge que financien a través de Seat Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses. Campaña incompatible con otras ofertas financieras. 
          Seat Financial Services es una marca comercializada por Volkswagen Bank GmbH S.E. Consumo medio combinado con gama CUPRA FORMENTOR de 0,4 a 9,2 l/100km. Emisiones ponderadas de CO2 de 9 a 209 g/km (Valores WLTP). Imagen acabado CUPRA FORMENTOR con opcionales.
        </p>
      </li>
      <li>
        <h3>CONDICIONES LEGALES DE LA OFERTA:</h3>
        <p>
          PVP recomendado en PyB para un CUPRA TERRAMAR 1.5 eTSI 110kW (150cv) DSG (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Seat Financial Services incluidos en el precio). Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo de
           marca Cupra, así como para los familiares de estos de primer grado y cónyuge que financien a través de Seat Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses. Campaña incompatible con otras ofertas financieras.
            Seat Financial Services es una marca comercializada por Volkswagen Bank GmbH S.E. Consumo medio combinado con gama CUPRA TERRAMAR de 0,4 a 8,8 l/100km. Emisiones ponderadas de CO2 de 9 a 199 g/km (Valores WLTP). Imagen acabado CUPRA TERRAMAR con opcionales.
        </p>
      </li>
      <li>
        <h3>CONDICIONES LEGALES DE LA OFERTA:</h3>
        <p>
          PVP recomendado en PyB para un CUPRA TAVASCAN 77kWh 210kW (286CV) FIRST EDITION (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Seat Financial Services incluidos en el precio). Oferta válida hasta el 31/12/2024 para clientes particulares que financien a través de Seat 
          Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses. Campaña incompatible con otras ofertas financieras. Seat Financial Services es una marca comercializada por Volkswagen Bank GmbH S.E. Consumo medio combinado con gama 
          CUPRA TAVASCAN de 15,2 a 16,8 kWh/100km Emisiones ponderadas de CO2 de 0 g/km (Valores WLTP). Imagen acabado CUPRA TAVASCAN con opcionales. El precio incluye la ayuda del programa de incentivos a la movilidad eficiente y sostenible (Programa MOVES III) que puede no estar disponible en tu Comunidad Autónoma. 
          El incentivo de plan MOVES (7.000€) es aplicable a particulares que compren un vehículo eléctrico, entregando un vehículo con un mínimo de 7 años de antigüedad para achatarramiento, y acreditando al menos 12 meses de titularidad.
        </p>
      </li>
      <li>
        <h3>CONDICIONES LEGALES DE LA OFERTA:</h3>
        <p>
          PVP recomendado en PyB para un NUEVO CUPRA LEON 1.5 TSI 110kW (150cv) Man (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Seat Financial Services incluidos en el precio). Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo de
           marca Cupra, así como para los familiares de estos de primer grado y cónyuge que financien a través de Seat Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses. Campaña incompatible con otras ofertas financieras. 
           Seat Financial Services es una marca comercializada por Volkswagen Bank GmbH S.E. Consumo medio combinado con gama CUPRA LEON de 0,4 a 8,7 l/100km. Emisiones ponderadas de CO2 de 8 a 198 g/km (Valores WLTP). Imagen acabado CUPRA LEON con opcionales.
        </p>
      </li>
    
    </ol>
  </section>
`;

const Condiciones = () => {
  document.querySelector('.condiciones-container').innerHTML = template();
};

export default Condiciones;
