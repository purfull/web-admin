import "./App.css";
import Login from "./pages/login/Login";
import Console from "./pages/dashboard/console";
import Dashboard from "./pages/dashboard/dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Console />} />
          <Route path="reports" element={<Dashboard />} />


        </Routes>
      </Router>
    </>

  );
}

export default App;
