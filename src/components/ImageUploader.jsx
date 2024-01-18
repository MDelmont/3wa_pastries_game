import { useState } from "react";

/**
 * Permet de géré le téléchargement d'une image
 * @param {*} param0  onImageUpload : Fichier image télécharger par l'utilisateur
 * @returns
 */
const ImageUploader = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  /**
   * Permet la mise a jour de l'image quand celle-ci est modifier
   * @param {*} e evenement
   */
  const handleImageChange = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
          onImageUpload(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } catch (e) {
      console.log("error handleImageChange in ImageUploader");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </div>
  );
};

export default ImageUploader;
