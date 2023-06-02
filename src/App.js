import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/summary" element={<Summary />}></Route>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
