import Modal from "./modal";
import { useState } from "react";
import { addPastryQuantity } from "../store/pastriesSlices";
import { useDispatch } from "react-redux";

import "../styles/admin.scss";

const AdminPastries = ({ id, titre, chiffre }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPastryQuantity = parseInt(pastryQuantity) + parseInt(chiffre);
    console.log(chiffre);
    dispatch(addPastryQuantity({ id, newPastryQuantity }));
  };
  const [pastryQuantity, setPastryQuantity] = useState("");
  const handleQuantity = (e) => {
    setPastryQuantity(e.target.value);
  };
  return (
    <tr className="admin-card-Pastries">
      <td>
        {" "}
        <img
          src={`../assets/images/pastrie_${id}.jpg`}
          alt="Image de la carte"
          className="img-carte-Pastries"
        />
      </td>
      <td>{titre}</td>
      <td>{chiffre}</td>
      <td>
        <div className="admin-button">
          <Modal btnName="add">
            <form onSubmit={handleSubmit}>
              <label>
                <input type="hidden" value={id} />
                <span>Quantité:</span>
                <input
                  type="number"
                  value={pastryQuantity}
                  onChange={handleQuantity}
                  min={1}
                  required
                />
              </label>{" "}
              <button className="btn-modal" type="submit">
                Confirm
              </button>
            </form>
          </Modal>
          <button className="btn-moda">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default AdminPastries;
