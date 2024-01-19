import "../styles/admin.scss";
import ImageUploader from "./ImageUploader";
import { useState } from "react";
import { addNewPastrie } from "../store/pastriesSlices";
import { useDispatch } from "react-redux";

const AddPastrieForm = () => {
  const [pastryName, setPastryName] = useState("");
  const [pastryQuantity, setPastryQuantity] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const promiseSucces = dispatch(
      addNewPastrie({ pastryName, pastryQuantity, selectedImage })
    );

    promiseSucces.then((succes) => {
      const id = succes?.payload?.pastrie?.id;

      if (id) {
        setMessage("Patisserie ajoutée avec succes");
      } else {
        setMessage("Un problème est survenu");
      }
    });
  };

  const handleQuantity = (e) => {
    setPastryQuantity(e.target.value);
    setMessage(null);
  };

  const handleName = (e) => {
    setPastryName(e.target.value);
    setMessage(null);
  };

  const handleImageUpload = (imageData) => {
    setSelectedImage(imageData);
    setMessage(null);
  };
  return (
    <form className="admin-page" onSubmit={handleSubmit}>
      <div className="admin-form">
        <label>
          {message && <span>{message}</span>}
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
