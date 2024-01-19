import "../styles/cardPastrie.scss";
import { useState } from "react";
/**
 * Permet de géré la création d'un carte patisserie
 * @param {*} id identifiant unique de l'object
 * @param {*} titre Nom de l'object
 * @param {*} chiffre Quantité de l'object
 * @returns
 */
const CardPastries = ({id, titre, chiffre}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageErrors = () => {
    // Cette fonction est appelée si l'image ne peut pas être chargée
    setImageError(true);
  };

  return (
    <div className="card-Pastries">
      {imageError ? (
        // Afficher une image de remplacement en cas d'erreur d'image
        <img
          src="../assets/images/dolphin.gif"
          alt="Image de remplacement"
          className="img-carte-Pastries"
        />
      ) : (
        // Afficher l'image avec le gestionnaire d'événements onError
        <img
          src={`../assets/images/pastrie_${id}.jpg`}
          alt="Image de la carte"
          className="img-carte-Pastries"
          onError={handleImageErrors}
        />
      )}
      <div className="texte-card-Pastries">
        <p>
          {titre} : {chiffre}
        </p>
      </div>
    </div>
  );
};

export default CardPastries;
