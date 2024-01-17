import "../styles/admin.scss";

import { useState } from "react";

const AddPastrieForm = () => {
  const [pastryName, setPastryName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [pastryQuantity, setPastryQuantity] = useState("");
  const handleQuantity = (e) => {
    setPastryQuantity(e.target.value);
  };

  const handleName = (e) => {
    setPastryName(e.target.value);
  };
  return (
    <form className="admin-page" onSubmit={handleSubmit}>
      <div className="admin-form">
        <label>
          <span>Nom de la pâtisserie:</span>
          <input
            type="text"
            value={pastryName}
            onChange={handleName}
            required
          />
        </label>
        <label>
          <span>Quantité:</span>
          <input
            type="number"
            value={pastryQuantity}
            onChange={handleQuantity}
            min={1}
            required
          />
        </label>
        <label>
          <span>Image:</span>
          <button className="pastry-button">Browse...</button>
        </label>
      </div>
      <div className="form-group-check">
        <button className="add-pastrie" type="submit">
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default AddPastrieForm;
