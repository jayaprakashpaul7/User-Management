import { Component } from "react";
import UsersList from "../UsersList";
import "./index.css";

class UserForm extends Component {
  state = {
    name: "",
    email: "",
    department: "",
    errorMsg: "",
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

  editUser = async (id) => {
    const { name, email, department } = this.state;

    if ((name || email || department) !== "") {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const userDetails = { name, email, department };
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(response);
      if (response.ok) {
        this.setState((prev) => ({
          users: prev.users.map((eachUser) =>
            eachUser.id === id ? { ...eachUser, ...userDetails } : eachUser
          ),
        }));
      }
      this.setState({ name: "", email: "", department: "" });
    } else {
      this.setState({
        toggle: true,
        errorMsg: "*Please fill out all required fields.",
      });
    }
  };

  addUser = async (event) => {
    event.preventDefault();
    const { name, email, department } = this.state;

    if ((name || email || department) !== "") {
      const url = "https://jsonplaceholder.typicode.com/users";
      const userDetails = { name, email, department };
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
      this.setState({ name: "", email: "", department: "" });
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

  render() {
    const { name, toggle, email, department, errorMsg, users } = this.state;

    return (
      <div className="bg-container">
        <div className="form-bg">
          <h1>User Form</h1>
          <form onSubmit={this.addUser}>
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
            <button type="submit" className="save-user- add-btn">
              Add User
            </button>
          </form>
        </div>
        <UsersList users={users} del={this.delete} editUser={this.editUser} />
      </div>
    );
  }
}
export default UserForm;
