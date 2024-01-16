import React from "react";
import Navbar from "./components/Navbar";
import { UserList } from "./pages/users/UserList";

import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <UserList />
    </div>
  );
};

export default App;
