import './Condiciones.css';

const Condiciones = () => {
  const app = document.getElementById('app');
  app.innerHTML += `  <!-- Usamos "+=" para añadir el contenido a la página sin eliminar lo que ya está -->
    <section class="condiciones">
      <h2>CONDICIONES LEGALES DE LA OFERTA</h2>
      <div class="condiciones-section">
        <h3>1. Mercedes Avatar</h3>
        <p>
          PVP recomendado para un MERCEDES AVATAR 1.5 TSI 110kW (150cv) Man (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Mercedes Financial Services incluidos en el precio).
          Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo Mercedes, así como para los familiares de estos de primer grado y cónyuge que financien a través de Mercedes Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses.
        </p>
      </div>
      
      <div class="condiciones-section">
        <h3>2. Mercedes Solaris</h3>
        <p>
          PVP recomendado para un MERCEDES SOLARIS 1.5 TSI 110kW (150cv) DSG (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Mercedes Financial Services incluidos en el precio).
          Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo Mercedes, así como para los familiares de estos de primer grado y cónyuge que financien a través de Mercedes Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses.
        </p>
      </div>

      <div class="condiciones-section">
        <h3>3. Mercedes Vortex</h3>
        <p>
          PVP recomendado para un MERCEDES VORTEX 1.5 TSI 110kW (150cv) Man (IVA, Impuestos de Matriculación, Transporte, descuento de marca y concesionario y bonificaciones de Mercedes Financial Services incluidos en el precio).
          Oferta válida hasta el 31/12/2024 para clientes particulares que sean actuales propietarios de un vehículo Mercedes, así como para los familiares de estos de primer grado y cónyuge que financien a través de Mercedes Financial Services según condiciones actuales con un capital mínimo de 23000 € con una duración y permanencia mínima de la financiación de 60 meses.
        </p>
      </div>
    </section>
  `;
};

export default Condiciones;
