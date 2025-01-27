import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<UserForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
