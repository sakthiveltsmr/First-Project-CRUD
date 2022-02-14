import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Home } from "./component/Home";
// import { AddUser } from "./component/AddUser";
// import { EditUser } from "./component/EditUser";
import Home from "./component/Home";
import AddUser from "./component/Adduser";
import EditUser from "./component/Edituser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes } from "react-router";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Routes>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
