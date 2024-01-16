// import "../styles/admin.scss";

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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Nom de la pâtisserie:</span>
        <input type="text" value={pastryName} onChange={handleName} required />
      </label>
      <label>
        <span>Quantité:</span>
        <input
          type="number"
          value={pastryQuantity}
          onChange={handleQuantity}
          required
        />
      </label>
      <label>
        <span>Image:</span>
        <button>Browse...</button>
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddPastrieForm;
