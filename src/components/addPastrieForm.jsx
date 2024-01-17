import "../styles/admin.scss";
import ImageUploader from "./ImageUploader";
import { useState } from "react";
import { addNewPastrie } from "../store/pastriesSlices";
import { useDispatch } from "react-redux";

const AddPastrieForm = () => {
  const [pastryName, setPastryName] = useState("");
  const [pastryQuantity, setPastryQuantity] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewPastrie({pastryName, pastryQuantity, selectedImage}));
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
