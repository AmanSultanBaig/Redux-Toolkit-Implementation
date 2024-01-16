import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import { UserList } from "./pages/users/UserList";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <UserList />
    </div>
  );
};

export default App;
