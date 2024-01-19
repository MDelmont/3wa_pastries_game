import "../styles/cardPastrie.scss";
/**
 * Permet de géré la création d'un carte patisserie
 * @param {*} id identifiant unique de l'object
 * @param {*} titre Nom de l'object
 * @param {*} chiffre Quantité de l'object
 * @returns
 */
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
          {titre} : {chiffre}
        </p>
      </div>
    </div>
  );
};

export default CardPastries;
