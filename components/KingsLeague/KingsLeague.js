import './KingsLeague.css';

const template = () => `
  <section class="kings-league">
    <h2>CUPRA en la Kings League</h2>
    <div class="kings-league-content">
      <img src="path_to_kingsleague_image.jpg" alt="CUPRA en la Kings League" class="kings-league-image" />
      <div class="kings-league-text">
        <p>CUPRA, patrocinador de la Kings League Infojobs...</p>
        <p>Arranca el tercer Split de la Kings League...</p>
        <p><a href="url_to_more_info_page">Saber más</a></p>
      </div>
    </div>
  </section>
`;

const KingsLeague = () => {
  document.querySelector('.kings-league-container').innerHTML = template();
};

export default KingsLeague;
