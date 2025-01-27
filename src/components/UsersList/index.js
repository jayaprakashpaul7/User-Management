import "./index.css";

const UsersList = (props) => {
  const { users, del, editUser } = props;

  const onDelete = (id) => {
    del(id);
  };

  const onEdit = (id) => {
    editUser(id);
  };

  return (
    <div className="bg">
      <div className="t-b-c">
        <div className="title-c">
          <h1 className="title">All Users</h1>
          <span className="count">{[users.length]}</span>
        </div>
      </div>

      <ul>
        {users.map((each) => (
          <li key={each.id}>
            <div>
              <div className="profile-and-buttons-container">
                <div className="profile-img">{each.name[0]}</div>
                <div>
                  <button
                    className="edit-btn btn"
                    onClick={() => {
                      onEdit(each.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    data-testid="delete"
                    onClick={() => {
                      onDelete(each.id);
                    }}
                    className="delete-btn btn"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="user-details">
                <h1 className="name">{each.name}</h1>
                <p className="email">{each.email}</p>
                <p className="department">{each.department}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
