import "../styles/cardPastrie.scss";
const CardPasties = (id, titre, chiffre) => {
  console.log(`../assets/images/pastrie_${id}.jpg`);
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

export default CardPasties;
