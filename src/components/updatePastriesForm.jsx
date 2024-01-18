import "../styles/admin.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPastryQuantity } from "../store/pastriesSlices";
import messages from "../config/message";
/**
 * Formulaire de mise à jours de patisserie
 * @param {*} param0 id : identifiant de l'object, chiffre :
 * @returns JSX
 */
const UpdatePastrieForm = ({ id, chiffre }) => {
  const [pastryQuantity, setPastryQuantity] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  /**
   * Fonction de soumission de formulaire
   * @param {*} e
   */
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      let newPastryQuantity = parseInt(pastryQuantity) + parseInt(chiffre);
      if (newPastryQuantity < 0) newPastryQuantity = 0;

      const promiseSucces = dispatch(
        addPastryQuantity({ id, newPastryQuantity })
      );
      promiseSucces.then((succes) => {
        console.log("succes.payload", succes.payload);
        if (succes.payload !== false) {
          setMessage(messages.addQuantity);
        } else {
          setMessage(messages.error);
        }
      });
    } catch (e) {
      console.log("error handleSubmit in UpdatePastrieForm");
    }
  };

  /**
   * Modification de la quantité
   * @param {*} e
   */
  const handleQuantity = (e) => {
    try {
      setPastryQuantity(e.target.value);
    } catch (e) {
      console.log("error handleQuantity in UpdatePastrieForm");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <p>{message}</p>}
      <label>
        <input type="hidden" value={id} />
        <span>Quantité:</span>
        <input
          type="number"
          value={pastryQuantity}
          onChange={handleQuantity}
          required
        />
      </label>{" "}
      <button className="btn-modal" type="submit">
        Confirm
      </button>
    </form>
  );
};

export default UpdatePastrieForm;
