import { Component } from "react";
import UsersList from "../UsersList";
import "./index.css";

class UserForm extends Component {
  state = {
    id: null,
    name: "",
    email: "",
    department: "",
    errorMsg: "",
    btnToggle: true,
    toggle: false,
    users: [],
  };

  delete = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const options = {
      method: "DELETE",
    };
    const response = await fetch(url, options);
    if (response.ok) {
      this.setState((prev) => ({
        users: prev.users.filter((e) => e.id !== id),
      }));
    }
    const data = await response.json();
  };

  componentDidMount() {
    this.getUsersData();
  }

  getUsersData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState((prevState) => ({ users: data }));
  };

  editUser = (user) => {
    this.setState({
      id: user.id,
      name: user.name,
      email: user.email,
      department: user.department,
      btnToggle: false,
    });
  };

  updateUser = async (event) => {
    event.preventDefault();
    const { id, name, email, department } = this.state;
    const userDetails = { id, name, email, department };
    if (name || email || department || id) {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };
      const response = await fetch(url, options);
      if (response.ok) {
        this.setState((prev) => ({
          users: prev.users.map((eachUser) =>
            eachUser.id === id ? { ...eachUser, ...userDetails } : eachUser
          ),
          toggle: false,
          btnToggle: true,
          id: "",
          name: "",
          email: "",
          department: "",
        }));
      }
    } else {
      this.setState({ toggle: true, errorMsg: "Update the data you want" });
    }
  };

  addUser = async (event) => {
    event.preventDefault();
    const { id, name, email, department } = this.state;

    if (id || name || email || department) {
      const url = "https://jsonplaceholder.typicode.com/users";
      const userDetails = { id, name, email, department };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      this.setState((prevState) => ({
        users: [...prevState.users, data],
        toggle: false,
      }));
      this.setState({ id: "", name: "", email: "", department: "" });
    } else {
      this.setState({
        toggle: true,
        errorMsg: "*Please fill out all required fields.",
      });
    }
  };

  onChangeusername = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeuseremail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangedepartment = (event) => {
    this.setState({ department: event.target.value });
  };

  onClickBtnToggle = () => {
    this.setState((prevState) => ({ btnToggle: !prevState.btnToggle }));
  };

  render() {
    const { id, name, btnToggle, toggle, email, department, errorMsg, users } =
      this.state;

    return (
      <div className="bg-container">
        <div className="form-bg">
          <h1>User Form</h1>
          <form onSubmit={btnToggle ? this.addUser : this.updateUser}>
            <div className="input-container">
              <label className="field-label" htmlFor="name">
                Id:
              </label>
              <input
                type="text"
                id="number"
                className="input-field"
                placeholder="Enter Id"
                value={id}
              />
            </div>
            <div className="input-container">
              <label className="field-label" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChangeusername}
              />
            </div>
            <div className="input-container">
              <label className="field-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChangeuseremail}
              />
            </div>
            <div className="input-container">
              <label className="field-label" htmlFor="department">
                Department:
              </label>
              <input
                type="text"
                id="department"
                className="input-field"
                placeholder="Enter Deparment"
                value={department}
                onChange={this.onChangedepartment}
              />
            </div>
            {toggle && <p className="errormsg">{errorMsg}</p>}
            <button type="submit" className="save-user add-btn">
              {btnToggle ? "Add User" : "Edit User"}
            </button>
          </form>
        </div>

        <div className="bg">
          <div className="t-b-c">
            <div className="title-c">
              <h1 className="title">All Users</h1>
              <span className="count">{[users.length]}</span>
            </div>
          </div>
          <ul>
            {users.map((each) => (
              <UsersList
                users={each}
                del={this.delete}
                editUser={() => this.editUser(each)}
                onClickBtnToggle={this.onClickBtnToggle}
                btnToggle={btnToggle}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default UserForm;
// https://drive.google.com/drive/folders/1aj7K1ALTw1KLyKJ8R0mVEKY4QyiGUUBd?usp=drive_link
