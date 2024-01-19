import "../styles/admin.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPastryQuantity } from "../store/pastriesSlices";
const UpdatePastrieForm = ({ id, chiffre }) => {
  const [pastryQuantity, setPastryQuantity] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPastryQuantity = parseInt(pastryQuantity) + parseInt(chiffre);
    if (newPastryQuantity < 0) newPastryQuantity = 0;

    const promiseSucces = dispatch(
      addPastryQuantity({ id, newPastryQuantity })
    );
    promiseSucces.then((succes) => {
      console.log("succes.payload", succes.payload);
      if (succes.payload !== false) {
        setMessage("Ajoute de la quantité réussi");
      } else {
        setMessage("Un problème est survenu");
      }
    });
  };

  const handleQuantity = (e) => {
    setPastryQuantity(e.target.value);
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
