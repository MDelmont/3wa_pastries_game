import "../styles/admin.scss";
import ImageUploader from "./ImageUploader";
import { useState } from "react";

const AddPastrieForm = () => {
  const [pastryName, setPastryName] = useState("");
  const [pastryQuantity, setPastryQuantity] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log("Pastry Name:", pastryName);
    console.log("Pastry Quantity:", pastryQuantity);
    console.log("Selected Image Data:", selectedImage);
  };

  const handleQuantity = (e) => {
    setPastryQuantity(e.target.value);
  };

  const handleName = (e) => {
    setPastryName(e.target.value);
  };

  const handleImageUpload = (imageData) => {
    setSelectedImage(imageData);
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
          <ImageUploader onImageUpload={handleImageUpload} />
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
