import './Condiciones.css';

const Condiciones = () => {
  const app = document.getElementById('app');
  app.innerHTML += `  
    <section class="condiciones" id="condiciones"> <!-- Asegúrate de agregar el id aquí -->
      <h2>CONDICIONES LEGALES DE LA OFERTA</h2>
      <div class="condiciones-section">
        <p>1. MERCEDES AVATAR</p>
        <p>
          PVP recomendado para un MERCEDES AVATAR 1.5 TSI 110kW (300cv) Man (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Mercedes Financial Services incluidos en el precio).
          Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo Mercedes, así como para los familiares de estos de primer grado y cónyuge que financien a través de Mercedes Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses.
        </p>
      </div>
      
      <div class="condiciones-section">
        <p>2. MERCEDES SOLARIS</p>
        <p>
          PVP recomendado para un MERCEDES SOLARIS 2.5 TSI 110kW (350cv) DSG (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Mercedes Financial Services incluidos en el precio).
          Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo Mercedes, así como para los familiares de estos de primer grado y cónyuge que financien a través de Mercedes Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses.
        </p>
      </div>

      <div class="condiciones-section">
        <p>3. MERCEDES VORTEX</p>
        <p>
          PVP recomendado para un MERCEDES VORTEX 3.0 TSI 110kW (400cv) Man (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Mercedes Financial Services incluidos en el precio).
          Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo Mercedes, así como para los familiares de estos de primer grado y cónyuge que financien a través de Mercedes Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses.
        </p>
      </div>
    </section>
  `;
};

export default Condiciones;
