import "../styles/admin.scss";
import ImageUploader from "./ImageUploader";
import { useState } from "react";
import { addNewPastrie } from "../store/pastriesSlices";
import { useDispatch } from "react-redux";
import messages from "../config/message";
/**
 * Object react qui permet de créer le formulaire d'ajout de patisserie
 * @returns JSX
 */
const AddPastrieForm = () => {
  const [pastryName, setPastryName] = useState("");
  const [pastryQuantity, setPastryQuantity] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  /**
   * soumission du formulaire
   * @param {*} e evenement
   */
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const promiseSucces = dispatch(
        addNewPastrie({ pastryName, pastryQuantity, selectedImage })
      );

      promiseSucces.then((succes) => {
        const id = succes?.payload?.pastrie?.id;

        if (id) {
          setMessage(messages.addPastry);
        } else {
          setMessage(messages.error);
        }
      });
    } catch (e) {
      console.log("handleSubmit in AddPastrieForm");
    }
  };
  /**
   * Permet de faire appel à la fonction de modification de quantité
   * @param {*} e evenement
   */
  const handleQuantity = (e) => {
    try {
      setPastryQuantity(e.target.value);
      setMessage(null);
    } catch (e) {
      console.log("handleQuantity in AddPastrieForm");
    }
  };

  /**
   * Permet de faire appel à la fonction de modification de name
   * @param {*} e evenement
   */
  const handleName = (e) => {
    try {
      setPastryName(e.target.value);
      setMessage(null);
    } catch (e) {
      console.log("handleName in AddPastrieForm");
    }
  };

  /**
   * Permet de faire appel à la fonction de modification de l'image
   * @param {File} imageData file
   */
  const handleImageUpload = (imageData) => {
    try {
      setSelectedImage(imageData);
      setMessage(null);
    } catch (e) {
      console.log("handleImageUpload in AddPastrieForm");
    }
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
