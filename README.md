# User Management App

## Overview

The **User Management App** is a React-based application designed to manage user data. Users can perform CRUD (Create, Read, Update, Delete) operations through a user-friendly interface. The app leverages the JSONPlaceholder API to simulate backend operations.

---

## Features

- **Add User:** Add a new user with `name`, `email`, and `department` details.
- **Edit User:** Update existing user information.
- **Delete User:** Remove users from the list.
- **Fetch User Data:** Retrieve a list of users from the JSONPlaceholder API.
- **Error Handling:** Alerts the user when required fields are not filled.

---

## Project Structure

```plaintext
src
├── components
│   ├── UserForm
│   │   ├── index.js         # Main UserForm component
│   │   ├── index.css        # Styling for UserForm
│   ├── UsersList
│       ├── index.js         # Component for displaying user list
│       ├── index.css        # Styling for UsersList
├── App.js                    # Root component
└── index.js                  # Entry point
```

---

## API Integration

The app interacts with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for data operations:

- **GET:** Fetch user data (`https://jsonplaceholder.typicode.com/users`)
- **POST:** Add a user (`https://jsonplaceholder.typicode.com/users`)
- **PUT:** Edit user details (`https://jsonplaceholder.typicode.com/users/{id}`)
- **DELETE:** Remove a user (`https://jsonplaceholder.typicode.com/users/{id}`)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd user-management-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. Open the app in your browser at `http://localhost:3000/`.
2. Use the form to add users by filling in the `name`, `email`, and `department` fields.
3. View the list of users.
4. Edit or delete users as needed.

---

## Components

### 1. **UserForm**

Handles user input and form submission for adding and editing users.

- **State Variables:**
  - `name`, `email`, `department`: Stores form values.
  - `errorMsg`: Displays validation messages.
  - `toggle`: Toggles error messages.
  - `users`: Stores the list of users.

### 2. **UsersList**

Displays a list of users and provides options for editing and deleting users.

---

## Styling

The app uses CSS for styling, ensuring a clean and responsive design. The styles are modular, with separate CSS files for each component.

---

## Future Enhancements

- Add authentication for secure access.
- Improve error handling with detailed feedback.
- Integrate with a real backend service.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).
