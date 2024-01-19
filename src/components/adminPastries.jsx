import Modal from "./modal";

import UpdatePastrieForm from "./updatePastriesForm";
import "../styles/adminPage.scss";
import { useDispatch } from "react-redux";
import { deletePastrie } from "../store/pastriesSlices";
import DeletePastrieForm from "./DeletePastrieForm";
import { useState } from "react";

/**
 * Permet de généré un ligne du tableau administateur
 * @param {*} param0  id de l'object, titre : Nom de l'object, chiffre: quantity
 * @returns
 */
const AdminPastries = ({ id, titre, chiffre }) => {
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();
  /**
   * Permet de faire appel à la fonction de suppression de l'object
   * @param {*} e
   */
  const handleDelete = (e) => {
    try {
      dispatch(deletePastrie(id));
      return true;
    } catch (e) {
      console.log(" error handleDelete in AdminPastries");
      return false;
    }
  };
  const handleImageError = () => {
    // Cette fonction est appelée si l'image ne peut pas être chargée
    setImageError(true);
  };

  return (
    <tr className="admin-card-Pastries">
      <td>
       
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
            onError={handleImageError}
          />
        )}
      </td>
      <td>{titre}</td>
      <td className="td-number">{chiffre}</td>
      <td>
        <div className="admin-button">
          <Modal btnName="modifier">
            <UpdatePastrieForm id={id} chiffre={chiffre} />
          </Modal>

          <Modal btnName="supprimer">
            <DeletePastrieForm titre={titre} handleDelete={handleDelete} />
          </Modal>
        </div>
      </td>
    </tr>
  );
};

export default AdminPastries;
