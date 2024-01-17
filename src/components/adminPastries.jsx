import "../styles/admin.scss";

import Modal from "./modal";
const AdminPastries = ({ id, titre, chiffre }) => {
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
            <div>Formulaire a faire</div>
          </Modal>
          <button>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default AdminPastries;
