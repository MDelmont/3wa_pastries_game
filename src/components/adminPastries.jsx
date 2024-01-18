import Modal from "./modal";

import UpdatePastrieForm from "./updatePastriesForm";
import "../styles/admin.scss";
import { useDispatch } from "react-redux";
import { deletePastrie } from "../store/pastriesSlices";
const AdminPastries = ({ id, titre, chiffre }) => {
  const dispatch = useDispatch()
  const handleDelete = (e) => {
    dispatch(deletePastrie(id))
  }
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
            <UpdatePastrieForm  id = {id} chiffre= {chiffre}/>
            
          </Modal>
          <button className="btn-moda" onClick={handleDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default AdminPastries;
