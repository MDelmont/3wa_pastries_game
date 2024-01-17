import "../styles/loginPage.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdminPastries from "../components/adminPastries";
import AddPastrieForm from "../components/addPastrieForm";
import { useEffect } from "react";
import { requestPastries } from "../store/pastriesSlices";
import Modal from "../components/modal";

function AdminPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.loginSliceReducer);
  const { pastries } = useSelector((store) => store.pastriesSliceReducer);

  useEffect(() => {
    if (!auth) navigate(`/login`);
  }, [auth]);

  useEffect(() => {
    dispatch(requestPastries());
  }, []);

  return (
    <div className="admin-page">
      <Modal btnName="Ajouter une pâtisserie">
        <AddPastrieForm />
      </Modal>

      <h2>Liste des pâtisseries</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Quantité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pastries.length > 0 &&
            pastries.map((pastrie) => (
              <AdminPastries
                key={pastrie.id}
                id={pastrie.id}
                titre={pastrie.name}
                chiffre={pastrie.quantity}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
