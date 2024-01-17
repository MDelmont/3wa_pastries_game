import Modal from "./modal";
import { useState } from "react";

import "../styles/admin.scss";

const AdminPastries = ({ id, titre, chiffre }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  if(pastryQuantity !== undefined && pastryQuantity > 1)
    console.log(pastryQuantity);
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
        </div>
      </td>
    </tr>
  );
};

export default AdminPastries;
