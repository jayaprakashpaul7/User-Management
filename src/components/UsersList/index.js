import "./index.css";

const UsersList = (props) => {
  const { users, del, editUser, btnToggle, onClickBtnToggle } = props;
  const { id, name, email, department } = users;

  const onDelete = () => {
    del(id);
  };

  const onEdit = () => {
    editUser();
  };
  const onClickToggle = () => {
    onClickBtnToggle();
  };

  return (
    <li key={id}>
      <div>
        <div className="profile-and-buttons-container">
          <div className="profile-img">{name[0]}</div>
          <div>
            <button className="edit-btn btn" onClick={onEdit}>
              Edit
            </button>
            <button
              data-testid="delete"
              onClick={onDelete}
              className="delete-btn btn"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="user-details">
          <h1 className="name">{name}</h1>
          <p className="email">{email}</p>
          <p className="department">{department}</p>
        </div>
      </div>
    </li>
  );
};

export default UsersList;
