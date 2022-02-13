// import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from "./component/Adduser";
import Edituser from "./component/Edituser";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        {/* <h1>Navgation Bar</h1> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/edit/:id" element={<Edituser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
