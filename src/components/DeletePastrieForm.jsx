import { useState } from "react";
import messages from "../config/message";
/**
 * Formulaire de suppression de patisserie
 * @param {*} param0 id : identifiant de l'object, chiffre :
 * @returns JSX
 */
const DeletePastrieForm = ({ handleDelete, titre }) => {
  const [message, setMessage] = useState(null);

  /**
   * Fonction de soumission de formulaire
   * @param {*} e
   */
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const succes = handleDelete();
      if (succes) {
        setMessage(messages.delPastry);
      } else {
        setMessage(messages.error);
      }
    } catch (e) {
      console.log("error handleSubmit in DeletePastrieForm");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <p>{message}</p>}
      <p>Voulez vous vraiment supprimer la patisserie :</p>
      <p>{titre}</p>
      <button className="btn-modal" type="submit">
        Oui
      </button>
    </form>
  );
};

export default DeletePastrieForm;
