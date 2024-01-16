import "../styles/cardPastrie.scss";

const CardPastries = (id, titre, chiffre) => {
  return (
    <div className="card-Pastries">
      <img
        src={`../assets/images/pastrie_${id}.jpg`}
        alt="Image de la carte"
        className="img-carte-Pastries"
      />
      <div className="texte-card-Pastries">
        <p>
          {titre} : <strong>{chiffre}</strong>
        </p>
      </div>
    </div>
  );
};

export default CardPastries;
