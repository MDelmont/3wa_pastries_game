import "../styles/admin.scss";

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
          <button>Add</button>
          <button>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default AdminPastries;
