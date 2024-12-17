import './KingsLeague.css';

const template = () => `
  <section class="kings-league">
    <h2>CUPRA EN LA KINGS LEAGUE</h2>
    <div class="kings-league-content">
      <img src="https://www.novedadesmotor.com/images/showid2/5858247?w=1200&zc=4" alt="CUPRA en la Kings League" class="kings-league-image" />
      <div class="kings-league-text">
        <p>CUPRA, patrocinador de la Kings League Infojobs...</p>
        <p>Arranca el tercer Split de la Kings League...</p>
        <p><a href="url_to_more_info_page">Saber más</a></p>
      </div>
    </div>
  </section>
`;

const KingsLeague = () => {
  document.getElementById('app').innerHTML += template();
};

export default KingsLeague;